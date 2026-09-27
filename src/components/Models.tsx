import Image from "next/image";
import { phoneModels } from "@/lib/content";

export function Models() {
  return (
    <section id="equipment" className="bg-foam py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
            Equipment
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Equipment for businesses and operations of any size
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            Desk phones we install as part of your business phone system. Hover
            over or tap a phone to see the model.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {phoneModels.map((phone) => (
            <li key={phone.src} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand/50">
                <Image
                  src={phone.src}
                  alt={phone.name}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-atlantic/90 to-transparent px-3 pb-3 pt-10 text-center opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                  <p className="text-sm font-semibold text-foam">{phone.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
