import { services } from "@/mocks/services";
import Reveal from "@/components/base/Reveal";

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
    <section id="services" className="scroll-mt-24 px-4 md:px-8 py-12 sm:py-16 md:py-24 bg-background-50">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">What we do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground-950 leading-[1.05]">
              Full-service construction,<br className="hidden sm:block" />
              one <em className="font-serif italic font-normal text-accent-700">reliable</em> team.
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground-600 max-w-xl">
              From new builds and additions to kitchens, baths and decks — we
              handle the whole job with quality craftsmanship and clear
              communication, all across Maryland.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex self-start md:self-end items-center gap-2 px-5 py-3 rounded-full bg-accent-500 text-primary-950 text-sm font-semibold hover:bg-accent-600 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Get a Free Quote
            <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5 grid-flow-dense lg:auto-rows-[220px]">
        {layout.map((item, i) => {
          const s = serviceById(item.id);
          const isBig = item.className.includes("row-span-2");
          return (
            <Reveal
              key={s.id}
              delay={i * 60}
              className={`relative ${item.className} ${
                isBig ? "h-72 sm:h-80 lg:h-auto" : "h-64 sm:h-56 lg:h-auto"
              }`}
            >
              <a
                href="#contact"
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer h-full w-full"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  title={`${s.title} — FAHMS Construction & Builders`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-colors duration-500 group-hover:from-black/90 group-hover:via-black/45"></div>

                <span className="absolute top-4 left-4 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl bg-background-50/95 text-primary-950">
                  <i className={`${s.icon} text-lg md:text-xl`}></i>
                </span>

                <div className="relative p-5 md:p-6">
                  <h3
                    className={`font-heading font-semibold text-background-50 leading-tight ${
                      isBig ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-background-100/90 leading-relaxed ${
                      isBig ? "text-sm md:text-base max-w-md" : "text-xs md:text-sm"
                    }`}
                  >
                    {s.short}
                  </p>
                </div>

                <span className="absolute bottom-5 md:bottom-6 right-5 md:right-6 w-9 h-9 flex items-center justify-center rounded-full bg-accent-500 text-primary-950 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <i className="ri-arrow-right-up-line text-base"></i>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}