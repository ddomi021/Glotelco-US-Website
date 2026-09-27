"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { company, navLinks } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-foam/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_6px_24px_rgba(6,38,47,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8">
        <a
          href="#home"
          className="relative block h-9 w-[130px] shrink-0 sm:h-10 sm:w-[145px] md:h-11 md:w-[160px]"
        >
          <Image
            src="/logo.png"
            alt="Glotelco"
            fill
            priority
            className="object-contain object-left"
            sizes="160px"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-ink-muted transition-colors hover:text-atlantic"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${company.phoneTel}`}
            className="rounded-sm bg-coral px-3 py-2 text-sm font-semibold text-foam transition-colors hover:bg-coral-deep xl:px-4"
          >
            {company.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-0.5 w-5 bg-atlantic transition-transform ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-atlantic transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-atlantic transition-transform ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className="overflow-hidden bg-coral py-2 text-foam"
        aria-label="Special offer: free phone system, free installation, and 3 months of free service"
      >
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex w-screen min-w-max shrink-0 items-center justify-center px-8"
            >
              <p className="shrink-0 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.13em] sm:text-sm">
                <span className="text-foam/80">Special offer</span>
                <span aria-hidden className="mx-5 text-foam/60">—</span>
                Free phone system
                <span aria-hidden className="mx-5 text-foam/60">—</span>
                Free installation
                <span aria-hidden className="mx-5 text-foam/60">—</span>
                3 months of free service
              </p>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="border-t border-atlantic/10 bg-foam px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${company.phoneTel}`}
              className="mt-2 inline-flex w-fit rounded-sm bg-atlantic px-4 py-2.5 text-sm font-semibold text-foam"
              onClick={() => setOpen(false)}
            >
              Call {company.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
