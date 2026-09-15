import { leaders } from "@/mocks/leadership";
import { journeyMilestones } from "@/mocks/journey";
import Reveal from "@/components/base/Reveal";

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

export default function Leadership() {
  return (
    <section id="about" className="scroll-mt-24 px-4 md:px-8 py-12 sm:py-16 md:py-24 bg-background-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">About us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground-950 leading-[1.05]">
              About <em className="font-serif italic font-normal text-accent-700">FAHMS</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground-600 max-w-2xl">
              A family-run Maryland builder — who we are, the people who lead it,
              and where you'll find us.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-20">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl bg-background-50 border border-background-200 p-6 md:p-8 flex flex-col">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground-950">
                Who we are
              </h3>
              <p className="mt-4 text-sm md:text-base text-foreground-600 leading-relaxed">
                FAHMS Construction & Builders is a family-run general contractor
                based in Laurel, Maryland. For more than twenty years, we've
                helped homeowners across the state build, renovate and expand
                their homes with craftsmanship they can trust.
              </p>
              <p className="mt-4 text-sm md:text-base text-foreground-600 leading-relaxed">
                From kitchens, baths and decks to whole-home additions and
                ground-up custom builds, every project is led by the same two
                people who started the company — so you always know who's
                accountable, from the first estimate to the final walkthrough.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
                {aboutHighlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background-100 border border-background-200"
                  >
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                      <i className={`${h.icon} text-lg`}></i>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground-950">
                        {h.title}
                      </p>
                      <p className="mt-0.5 text-xs text-foreground-600 leading-relaxed">
                        {h.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div className="h-full flex flex-col rounded-2xl bg-background-50 border border-background-200 overflow-hidden">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
                <iframe
                  src="https://www.google.com/maps?q=21+Fahms+Ave,+Laurel,+MD+20707&output=embed"
                  title="FAHMS Construction & Builders — 21 Fahms Ave, Laurel, MD 20707"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-5 md:p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                    <i className="ri-map-pin-line text-base"></i>
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-foreground-500 font-semibold">
                      Visit our HQ
                    </p>
                    <p className="mt-0.5 text-sm md:text-base text-foreground-950 font-medium">
                      21 Fahms Ave, Laurel, MD 20707
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                    <i className="ri-time-line text-base"></i>
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-foreground-500 font-semibold">
                      Working hours
                    </p>
                    <p className="mt-0.5 text-sm md:text-base text-foreground-950 font-medium">
                      Mon–Fri · 8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=21+Fahms+Ave,+Laurel,+MD+20707"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 text-background-50 dark:text-foreground-950 px-5 py-2.5 text-sm font-semibold whitespace-nowrap hover:bg-primary-600 transition-colors cursor-pointer"
                >
                  <i className="ri-navigation-line"></i>
                  Get directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="max-w-3xl mb-8 md:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">Our leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground-950">
              Meet the <em className="font-serif italic font-normal text-accent-700">founders</em>
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-14 md:mb-20">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 120} className="h-full">
              <article className="group relative rounded-2xl bg-background-50 border border-background-200 hover:border-accent-500 transition-colors h-full overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] h-full">
                  <div className="relative overflow-hidden bg-background-200 aspect-[4/5] sm:aspect-auto sm:min-h-full">
                    <img
                      src={l.image}
                      alt={`${l.name}, ${l.role} — FAHMS Construction & Builders`}
                      title={`${l.name} — ${l.role} — FAHMS Construction & Builders`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-center sm:object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
                    ></div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1 justify-center">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-accent-700 font-semibold">
                      {l.role}
                    </span>
                    <h4 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-foreground-950 leading-tight">
                      {l.name}
                    </h4>
                    <span className="mt-1.5 text-sm text-foreground-500 italic">
                      {l.tagline}
                    </span>
                    <p className="mt-4 text-sm text-foreground-600 leading-relaxed">
                      {l.bio}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-background-200 pt-5">
                      {l.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs md:text-sm text-foreground-700">
                          <i className="ri-check-line text-accent-600 mt-0.5"></i>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div>
            <div className="max-w-3xl mb-8 md:mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-accent-500" aria-hidden="true"></span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">Our journey</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground-950">
                Two decades of building <em className="font-serif italic font-normal text-accent-700">Maryland</em>
              </h3>
            </div>

            <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
              <span
                aria-hidden="true"
                className="hidden md:block absolute top-6 left-0 right-0 h-px bg-background-300"
              ></span>
              {journeyMilestones.map((m, i) => (
                <li key={m.year} className="relative">
                  <Reveal delay={i * 80} className="h-full">
                    <div className="relative p-5 md:p-6 rounded-2xl bg-background-50 border border-background-200 h-full">
                      <span className="relative z-10 flex w-11 h-11 items-center justify-center rounded-full bg-accent-500 text-primary-950 font-heading font-bold text-sm">
                        {m.year}
                      </span>
                      <h4 className="mt-4 text-base md:text-lg font-heading font-semibold text-foreground-950 leading-tight">
                        {m.title}
                      </h4>
                      <p className="mt-2 text-xs md:text-sm text-foreground-600 leading-relaxed">
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