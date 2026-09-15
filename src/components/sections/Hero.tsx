import Reveal from "@/components/ui/Reveal";

const HERO_IMAGE =
  "https://readdy.ai/api/search-image?query=Clear%20bright%20daylight%20view%20of%20a%20modern%20custom%20home%20exterior%20with%20a%20crisp%20blue%20sky%20and%20soft%20white%20clouds%2C%20stone%20and%20timber%20facade%2C%20green%20lawn%20and%20landscaping%2C%20sunny%20afternoon%20light%2C%20vibrant%20natural%20colors%2C%20professional%20architectural%20photography%20with%20clean%20sharp%20detail&width=1600&height=900&seq=hero-build-01&orientation=landscape&nocache=true";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] w-full items-end overflow-hidden md:min-h-[100vh]">
      <img
        src={HERO_IMAGE}
        alt="Modern custom home built by FAHMS Construction in bright daylight"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="hero-zoom absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/25"
      />

      <div className="relative z-10 w-full px-4 py-24 sm:px-6 md:px-10 md:py-28 lg:px-14">
        <div className="max-w-4xl">
          <Reveal delay={0}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-800 uppercase sm:text-xs">
                Serving Maryland · Est. 2004
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-heading text-[44px] leading-[0.94] font-bold tracking-tight text-foreground-950 sm:text-6xl md:text-7xl lg:text-8xl">
              Building spaces
              <span className="block font-serif text-accent-700 italic font-normal">that last.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-800 sm:mt-5 sm:text-base md:text-lg">
              FAHMS Construction &amp; Builders is your trusted general contractor
              for custom homes, additions, decks and full renovations across
              the state of Maryland — built on craftsmanship,
              honesty and attention to detail.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-sm font-semibold whitespace-nowrap text-primary-950 transition-all hover:-translate-y-0.5 hover:bg-accent-600 md:text-base"
              >
                Get a Free Quote
                <i
                  className="ri-arrow-right-up-line transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground-900/15 bg-background-50/80 px-6 py-4 text-sm font-semibold whitespace-nowrap text-foreground-900 transition-all hover:bg-background-50 md:text-base"
              >
                Explore Our Services
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-foreground-700 sm:mt-10">
              <a href="tel:+12024007728" className="flex items-center gap-2 transition-colors hover:text-accent-600">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground-900/10 bg-background-50/80">
                  <i className="ri-phone-fill" aria-hidden="true" />
                </span>
                <span className="text-sm">
                  <span className="block text-[10px] tracking-[0.16em] text-foreground-500 uppercase">
                    Call us today
                  </span>
                  <span className="font-semibold text-foreground-900">(202) 400-7728</span>
                </span>
              </a>
              <div className="hidden h-10 w-px bg-foreground-900/10 sm:block" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground-900/10 bg-background-50/80">
                  <i className="ri-map-pin-fill text-accent-600" aria-hidden="true" />
                </span>
                <span className="text-sm">
                  <span className="block text-[10px] tracking-[0.16em] text-foreground-500 uppercase">
                    Service area
                  </span>
                  <span className="font-semibold text-foreground-900">Serving all of Maryland</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-foreground-900/10" aria-hidden="true" />
    </section>
  );
}
