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
  await page.goto("/");
  await page.getByRole("link", { name: "Devis gratuit" }).first().click();

  await page.getByLabel("Nom").fill("Test Client");
  await page.getByLabel("Téléphone").fill("0102030405");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Ville").fill("Caen");
  await page.getByLabel("Type de travaux").selectOption("Peinture intérieure");
  await page.locator("[data-quote-form]").evaluate((form) => form.requestSubmit());

  await expect(page.getByText(/Votre demande est prête/)).toBeVisible();
});
