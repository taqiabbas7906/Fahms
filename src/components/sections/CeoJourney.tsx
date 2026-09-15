import Reveal from "@/components/ui/Reveal";

const advantages = [
  {
    icon: "ri-flow-chart",
    title: "Zero-to-Finish Expertise",
    text: "Having worked every position on-site, he understands every phase required to take a structure from bare ground to final handover.",
  },
  {
    icon: "ri-search-eye-line",
    title: "Precision Quality Control",
    text: "Firsthand experience allows him to spot potential issues early, enforce rigorous safety and quality standards, and ensure flawless execution.",
  },
  {
    icon: "ri-team-line",
    title: "Grounded Leadership",
    text: "Understanding the exact challenges faced by site crews fosters exceptional team coordination, clear communication and high accountability.",
  },
];

export default function CeoJourney() {
  return (
    <section id="ceo-journey" className="scroll-mt-24 bg-background-50 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-3xl md:mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                Leadership story
              </span>
            </div>
            <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl">
              Built from the <em className="font-serif text-accent-700 italic font-normal">ground up</em>
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-foreground-600 sm:text-base md:text-lg">
              From working on-site as a laborer to leading a premier construction
              firm, the journey of CEO Irfan Kazmi is rooted in real-world grit,
              continuous growth and complete mastery of the craft.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6 md:space-y-8">
          <Reveal>
            <article className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-background-200 bg-background-100 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full">
                <img
                  src="/images/leadership/irfan-onsite-portrait.jpg"
                  alt="Irfan Kazmi on a residential job site, early in his hands-on construction career"
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-primary-950">
                  <i className="ri-hammer-line text-xl" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-2xl leading-tight font-bold text-foreground-950 md:text-3xl">
                  Building the Foundation
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  The story began on the ground floor as an entry-level site
                  laborer. Driven by a commitment to quality and continuous
                  learning, he systematically advanced year after year —
                  earning Carpentry Certifications across Levels 1, 2, 3 and 4.
                  This deep technical foundation enabled him to take full
                  ownership of residential builds, smoothly transitioning from
                  hands-on craftsmanship into full project management.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-background-200 bg-background-100 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-full">
                <img
                  src="/images/leadership/irfan-commercial-excavator.jpg"
                  alt="Irfan Kazmi operating heavy equipment on a commercial construction site"
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:order-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-primary-950">
                  <i className="ri-building-4-line text-xl" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-2xl leading-tight font-bold text-foreground-950 md:text-3xl">
                  Broadening the Scope
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600 md:text-base">
                  To complement his extensive background in residential
                  construction, he stepped into the commercial sector as a
                  Site Superintendent. Managing complex commercial job sites
                  expanded his field leadership, giving him a dual-perspective
                  mastery of both detailed residential builds and large-scale
                  commercial operations.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <Reveal variant="left" className="h-full">
            <div className="relative h-full min-h-105 overflow-hidden rounded-2xl">
              <img
                src="/images/leadership/irfan-residential-framing.jpg"
                alt="Irfan Kazmi, CEO of FAHMS Construction & Builders, on site"
                width={497}
                height={1024}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/0 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-heading text-xl font-bold text-background-50">Irfan Kazmi</p>
                <p className="text-xs tracking-[0.14em] text-background-200 uppercase">Chief Executive Officer</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="flex h-full flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                  The FAHMS advantage
                </span>
              </div>
              <p className="text-sm text-foreground-600 sm:text-base">
                This end-to-end field experience directly defines the
                leadership and standard of excellence at FAHMS:
              </p>

              <div className="mt-6 space-y-4">
                {advantages.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-start gap-4 rounded-xl border border-background-200 bg-background-100 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                      <i className={`${a.icon} text-lg`} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground-950">{a.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-foreground-600 md:text-sm">{a.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-foreground-600 sm:text-base">
                By bridging the gap between hard-earned field labor and
                executive vision, FAHMS provides clients with built
                environment solutions rooted in authentic expertise and
                uncompromising quality.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
