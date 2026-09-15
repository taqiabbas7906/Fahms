import Logo from "@/components/feature/Logo";

export default function Footer() {
  return (
    <footer className="px-3 md:px-4 pb-3 md:pb-4 pt-6 md:pt-10 bg-background-50 relative z-10">
      <div className="rounded-2xl bg-background-100 border border-background-200 overflow-hidden">
        <div className="px-5 sm:px-6 md:px-12 pt-10 sm:pt-12 md:pt-16 pb-8 md:pb-12 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8">
          <div className="md:col-span-4">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm text-foreground-600 leading-relaxed max-w-xs">
              Your trusted Maryland general contractor for custom builds,
              additions and renovations — based in Laurel and built with
              craftsmanship and care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="relative w-2.5 h-2.5 rounded-full text-emerald-500 pulse-dot bg-emerald-500"></span>
              <span className="text-sm text-foreground-800">Currently booking new projects</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-foreground-500 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a className="hover:text-accent-600 transition-colors cursor-pointer" href="#top">Home</a></li>
              <li><a className="hover:text-accent-600 transition-colors cursor-pointer" href="#services">Services</a></li>
              <li><a className="hover:text-accent-600 transition-colors cursor-pointer" href="#about">About</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-foreground-500 mb-4">Get in touch</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+12024007728" className="flex items-center gap-2 hover:text-accent-600 transition-colors cursor-pointer">
                  <i className="ri-phone-fill"></i> (202) 400-7728
                </a>
              </li>
              <li>
                <a href="mailto:fahmsconstruction@yahoo.com" className="flex items-center gap-2 hover:text-accent-600 transition-colors cursor-pointer">
                  <i className="ri-mail-line"></i> fahmsconstruction@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=21+Fahms+Ave,+Laurel,+MD+20707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-accent-600 transition-colors cursor-pointer"
                >
                  <i className="ri-map-pin-line mt-0.5"></i> 21 Fahms Ave, Laurel, MD 20707
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground-600">
                <i className="ri-shield-check-line"></i> MHIC #168360 · Licensed &amp; Insured
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-foreground-500 mb-4">Start your project</h4>
            <p className="text-sm text-foreground-600 mb-4">
              Get a free, no-obligation estimate for your build or renovation.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-4 py-3 rounded-md bg-accent-500 text-primary-950 text-sm font-semibold hover:bg-accent-600 transition-all cursor-pointer whitespace-nowrap"
            >
              Get a Free Quote
              <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
            <div className="mt-6 flex items-center gap-3 text-xs text-foreground-500">
              <span className="inline-flex items-center gap-1"><i className="ri-shield-check-line"></i> Licensed</span>
              <span className="inline-flex items-center gap-1"><i className="ri-check-double-line"></i> Insured</span>
            </div>
          </div>
        </div>

        <div className="relative border-t border-background-200">
          <div className="hidden md:block absolute inset-x-0 -bottom-2 select-none pointer-events-none overflow-hidden">
            <div className="text-[16vw] leading-none font-heading font-bold text-foreground-950/[0.04] whitespace-nowrap tracking-tight">
              FAHMS CONSTRUCTION
            </div>
          </div>
          <div className="relative px-5 sm:px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} FAHMS Construction &amp; Builders · Laurel, Maryland</p>
            <div className="flex items-center gap-5">
              <a href="#" rel="nofollow" className="hover:text-accent-600 cursor-pointer">Privacy</a>
              <a href="#" rel="nofollow" className="hover:text-accent-600 cursor-pointer">Terms</a>
              <a href="#" rel="nofollow" className="hover:text-accent-600 cursor-pointer">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}