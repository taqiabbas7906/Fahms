import Reveal from "@/components/base/Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[92vh] md:min-h-[100vh] flex items-end overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Clear%20bright%20daylight%20view%20of%20a%20modern%20custom%20home%20exterior%20with%20a%20crisp%20blue%20sky%20and%20soft%20white%20clouds%2C%20stone%20and%20timber%20facade%2C%20green%20lawn%20and%20landscaping%2C%20sunny%20afternoon%20light%2C%20vibrant%20natural%20colors%2C%20professional%20architectural%20photography%20with%20clean%20sharp%20detail&width=1600&height=900&seq=hero-build-01&orientation=landscape&nocache=true"
        alt="Modern custom home built by FAHMS Construction in bright daylight"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/25"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 py-24 md:py-28">
        <div className="max-w-4xl">
          <Reveal delay={0}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-800">
                Laurel, Maryland · Est. 2004
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-heading font-bold text-foreground-950 text-[44px] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-tight">
              Building spaces
              <span className="block font-serif italic font-normal text-accent-700">that last.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-foreground-800 leading-relaxed">
              FAHMS Construction &amp; Builders is your trusted general contractor
              for custom homes, additions, decks and full renovations across
              Laurel and the state of Maryland — built on craftsmanship,
              honesty and attention to detail.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-accent-500 text-primary-950 text-sm md:text-base font-semibold hover:bg-accent-600 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Get a Free Quote
                <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-background-50/80 border border-foreground-900/15 text-foreground-900 text-sm md:text-base font-semibold hover:bg-background-50 transition-all cursor-pointer whitespace-nowrap"
              >
                Explore Our Services
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-foreground-700">
              <a href="tel:+12024007728" className="flex items-center gap-2 cursor-pointer hover:text-accent-600 transition-colors">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/80 border border-foreground-900/10">
                  <i className="ri-phone-fill"></i>
                </span>
                <span className="text-sm">
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-foreground-500">Call us today</span>
                  <span className="font-semibold text-foreground-900">(202) 400-7728</span>
                </span>
              </a>
              <div className="h-10 w-px bg-foreground-900/10 hidden sm:block"></div>
              <a
                href="https://www.google.com/maps?q=21+Fahms+Ave,+Laurel,+MD+20707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer hover:text-accent-600 transition-colors"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50/80 border border-foreground-900/10">
                  <i className="ri-map-pin-fill text-accent-600"></i>
                </span>
                <span className="text-sm">
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-foreground-500">Visit our HQ</span>
                  <span className="font-semibold text-foreground-900">21 Fahms Ave, Laurel, MD 20707</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground-900/10"></div>
    </section>
  );
}