import Image from "next/image";
import { company } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90svh] overflow-hidden bg-atlantic-deep text-foam"
    >
      <Image
        src="/zakim-bridge.jpg"
        alt=""
        fill
        priority
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(6,38,47,0.92)_0%,rgba(6,38,47,0.78)_45%,rgba(11,58,77,0.42)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(240,128,24,0.14),transparent_45%)]"
      />

      <div className="relative z-20 mx-auto grid min-h-[90svh] max-w-7xl items-center gap-10 px-4 pb-20 pt-36 sm:px-5 md:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-36">
        <div className="lg:col-span-6">
          <p
            className="mb-4 animate-rise font-sans text-xs font-semibold uppercase tracking-[0.2em] text-lagoon-soft sm:mb-5 sm:text-sm sm:tracking-[0.22em]"
            style={{ animationDelay: "0.05s" }}
          >
            Proudly serving New England
          </p>

          <h1
            className="animate-rise max-w-xl font-display text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            Business phone systems that just work.
          </h1>

          <p
            className="mt-5 max-w-lg animate-rise text-base leading-relaxed text-sand/90 sm:mt-6 sm:text-lg md:text-xl"
            style={{ animationDelay: "0.32s" }}
          >
            Glotelco has been setting up phone systems for Massachusetts
            businesses for over {company.years} years. More than{" "}
            {company.customers.toLocaleString("en-US")} customers across New
            England count on us for installation and local support.
          </p>

          <div
            className="mt-8 flex animate-rise flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.44s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-coral px-6 py-3.5 text-base font-semibold text-foam transition-colors hover:bg-coral-deep"
            >
              Get a free consultation
            </a>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center justify-center rounded-sm border border-foam/35 px-6 py-3.5 text-base font-semibold text-foam transition-colors hover:border-foam hover:bg-foam/5"
            >
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>

        <aside
          className="flex animate-rise flex-col justify-center lg:col-span-6"
          style={{ animationDelay: "0.28s" }}
          aria-label="A few of the phone models we install"
        >
          <div className="grid grid-cols-2 items-center gap-2 sm:gap-6">
            <figure className="relative h-[280px] sm:h-[380px] lg:h-[460px]">
              <Image
                src="/phones/phone-2.png"
                alt="Polycom VVX 500 desk phone"
                fill
                priority
                className="object-contain drop-shadow-[0_22px_24px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </figure>

            <figure className="relative h-[240px] sm:h-[320px] lg:h-[390px]">
              <Image
                src="/phones/phone-6.png"
                alt="Panasonic KX-HDV230 desk phone"
                fill
                className="object-contain drop-shadow-[0_22px_24px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </figure>
          </div>

          <div className="mx-auto mt-2 max-w-md text-center sm:mt-4">
            <p className="text-sm font-semibold leading-snug text-coral-soft sm:text-base">
              Phones for teams of every size
            </p>
          </div>
        </aside>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-20 h-10 wave-divider sm:h-12 md:h-16"
      />
    </section>
  );
}
