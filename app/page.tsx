import { LandingPage } from "@/components/landing-page";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#accueil">
        Aller au contenu principal
      </a>
      <SiteHeader />
      <LandingPage />
    </>
  );
}
