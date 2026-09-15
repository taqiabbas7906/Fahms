import { leaders } from "@/data/leadership";
import { journeyMilestones } from "@/data/journey";
import { serviceAreas } from "@/data/serviceAreas";
import Reveal from "@/components/ui/Reveal";

const aboutHighlights = [
  {
    icon: "ri-calendar-2-line",
    title: "20+ years",
    text: "Serving Maryland homeowners since 2004",
  },
  {
    icon: "ri-shield-check-line",
    title: "Licensed & insured",
    text: "MHIC #168360, fully bonded",
  },
  {
    icon: "ri-team-line",
    title: "Family-owned",
    text: "Owner-operated on every job",
  },
  {
    icon: "ri-pencil-ruler-line",
    title: "Design-build",
    text: "Planning to finish under one roof",
  },
];

export default function About() {
  const [ceo, ...otherLeaders] = leaders;

  return (
    <section id="about" className="scroll-mt-24 bg-background-100 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-3xl md:mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                About us
              </span>
            </div>
            <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl">
              About <em className="font-serif text-accent-700 italic font-normal">FAHMS</em>
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-foreground-600 sm:text-base md:text-lg">
              A family-run Maryland builder — who we are, the people who lead it,
              and where we work.
            </p>
          </div>
        </Reveal>

        <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-background-200 bg-background-50 p-6 md:p-8">
              <h3 className="text-xl font-heading font-bold text-foreground-950 md:text-2xl">Who we are</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                FAHMS Construction &amp; Builders is a family-run general contractor
                serving homeowners across Maryland. For more than twenty years,
                we&apos;ve helped families throughout the state build, renovate
                and expand their homes with craftsmanship they can trust.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                From kitchens, baths and decks to whole-home additions and
                ground-up custom builds, every project is led by the same two
                people who started the company — so you always know who&apos;s
                accountable, from the first estimate to the final walkthrough.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8">
                {aboutHighlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-3 rounded-xl border border-background-200 bg-background-100 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                      <i className={`${h.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground-950">{h.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-foreground-600">{h.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-background-200 bg-background-50 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                  <i className="ri-map-2-line text-base" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-foreground-500 uppercase">
                    Where we work
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground-950 md:text-base">
                    Serving homeowners across the state of Maryland
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-background-200 bg-background-100 px-3 py-1.5 text-xs font-medium text-foreground-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-3 border-t border-background-200 pt-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                  <i className="ri-time-line text-base" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-foreground-500 uppercase">
                    Working hours
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground-950 md:text-base">
                    Mon–Fri · 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-background-50 transition-colors hover:bg-primary-600"
              >
                <i className="ri-arrow-right-up-line" aria-hidden="true" />
                Request a quote
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mb-8 max-w-3xl md:mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                Our leadership
              </span>
            </div>
            <h3 className="text-2xl font-heading font-bold tracking-tight text-foreground-950 sm:text-3xl md:text-4xl">
              Meet our <em className="font-serif text-accent-700 italic font-normal">leadership</em>
            </h3>
          </div>
        </Reveal>

        <div className="mb-14 md:mb-20">
          <Reveal>
            <article className="group relative overflow-hidden rounded-2xl border border-background-200 bg-background-50 transition-colors hover:border-accent-500">
              <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden bg-background-200 sm:aspect-auto sm:min-h-full">
                  <img
                    src={ceo.image}
                    alt={`${ceo.name}, ${ceo.role} — FAHMS Construction & Builders`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full scale-125 object-cover object-[50%_22%] transition-transform duration-700 group-hover:scale-[1.35]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 md:p-8">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-accent-700 uppercase">
                    {ceo.role}
                  </span>
                  <h4 className="mt-2 font-heading text-2xl leading-tight font-bold text-foreground-950 md:text-3xl">
                    {ceo.name}
                  </h4>
                  <span className="mt-1.5 text-sm text-foreground-500 italic">{ceo.tagline}</span>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-600">{ceo.bio}</p>
                  <ul className="mt-5 space-y-2 border-t border-background-200 pt-5">
                    {ceo.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-foreground-700 md:text-sm">
                        <i className="ri-check-line mt-0.5 text-accent-600" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {otherLeaders.map((l, i) => (
            <Reveal key={l.name} delay={(i + 1) * 100} className="mt-4">
              <div className="flex flex-col gap-4 rounded-xl border border-background-200 bg-background-100 p-4 sm:flex-row sm:items-center sm:p-5">
                <img
                  src={l.image}
                  alt={`${l.name}, ${l.role} — FAHMS Construction & Builders`}
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-20 shrink-0 rounded-lg object-cover object-[50%_18%] sm:h-28 sm:w-24"
                />
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-accent-700 uppercase">
                    {l.role}
                  </span>
                  <p className="mt-1 font-heading text-lg font-bold text-foreground-950">{l.name}</p>
                  <p className="mt-1 text-sm text-foreground-600">{l.bio}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                    {l.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-xs text-foreground-700">
                        <i className="ri-check-line text-accent-600" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div>
            <div className="mb-8 max-w-3xl md:mb-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                  Our journey
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold tracking-tight text-foreground-950 sm:text-3xl md:text-4xl">
                Two decades of building <em className="font-serif text-accent-700 italic font-normal">Maryland</em>
              </h3>
            </div>

            <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5">
              <span
                aria-hidden="true"
                className="absolute top-6 right-0 left-0 hidden h-px bg-background-300 md:block"
              />
              {journeyMilestones.map((m, i) => (
                <li key={m.year} className="relative">
                  <Reveal delay={i * 80} className="h-full">
                    <div className="relative h-full rounded-2xl border border-background-200 bg-background-50 p-5 md:p-6">
                      <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 font-heading text-sm font-bold text-primary-950">
                        {m.year}
                      </span>
                      <h4 className="mt-4 text-base leading-tight font-heading font-semibold text-foreground-950 md:text-lg">
                        {m.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-foreground-600 md:text-sm">
                        {m.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
