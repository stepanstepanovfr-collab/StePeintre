import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stepanstepanovfr-collab.github.io/StePeintre/"),
  title: "StePeintre | Peintre en bâtiment premium en Normandie",
  description:
    "StePeintre réalise vos travaux de peinture murs, plafonds, rénovation et finitions premium en Normandie. Devis gratuit.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg"
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "StePeintre | Peintre en bâtiment premium en Normandie",
    description: "Peinture intérieure, plafonds, rénovation et finitions propres en Normandie.",
    url: "/",
    siteName: "StePeintre",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/realisation-salon.jpg",
        width: 1448,
        height: 1086,
        alt: "Salon rénové par StePeintre avec finition peinture premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "StePeintre | Peintre en bâtiment premium en Normandie",
    description: "Devis gratuit pour peinture murs, plafonds, rénovation et finitions en Normandie.",
    images: ["/assets/realisation-salon.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "StePeintre",
    logo: "https://stepanstepanovfr-collab.github.io/StePeintre/assets/stepeintre-logo.svg",
    image: "https://stepanstepanovfr-collab.github.io/StePeintre/assets/realisation-salon.jpg",
    description:
      "Peintre en bâtiment en Normandie spécialisé en peinture murs, plafonds, rénovation et finitions premium.",
    areaServed: "Normandie",
    url: "https://stepanstepanovfr-collab.github.io/StePeintre/",
    priceRange: "€€",
    serviceType: ["Peinture murs", "Peinture plafonds", "Rénovation peinture", "Finitions premium"]
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
        {children}
      </body>
    </html>
  );
}
