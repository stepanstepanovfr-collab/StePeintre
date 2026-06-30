# StePeintre

Site vitrine statique premium pour une activité de peintre en bâtiment en Normandie.

## Structure

- `index.html` : contenu du site, sections, textes, formulaire et SEO.
- `styles.css` : identité visuelle, responsive, animations et scène de chantier.
- `script.js` : progression au scroll, menu mobile, slider avant/après, compteurs et formulaire.
- `assets/` : images temporaires remplaçables.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` : fichiers SEO et navigateur.
- `.github/workflows/` : publication GitHub Pages, qualité, Lighthouse, CodeQL.

## Modifier les contenus

- Textes principaux : éditer les titres, paragraphes et boutons dans `index.html`.
- Tarifs : section `id="tarifs"` dans `index.html`.
- Coordonnées : section `id="contact"` dans `index.html`.
- Services : cartes dans la section `id="services"`.
- Avis clients : section `id="avis"`. Les avis actuels sont des placeholders.

## Remplacer les photos

Les images temporaires sont :

- `assets/chantier-transformation.png`
- `assets/chantier-transformation.jpg`
- `assets/chantier-transformation-card.jpg`
- `assets/chantier-transformation-mobile.jpg`
- `assets/realisation-salon.png`
- `assets/realisation-salon.jpg`
- `assets/realisation-salon-card.jpg`
- `assets/realisation-salon-mobile.jpg`
- `assets/realisation-facade.png`
- `assets/realisation-facade.jpg`
- `assets/realisation-facade-card.jpg`

Le site utilise les versions `.jpg`, plus légères pour GitHub Pages. Les fichiers `*-card.jpg` servent aux cartes de portfolio pour accélérer le chargement mobile. Pour les remplacer, gardez les mêmes noms de fichiers ou mettez à jour les chemins dans `index.html` et `styles.css`.

## Formulaire

Le formulaire bloque l'envoi réel pour l'instant et affiche un message de démonstration. Pour le connecter, remplacez la logique `submit` dans `script.js` par votre service préféré : email, CRM, Netlify Forms, Formspree ou backend maison.

## Lancer le site

Ouvrez simplement `index.html` dans un navigateur. Aucun build ni serveur n'est nécessaire.

## Qualité automatique

Les outils gratuits branchés sur GitHub Actions :

- Prettier : formatage.
- ESLint : erreurs JavaScript.
- Stylelint : erreurs CSS.
- HTMLHint : validation HTML.
- Playwright : tests desktop/mobile.
- Pa11y CI : accessibilité WCAG.
- Lighthouse CI : performance, SEO, accessibilité, bonnes pratiques.
- Lychee : vérification des liens.
- CodeQL et Dependabot : sécurité.

Commandes utiles :

```bash
npm run quality
npm run a11y
npm test
```
