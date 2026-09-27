import Image from "next/image";
import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-atlantic/10 bg-foam text-ink-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-5 md:flex-row md:items-start md:justify-between md:px-8 md:py-14">
        <div>
          <div className="relative h-11 w-[160px] sm:h-12 sm:w-[175px]">
            <Image
              src="/logo.png"
              alt="Glotelco"
              fill
              className="object-contain object-left"
              sizes="175px"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Business phone system installation based in Massachusetts, serving
            all of New England for over {company.years} years.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-atlantic"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-sm">
          <a
            href={`tel:${company.phoneTel}`}
            className="block font-semibold text-atlantic hover:text-coral"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="mt-2 block break-all text-atlantic/90 hover:text-coral"
          >
            {company.email}
          </a>
        </div>
      </div>

      <div className="border-t border-atlantic/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-ink-muted/80 sm:px-5 md:px-8">
          © {new Date().getFullYear()} Glotelco. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
