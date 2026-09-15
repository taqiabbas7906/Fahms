import Logo from "@/components/layout/Logo";

const FOOTER_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-background-50 px-3 pt-6 pb-3 md:px-4 md:pt-10 md:pb-4">
      <div className="overflow-hidden rounded-2xl border border-background-200 bg-background-100">
        <div className="grid grid-cols-1 gap-8 px-5 pt-10 pb-8 sm:gap-10 sm:px-6 sm:pt-12 md:grid-cols-12 md:gap-8 md:px-12 md:pt-16 md:pb-12">
          <div className="md:col-span-4">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-foreground-600">
              Your trusted Maryland general contractor for custom builds,
              additions and renovations — built with craftsmanship and care,
              statewide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="pulse-dot relative h-2.5 w-2.5 rounded-full bg-emerald-500 text-emerald-500"
              />
              <span className="text-sm text-foreground-800">Currently booking new projects</span>
            </div>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="mb-4 text-xs tracking-[0.18em] text-foreground-500 uppercase">Explore</h2>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a className="transition-colors hover:text-accent-600" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="mb-4 text-xs tracking-[0.18em] text-foreground-500 uppercase">Get in touch</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:+12024007728"
                  className="flex items-center gap-2 transition-colors hover:text-accent-600"
                >
                  <i className="ri-phone-fill" aria-hidden="true" /> (202) 400-7728
                </a>
              </li>
              <li>
                <a
                  href="mailto:fahmsconstruction@yahoo.com"
                  className="flex items-center gap-2 transition-colors hover:text-accent-600"
                >
                  <i className="ri-mail-line" aria-hidden="true" /> fahmsconstruction@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground-600">
                <i className="ri-map-2-line mt-0.5" aria-hidden="true" /> Serving all of Maryland
              </li>
              <li className="flex items-center gap-2 text-foreground-600">
                <i className="ri-shield-check-line" aria-hidden="true" /> MHIC #168360 · Licensed &amp; Insured
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 text-xs tracking-[0.18em] text-foreground-500 uppercase">Start your project</h2>
            <p className="mb-4 text-sm text-foreground-600">
              Get a free, no-obligation estimate for your build or renovation.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-accent-500 px-4 py-3 text-sm font-semibold whitespace-nowrap text-primary-950 transition-all hover:bg-accent-600"
            >
              Get a Free Quote
              <i
                className="ri-arrow-right-up-line transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <div className="mt-6 flex items-center gap-3 text-xs text-foreground-500">
              <span className="inline-flex items-center gap-1">
                <i className="ri-shield-check-line" aria-hidden="true" /> Licensed
              </span>
              <span className="inline-flex items-center gap-1">
                <i className="ri-check-double-line" aria-hidden="true" /> Insured
              </span>
            </div>
          </div>
        </div>

        <div className="relative border-t border-background-200">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-2 hidden overflow-hidden select-none md:block"
          >
            <div className="text-[16vw] leading-none font-heading font-bold tracking-tight whitespace-nowrap text-foreground-950/[0.04]">
              FAHMS CONSTRUCTION
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-foreground-500 sm:flex-row sm:px-6 sm:text-left md:px-12">
            <p>© {year} FAHMS Construction &amp; Builders · Maryland</p>
            <div className="flex items-center gap-5">
              <a href="#" rel="nofollow" className="hover:text-accent-600">
                Privacy
              </a>
              <a href="#" rel="nofollow" className="hover:text-accent-600">
                Terms
              </a>
              <a href="#" rel="nofollow" className="hover:text-accent-600">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
