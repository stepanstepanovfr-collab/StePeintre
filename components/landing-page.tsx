"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { BeforeAfter } from "@/components/before-after";
import { QuoteForm } from "@/components/quote-form";
import { contact, gallery, process, reasons, reviews, services, stats, zones } from "@/data/site";

export function LandingPage() {
  return (
    <main id="accueil" className="overflow-hidden bg-brand-radial text-ink">
      <Hero />
      <ProofStrip />
      <Services />
      <BeforeAfterSection />
      <Process />
      <Gallery />
      <WhyUs />
      <Reviews />
      <Zones />
      <Quote />
      <Footer />
      <FloatingActions />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 90]);

  return (
    <section ref={ref} className="relative min-h-screen px-4 pb-16 pt-28 text-white md:px-6 md:pt-32">
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-24 mx-auto h-[540px] max-w-6xl rounded-full bg-gold/18 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-white/15 bg-white/[0.06] p-5 shadow-card backdrop-blur-xl md:p-8 lg:min-h-[620px] lg:p-12"
        >
          <div className="inline-flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
            <span className="size-2 rounded-full bg-gold" />
            Peintre en bâtiment - Normandie
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.05rem,6vw,6rem)] font-black leading-[0.9] tracking-tight text-porcelain">
            Des murs propres. Une finition qui signe votre intérieur.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/82 md:text-xl">
            StePeintre prépare, protège et peint avec une exigence simple : un chantier clair, des finitions nettes et
            une pièce livrée impeccable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#devis"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-gold px-6 font-black text-ink shadow-glow transition hover:-translate-y-1 hover:bg-gold-soft"
            >
              Demander un devis gratuit <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#avant-apres"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 font-black text-cream transition hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              Voir la transformation
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative overflow-hidden rounded-lg border border-white/15 bg-cream p-4 text-ink shadow-card lg:min-h-[620px]"
        >
          <div className="rounded-lg bg-white p-4 shadow-glow">
            <Image src="/assets/stepeintre-logo.svg" alt="Logo StePeintre" width={640} height={198} priority />
          </div>
          <div className="relative mt-4 aspect-[4/4.35] overflow-hidden rounded-lg bg-ink">
            <Image
              src="/assets/realisation-salon.jpg"
              alt="Salon rénové avec une finition peinture premium"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Signature StePeintre</p>
              <h2 className="mt-2 font-display text-4xl font-black leading-none text-white">
                Propre du premier au dernier jour.
              </h2>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur">
      <strong className="font-display text-3xl text-gold">
        {value}
        {suffix}
      </strong>
      <span className="mt-1 block text-sm text-cream/72">{label}</span>
    </motion.div>
  );
}

function ProofStrip() {
  return (
    <div className="border-y border-white/10 bg-ink-deep/72 py-5 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-hidden px-4">
        {["Protection", "Préparation", "Application", "Contrôle", "Livraison propre", "Devis clair"].map((item) => (
          <span
            key={item}
            className="shrink-0 font-display text-3xl font-black uppercase text-transparent [-webkit-text-stroke:1px_rgb(248_242_219_/_0.75)] md:text-6xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="inline-flex rounded-lg bg-gold px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl font-black leading-[0.98] text-ink md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-smoke">{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <AnimatedSection id="services" className="bg-porcelain px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Peinture, rénovation et finitions pensées comme un travail de précision."
          text="Chaque prestation commence par le support : c’est ce qui fait la différence entre une peinture fraîche et une finition durable."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -8, rotate: index % 2 ? 0.4 : -0.4 }}
              className="group min-h-[280px] rounded-lg border border-ink/10 bg-cream/70 p-6 shadow-card transition hover:border-gold/60"
            >
              <service.icon className="size-10 text-gold" aria-hidden="true" />
              <h3 className="mt-12 font-display text-3xl font-black leading-none text-ink">{service.title}</h3>
              <p className="mt-4 leading-7 text-smoke">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function BeforeAfterSection() {
  return (
    <AnimatedSection id="avant-apres" className="bg-ink px-4 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="inline-flex rounded-lg bg-gold px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
            Avant / Après
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-[0.98] text-white md:text-6xl">
            Le changement doit se voir. La préparation doit se deviner.
          </h2>
        </div>
        <BeforeAfter />
      </div>
    </AnimatedSection>
  );
}

function Process() {
  return (
    <AnimatedSection id="processus" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Processus" title="Une méthode simple, lisible et rassurante." />
        <div className="grid gap-4 md:grid-cols-5">
          {process.map((step) => (
            <article key={step.step} className="rounded-lg border border-ink/10 bg-white p-5 shadow-card">
              <span className="grid size-12 place-items-center rounded-lg bg-ink font-black text-gold">
                {step.step}
              </span>
              <h3 className="mt-8 font-display text-2xl font-black text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-smoke">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Gallery() {
  return (
    <AnimatedSection id="realisations" className="bg-porcelain px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Réalisations" title="Des rendus visuels qui montrent le niveau d’exigence." />
        <div className="grid auto-rows-[320px] gap-4 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.article
              key={item.title}
              whileHover={{ scale: 1.015 }}
              className={`relative overflow-hidden rounded-lg border border-ink/10 bg-ink shadow-card ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="rounded-lg bg-gold px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-ink">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-3xl font-black text-white">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function WhyUs() {
  return (
    <AnimatedSection id="choisir" className="bg-ink px-4 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex rounded-lg bg-gold px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
              Pourquoi StePeintre
            </p>
            <h2 className="mt-5 font-display text-4xl font-black leading-[0.98] text-white md:text-6xl">
              Pourquoi StePeintre inspire confiance dès le premier rendez-vous.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur">
                <reason.icon className="size-9 text-gold" aria-hidden="true" />
                <h3 className="mt-8 font-display text-2xl font-black text-white">{reason.title}</h3>
                <p className="mt-3 leading-7 text-cream/72">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Reviews() {
  return (
    <AnimatedSection id="avis" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Avis clients" title="Des retours simples : propre, net, sérieux." />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.city} className="rounded-lg border border-ink/10 bg-white p-6 shadow-card">
              <div className="flex gap-1 text-gold" aria-label="5 étoiles">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-8 font-display text-2xl font-black leading-tight text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm font-bold text-smoke">
                {review.name} - {review.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Zones() {
  return (
    <AnimatedSection id="zone" className="bg-porcelain px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_.8fr]">
        <div className="rounded-lg border border-ink/10 bg-cream p-6 shadow-card md:p-10">
          <SectionHeading
            eyebrow="Zone d’intervention"
            title="StePeintre intervient en Normandie."
            text="Indiquez votre ville dans le formulaire : je vous réponds avec une première orientation claire selon votre chantier."
          />
          <div className="flex flex-wrap gap-2">
            {zones.map((zone) => (
              <span key={zone} className="rounded-lg border border-ink/10 bg-white px-4 py-3 font-black text-ink">
                {zone}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-ink/10 bg-ink p-6 text-white shadow-card md:p-10">
          <Image
            src="/assets/stepeintre-logo.svg"
            alt="StePeintre"
            width={520}
            height={160}
            className="rounded-lg bg-white p-4"
          />
          <p className="mt-8 text-lg leading-8 text-cream/78">
            Une identité claire, une méthode visible, un chantier qui donne confiance avant même la première couche.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Quote() {
  return (
    <AnimatedSection id="devis" className="bg-ink px-4 py-20 text-white md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="inline-flex rounded-lg bg-gold px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
            Devis gratuit
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-[0.98] text-white md:text-6xl">
            Parlez-moi de votre chantier.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cream/78">
            Ville, surface, état des murs, délais : plus votre demande est précise, plus la première réponse sera utile.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href={contact.phoneHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 font-black text-cream transition hover:border-gold hover:text-gold"
            >
              <Phone className="size-4" aria-hidden="true" /> Appeler
            </Link>
            <Link
              href={contact.whatsappHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-gold px-5 font-black text-ink shadow-glow transition hover:bg-gold-soft"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </Link>
          </div>
        </div>
        <QuoteForm />
      </div>
    </AnimatedSection>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 grid grid-cols-2 gap-2 md:hidden">
      <Link
        href={contact.whatsappHref}
        className="rounded-lg border border-white/20 bg-ink/92 px-4 py-3 text-center font-black text-cream shadow-card backdrop-blur"
      >
        WhatsApp
      </Link>
      <Link href="#devis" className="rounded-lg bg-gold px-4 py-3 text-center font-black text-ink shadow-glow">
        Devis gratuit
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-deep px-4 py-10 text-cream md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr_.8fr]">
        <Image
          src="/assets/stepeintre-logo.svg"
          alt="StePeintre"
          width={260}
          height={80}
          className="rounded-lg bg-white p-3"
        />
        <p className="max-w-xl leading-7 text-cream/70">
          Peintre en bâtiment en Normandie : peinture murs, plafonds, rénovation, préparation des supports et finitions
          propres.
        </p>
        <div className="text-sm text-cream/62">
          <p>Mentions légales : informations entreprise à compléter.</p>
          <p className="mt-2">© 2026 StePeintre. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
