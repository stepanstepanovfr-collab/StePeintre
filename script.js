const root = document.documentElement;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const revealItems = document.querySelectorAll(".reveal");
const liveSection = document.querySelector(".live-site");
const progressText = document.querySelector("[data-progress-text]");
const stageLabel = document.querySelector("[data-stage-label]");
const floatingCta = document.querySelector(".floating-cta");
const loader = document.querySelector("[data-loader]");
const sectionAnchors = document.querySelectorAll("main section[id]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const safeProgress = clamp(progress);
  root.style.setProperty("--progress", safeProgress.toFixed(4));

  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  }

  if (floatingCta) {
    floatingCta.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.35);
  }

  if (stageLabel) {
    const stages = ["Protection", "Préparation", "Sous-couche", "Finition", "Livraison propre"];
    const stageIndex = Math.min(stages.length - 1, Math.floor(safeProgress * stages.length));
    stageLabel.textContent = stages[stageIndex];
  }

  if (liveSection) {
    const rect = liveSection.getBoundingClientRect();
    const sectionProgress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
    liveSection.style.setProperty("--section-progress", sectionProgress.toFixed(4));

    if (progressText) {
      progressText.textContent = `${Math.round(sectionProgress * 100)}%`;
    }
  }
}

function setupLoader() {
  if (!loader) return;

  const finish = () => {
    document.body.classList.add("is-loaded");
    window.setTimeout(() => loader.remove(), reduceMotion ? 20 : 520);
  };

  if (document.readyState === "complete") {
    window.setTimeout(finish, reduceMotion ? 0 : 420);
  } else {
    window.addEventListener("load", () => window.setTimeout(finish, reduceMotion ? 0 : 420), { once: true });
  }
}

function setupSplitText() {
  const targets = document.querySelectorAll("h1, .section-heading h2");

  targets.forEach((target) => {
    if (target.dataset.splitText === "true") return;

    const words = target.textContent.trim().split(/\s+/);
    target.setAttribute("aria-label", target.textContent.trim());
    target.dataset.splitText = "true";
    target.innerHTML = words
      .map(
        (word, index) =>
          `<span class="word-split" aria-hidden="true" style="--word-index:${index}"><span>${word}</span></span>`
      )
      .join(" ");
  });
}

function setupTiltCards() {
  if (reduceMotion) return;

  const cards = document.querySelectorAll(
    ".service-card, .portfolio-card, .price-card, .review-card, .trust-item, .metric, .signature-card, .timeline-step, .progress-panel, .contact-copy"
  );

  cards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function setupReveals() {
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupNavigation() {
  if (!navToggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    header?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header?.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.querySelectorAll("a").forEach((navLink) => {
        const isActive = navLink === link;
        navLink.classList.toggle("is-active", isActive);
        if (isActive) {
          navLink.setAttribute("aria-current", "page");
        } else {
          navLink.removeAttribute("aria-current");
        }
      });
      closeMenu();
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupActiveNavigation() {
  if (!nav || !sectionAnchors.length || !("IntersectionObserver" in window)) return;

  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
  );

  sectionAnchors.forEach((section) => observer.observe(section));
}

function setupComparison() {
  const comparison = document.querySelector("[data-comparison]");
  if (!comparison) return;

  const range = comparison.querySelector("[data-comparison-range]");
  const after = comparison.querySelector(".comparison-after");
  const handle = comparison.querySelector("[data-comparison-handle]");

  const update = (value) => {
    const safeValue = clamp(Number(value), 0, 100);
    after.style.clipPath = `inset(0 0 0 ${safeValue}%)`;
    handle.style.left = `${safeValue}%`;
  };

  range.addEventListener("input", () => update(range.value));
  update(range.value);
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const runCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const duration = 900;
    const started = performance.now();

    const tick = (time) => {
      const progress = clamp((time - started) / duration);
      counter.textContent = String(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(runCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupForm() {
  const form = document.querySelector("[data-quote-form]");
  const note = document.querySelector("[data-form-note]");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent = "Demande prête. Branchez ici votre email, votre CRM ou un service de formulaire.";
  });
}

let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateScrollProgress();
      ticking = false;
    });
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollProgress);

setupLoader();
setupSplitText();
setupReveals();
setupNavigation();
setupActiveNavigation();
setupComparison();
setupCounters();
setupForm();
setupTiltCards();
updateScrollProgress();
