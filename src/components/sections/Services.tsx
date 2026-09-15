import { services } from "@/data/services";
import Reveal from "@/components/ui/Reveal";

const layout: { id: string; className: string }[] = [
  { id: "general-contractor", className: "sm:col-span-2 lg:col-span-3 lg:row-span-2" },
  { id: "kitchen", className: "sm:col-span-2 lg:col-span-3 lg:row-span-2" },
  { id: "build-houses", className: "lg:col-span-2" },
  { id: "extend-houses", className: "lg:col-span-2" },
  { id: "fencing", className: "lg:col-span-2" },
  { id: "deck", className: "lg:col-span-2" },
  { id: "bathroom", className: "lg:col-span-2" },
  { id: "basement", className: "lg:col-span-2" },
];

export default function Services() {
  const serviceById = (id: string) => services.find((s) => s.id === id)!;

  return (
    <section id="services" className="scroll-mt-24 bg-background-50 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <Reveal>
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                What we do
              </span>
            </div>
            <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl">
              Full-service construction,
              <br className="hidden sm:block" />
              one <em className="font-serif text-accent-700 italic font-normal">reliable</em> team.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground-600 sm:text-base md:text-lg">
              From new builds and additions to kitchens, baths and decks — we
              handle the whole job with quality craftsmanship and clear
              communication, all across Maryland.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold whitespace-nowrap text-primary-950 transition-all hover:-translate-y-0.5 hover:bg-accent-600 md:self-end"
          >
            Get a Free Quote
            <i
              className="ri-arrow-right-up-line transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Reveal>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:auto-rows-[220px] lg:grid-flow-dense lg:grid-cols-6">
        {layout.map((item, i) => {
          const s = serviceById(item.id);
          const isBig = item.className.includes("row-span-2");
          return (
            <li key={s.id} className="contents">
              <Reveal
                delay={i * 60}
                className={`relative ${item.className} ${isBig ? "h-72 sm:h-80 lg:h-auto" : "h-64 sm:h-56 lg:h-auto"}`}
              >
                <a
                  href="#contact"
                  className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-2xl"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    width={720}
                    height={560}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-colors duration-500 group-hover:from-black/90 group-hover:via-black/45"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background-50/95 text-primary-950 md:h-11 md:w-11"
                  >
                    <i className={`${s.icon} text-lg md:text-xl`} />
                  </span>

                  <div className="relative p-5 md:p-6">
                    <h3
                      className={`font-heading leading-tight font-semibold text-background-50 ${
                        isBig ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-1.5 leading-relaxed text-background-100/90 ${
                        isBig ? "max-w-md text-sm md:text-base" : "text-xs md:text-sm"
                      }`}
                    >
                      {s.short}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute right-5 bottom-5 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-accent-500 text-primary-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:right-6 md:bottom-6"
                  >
                    <i className="ri-arrow-right-up-line text-base" />
                  </span>
                </a>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
