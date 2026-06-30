const { expect, test } = require("@playwright/test");

test("homepage loads as a premium StePeintre landing page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/StePeintre/);
  await expect(page.getByRole("heading", { name: /Des murs propres/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Demander un devis gratuit/ }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Voir la transformation/ })).toBeVisible();
});

test("required sections and sticky actions are present", async ({ page }) => {
  await page.goto("/");

  for (const heading of [
    /Peinture, rénovation et finitions/,
    /Le changement doit se voir/,
    /Une méthode simple/,
    /Des rendus visuels/,
    /Pourquoi StePeintre/,
    /Des retours simples/,
    /StePeintre intervient en Normandie/,
    /Parlez-moi de votre chantier/
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }

  await expect(page.getByRole("link", { name: "WhatsApp" }).first()).toBeVisible();
});

test("page has no horizontal overflow", async ({ page }) => {
  await page.goto("/");

  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(hasOverflow).toBe(false);
});

test("quote form validates and confirms", async ({ page }) => {
  await page.goto("/#devis");

  await page.getByRole("button", { name: /Envoyer ma demande/ }).click();
  await expect(page.getByText(/Complétez les champs obligatoires/)).toBeVisible();

  await page.getByLabel("Nom").fill("Test Client");
  await page.getByLabel("Téléphone").fill("0102030405");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Ville").fill("Caen");
  await page.getByLabel("Type de travaux").selectOption("Peinture murs");
  await page.getByRole("button", { name: /Envoyer ma demande/ }).click();

  await expect(page.getByText(/Demande prête/)).toBeVisible();
});

test("seo metadata and crawl files are available", async ({ page, request }) => {
  await page.goto("/");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://stepanstepanovfr-collab.github.io/StePeintre/"
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /realisation-salon\.jpg/);

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("https://stepanstepanovfr-collab.github.io/StePeintre/");
});
