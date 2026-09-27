import { company } from "@/lib/content";

export function Heritage() {
  return (
    <section className="bg-foam py-16 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
            Who we are
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Connecting New England businesses for over {company.years} years.
          </h2>
          <p className="mt-6 font-display text-3xl font-semibold text-coral">
            {company.customers.toLocaleString("en-US")}+ customers
          </p>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl">
            When you call Glotelco, you reach a local team that knows your
            system, not an offshore call center reading from a script. We work
            with schools, medical practices, insurance agencies, manufacturers,
            and family businesses throughout Massachusetts and the rest of New
            England.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg md:text-xl">
            Over {company.customers.toLocaleString("en-US")} customers rely on
            the systems we&apos;ve installed. Our approach is simple: modern
            cloud phone systems, reliable desk phones, and real people you can
            reach when you need help.
          </p>
        </div>
      </div>
    </section>
  );
}
