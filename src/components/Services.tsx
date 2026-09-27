import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-sand py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            What we do
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Installation and setup for New England businesses.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            Glotelco installs your company&apos;s phone system and leaves it
            running. We focus on installation and configuration; your phone
            service itself is handled by the provider.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-atlantic/15 border-y border-atlantic/15 sm:mt-14">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="grid gap-2 py-6 sm:gap-3 sm:py-8 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-display text-sm text-lagoon md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-atlantic sm:text-2xl md:col-span-4">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-muted md:col-span-7 md:text-lg">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
