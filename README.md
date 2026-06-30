# StePeintre

Site vitrine premium pour StePeintre, peintre en bâtiment en Normandie.

## Stack

- Next.js 14 avec export statique.
- TypeScript.
- Tailwind CSS.
- Framer Motion pour les animations fluides.
- Playwright, Pa11y, Lighthouse CI, ESLint, Stylelint et Prettier pour la qualité.

## Sections

- Hero premium avec CTA appel, WhatsApp et devis.
- Services : murs, plafonds, rénovation, finitions.
- Avant / Après interactif.
- Processus de chantier.
- Galerie de réalisations.
- Raisons de choisir StePeintre.
- Avis clients.
- Zone d'intervention en Normandie.
- Formulaire de demande de devis.
- Footer avec mentions légales.

## Modifier les contenus

Les textes, coordonnées, statistiques, services, avis, zones et images se trouvent dans `data/site.ts`.

Images et logo :

- Logo : `public/assets/stepeintre-logo.svg`
- Galerie et avant/après : `public/assets/*.jpg`
- Favicon : `public/assets/favicon.svg`

Le numéro de téléphone et le lien WhatsApp sont des placeholders dans `data/site.ts`. Remplacez-les par les vraies coordonnées avant publication commerciale.

## Lancer localement

```bash
npm install
npm run serve
```

Site local : `http://127.0.0.1:4173`

## Qualité

```bash
npm run format
npm run lint
npm test
npm run a11y
npm run build
```

## Déploiement

Le projet est prêt pour Vercel. GitHub Pages est aussi configuré via `.github/workflows/pages.yml` avec `GITHUB_PAGES=true`.
