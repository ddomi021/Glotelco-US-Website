import Image from "next/image";
import { clients } from "@/lib/content";

export function Clients() {
  return (
    <section id="clients" className="overflow-hidden bg-foam py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
            Our clients
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Trusted by businesses across New England and beyond.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            A few of the schools, medical practices, insurance agencies, and
            manufacturers we&apos;re proud to work with.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => {
            const inner = (
              <>
                {client.logo ? (
                  <div className="relative mb-3 h-14 w-full sm:h-16">
                    <Image
                      src={client.logo}
                      alt=""
                      fill
                      className="object-contain object-center"
                      sizes="160px"
                    />
                  </div>
                ) : null}
                <span className="text-center text-sm font-medium text-atlantic sm:text-base">
                  {client.name}
                </span>
              </>
            );

            return (
              <li key={client.name}>
                {client.href ? (
                  <a
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full min-h-[7.5rem] flex-col items-center justify-center border border-atlantic/10 bg-sand/40 px-3 py-4 transition-colors hover:border-lagoon/40 hover:bg-sand/70 sm:min-h-[8.5rem] sm:px-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex h-full min-h-[7.5rem] flex-col items-center justify-center border border-atlantic/10 bg-sand/40 px-3 py-4 sm:min-h-[8.5rem] sm:px-4">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
