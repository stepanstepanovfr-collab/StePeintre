"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact, navItems } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/15 bg-ink-deep/82 px-3 py-3 text-white shadow-card backdrop-blur-xl">
        <Link className="flex min-w-0 items-center gap-3" href="#accueil" aria-label="Retour à l'accueil StePeintre">
          <span className="rounded-lg bg-white px-2 py-1 shadow-glow">
            <Image
              src="/assets/stepeintre-logo.svg"
              alt=""
              width={188}
              height={58}
              priority
              className="h-auto w-36 md:w-44"
            />
          </span>
          <span className="hidden text-xs font-bold text-cream/75 lg:block">Peintre en bâtiment en Normandie</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-black text-white/78 transition hover:bg-white/10 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={contact.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-black text-cream transition hover:border-gold hover:text-gold"
          >
            <Phone className="size-4" aria-hidden="true" /> Appeler
          </Link>
          <Link
            href="#devis"
            className="inline-flex min-h-11 items-center rounded-lg bg-gold px-5 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Devis gratuit
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-white/15 bg-white/8 text-white lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-lg border border-ink/10 bg-porcelain p-3 shadow-card lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 font-black text-ink transition hover:bg-gold/15"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="grid gap-2 pt-2 sm:grid-cols-2">
                <Link
                  href={contact.whatsappHref}
                  className="rounded-lg border border-ink/10 px-4 py-3 text-center font-black text-ink"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp
                </Link>
                <Link
                  href="#devis"
                  className="rounded-lg bg-gold px-4 py-3 text-center font-black text-ink"
                  onClick={() => setOpen(false)}
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
