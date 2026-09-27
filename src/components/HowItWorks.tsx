export function HowItWorks() {
  const steps = [
    {
      title: "We listen",
      body: "Tell us how your office handles calls today, whether it's one front desk or several locations. We plan the installation around the way you work.",
    },
    {
      title: "We install",
      body: "We set up your system, desk phones, auto attendant, and voicemail so everything is ready when your team walks in.",
    },
    {
      title: "We stick around",
      body: "Need to change call routing, add an extension, or swap out a phone? Our local team in Massachusetts is just a phone call away.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-atlantic py-16 text-foam sm:py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-lagoon/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-coral/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon-soft">
            How we work
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl md:text-5xl">
            From the first conversation to a system that works.
          </h2>
        </div>

        <ol className="mt-12 grid gap-10 sm:mt-14 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="font-display text-5xl font-semibold text-coral-soft/85">
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-sand/85">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
