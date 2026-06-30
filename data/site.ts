import { Brush, CheckCircle2, Home, Layers, MapPin, PaintBucket, ShieldCheck, Sparkles } from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Avant / Après", href: "#avant-apres" },
  { label: "Processus", href: "#processus" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "Devis", href: "#devis" }
];

export const contact = {
  phoneDisplay: "À compléter",
  phoneHref: "tel:+33000000000",
  whatsappHref:
    "https://wa.me/33000000000?text=Bonjour%20StePeintre%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20des%20travaux%20de%20peinture.",
  email: "contact@stepeintre.fr"
};

export const stats = [
  { value: 100, suffix: "%", label: "devis clair" },
  { value: 5, suffix: "", label: "étapes maîtrisées" },
  { value: 0, suffix: "", label: "chantier laissé sale" },
  { value: 24, suffix: "h", label: "pour cadrer la demande" }
];

export const services = [
  {
    title: "Peinture murs",
    description: "Application propre et homogène pour pièces de vie, chambres, bureaux et logements complets.",
    icon: PaintBucket
  },
  {
    title: "Plafonds",
    description: "Reprises, sous-couches et finitions nettes sur les surfaces sensibles et lumineuses.",
    icon: Layers
  },
  {
    title: "Rénovation",
    description: "Remise au propre après travaux, dégâts, ancien revêtement ou changement complet d’ambiance.",
    icon: Home
  },
  {
    title: "Finitions",
    description: "Angles, raccords, boiseries, détails et contrôle final pour un rendu vraiment premium.",
    icon: Brush
  }
];

export const process = [
  { step: "01", title: "Devis", text: "On clarifie surfaces, supports, délais et niveau de finition attendu." },
  { step: "02", title: "Préparation", text: "Rebouchage, ponçage, sous-couche et choix des produits adaptés." },
  { step: "03", title: "Protection", text: "Sols, meubles, fenêtres, plinthes et zones sensibles protégés." },
  { step: "04", title: "Peinture", text: "Application régulière, temps de séchage respecté et contrôle entre passes." },
  {
    step: "05",
    title: "Finition",
    text: "Nettoyage, retouches, vérification finale et livraison d’un chantier propre."
  }
];

export const gallery = [
  {
    title: "Salon lumineux",
    tag: "Finition mate",
    src: "/assets/realisation-salon-card.jpg",
    alt: "Salon rénové avec peinture nette et finition mate"
  },
  {
    title: "Préparation chantier",
    tag: "Supports repris",
    src: "/assets/chantier-transformation-card.jpg",
    alt: "Mur intérieur en préparation avant peinture"
  },
  {
    title: "Façade protégée",
    tag: "Extérieur",
    src: "/assets/realisation-facade-card.jpg",
    alt: "Façade rénovée avec peinture extérieure et protections"
  }
];

export const reasons = [
  {
    title: "Protection complète",
    text: "Le chantier reste maîtrisé et votre intérieur est respecté.",
    icon: ShieldCheck
  },
  { title: "Finition durable", text: "La préparation compte autant que la peinture finale.", icon: Sparkles },
  { title: "Devis lisible", text: "Vous savez ce qui est prévu avant le début du chantier.", icon: CheckCircle2 },
  { title: "Normandie", text: "Intervention en Normandie et alentours selon le projet.", icon: MapPin }
];

export const reviews = [
  {
    quote: "Travail propre, protections posées avec soin et résultat très net.",
    name: "Client particulier",
    city: "Caen"
  },
  {
    quote: "Le chantier a été rendu impeccable. Les raccords et les angles sont vraiment propres.",
    name: "Client rénovation",
    city: "Bayeux"
  },
  {
    quote: "Devis clair, bonne communication et rendu final sérieux.",
    name: "Client maison",
    city: "Deauville"
  }
];

export const zones = ["Caen", "Bayeux", "Deauville", "Lisieux", "Ouistreham", "Normandie"];
