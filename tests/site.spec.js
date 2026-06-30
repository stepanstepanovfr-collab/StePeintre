const { expect, test } = require("@playwright/test");

test("homepage loads with visible calls to action", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/StePeintre/);
  await expect(page.getByRole("heading", { name: /Votre intérieur mérite/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "Demander un devis gratuit" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Voir les réalisations" })).toBeVisible();
});

test("page has no horizontal overflow", async ({ page }) => {
  await page.goto("/");

  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(hasOverflow).toBe(false);
});

test("quote form confirmation appears", async ({ page }) => {
  await page.goto("/#contact");

  await page.getByLabel("Nom").fill("Test Client");
  await page.getByLabel("Téléphone").fill("0102030405");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Ville").fill("Caen");
  await page.getByLabel("Type de travaux").selectOption("Peinture intérieure");
  await page.locator("[data-quote-form]").evaluate((form) => form.requestSubmit());

  await expect(page.getByText(/Demande prête/)).toBeVisible();
});

test("quote form shows accessible validation feedback", async ({ page }) => {
  await page.goto("/#contact");

  await page.locator("[data-quote-form]").evaluate((form) => form.requestSubmit());

  await expect(page.getByText(/Complétez les champs indiqués/)).toBeVisible();
  await expect(page.getByLabel("Nom")).toHaveAttribute("aria-invalid", "true");
  await expect(page.getByText("Nom est obligatoire.")).toBeVisible();
});

test("seo metadata and crawl files are available", async ({ page, request }) => {
  await page.goto("/");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://stepanstepanovfr-collab.github.io/StePeintre/"
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /https:\/\/stepanstepanovfr-collab\.github\.io\/StePeintre\/assets\/realisation-salon\.jpg/
  );

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("https://stepanstepanovfr-collab.github.io/StePeintre/");
});
