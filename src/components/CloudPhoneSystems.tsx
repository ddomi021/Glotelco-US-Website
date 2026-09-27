import { cloudFeatures, company } from "@/lib/content";

export function CloudPhoneSystems() {
  return (
    <section
      id="cloud-phone-systems"
      className="relative overflow-hidden bg-atlantic py-16 text-foam sm:py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-lagoon/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-coral/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon-soft">
              Business communications
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl md:text-5xl">
              Cloud phone systems
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/90 sm:text-lg">
              We set up cloud phone systems that handle your calls, call
              routing, and reporting all in one place, with support from our
              local team in Massachusetts.
            </p>
          </div>

          <aside className="flex flex-col justify-end border-l-2 border-coral/80 pl-5 sm:pl-6 md:col-span-5">
            <p className="font-display text-5xl font-semibold tracking-tight text-coral-soft md:text-6xl">
              {company.customers.toLocaleString("en-US")}+
            </p>
            <p className="mt-2 text-base font-medium text-sand md:text-lg">
              customers trust Glotelco
            </p>
            <p className="mt-3 text-sm leading-relaxed text-sand/70">
              Over {company.years} years installing phone systems across New
              England.
            </p>
          </aside>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {cloudFeatures.map((feature) => (
            <li key={feature.title}>
              <h3 className="font-display text-xl font-semibold text-foam">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-sand/80">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 sm:mt-14">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm bg-coral px-6 py-3.5 text-base font-semibold text-foam transition-colors hover:bg-coral-deep"
          >
            Get a free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
