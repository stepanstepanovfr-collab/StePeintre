# StePeintre

Site vitrine statique premium pour une activité de peintre en bâtiment en Normandie.

## Structure

- `index.html` : contenu du site, sections, textes, formulaire et SEO.
- `styles.css` : identité visuelle, responsive, animations et scène de chantier.
- `script.js` : progression au scroll, menu mobile, slider avant/après, compteurs et formulaire.
- `assets/` : images temporaires remplaçables.

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
- `assets/realisation-salon.png`
- `assets/realisation-salon.jpg`
- `assets/realisation-facade.png`
- `assets/realisation-facade.jpg`

Le site utilise les versions `.jpg`, plus légères pour GitHub Pages. Pour les remplacer, gardez les mêmes noms de fichiers ou mettez à jour les chemins dans `index.html` et `styles.css`.

## Formulaire

Le formulaire bloque l'envoi réel pour l'instant et affiche un message de démonstration. Pour le connecter, remplacez la logique `submit` dans `script.js` par votre service préféré : email, CRM, Netlify Forms, Formspree ou backend maison.

## Lancer le site

Ouvrez simplement `index.html` dans un navigateur. Aucun build ni serveur n'est nécessaire.
