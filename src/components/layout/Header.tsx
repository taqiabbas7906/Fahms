import { useEffect, useState } from "react";
import Logo from "@/components/layout/Logo";

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = ["top", "services", "about", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(320, window.innerHeight * 0.7);
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  const transparent = !scrolled;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-background-200/70 bg-background-50/90 backdrop-blur-md"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-3 sm:px-4 md:h-20 md:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group/nav relative rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  transparent
                    ? isActive
                      ? "text-accent-600"
                      : "text-foreground-800 hover:text-foreground-950"
                    : isActive
                      ? "text-foreground-950"
                      : "text-foreground-700 hover:text-foreground-950"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0.5 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-accent-500 transition-all duration-300 ${
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover/nav:w-3 group-hover/nav:opacity-70"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+12024007728"
            className={`hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors xl:flex ${
              transparent
                ? "text-foreground-800 hover:text-accent-600"
                : "text-foreground-800 hover:text-primary-700"
            }`}
          >
            <i className="ri-phone-fill text-base" aria-hidden="true" />
            (202) 400-7728
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-md bg-accent-500 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-primary-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-600"
          >
            Get a Free Quote
            <i
              className="ri-arrow-right-up-line text-base transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-foreground-900 transition-colors hover:bg-background-100 lg:hidden"
        >
          <i className={`ri-${open ? "close" : "menu-3"}-line text-2xl`} aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-background-200/70 bg-background-50/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-3 text-base font-medium ${
                active === item.href
                  ? "bg-background-100 text-foreground-950"
                  : "text-foreground-800 hover:bg-background-100"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:+12024007728"
              className="flex items-center justify-center gap-2 rounded-md border border-background-300 px-3 py-3 text-sm font-medium whitespace-nowrap text-foreground-800"
            >
              <i className="ri-phone-fill" aria-hidden="true" /> Call
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-md bg-accent-500 px-3 py-3 text-sm font-semibold whitespace-nowrap text-primary-950"
            >
              Get a Quote <i className="ri-arrow-right-up-line" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
