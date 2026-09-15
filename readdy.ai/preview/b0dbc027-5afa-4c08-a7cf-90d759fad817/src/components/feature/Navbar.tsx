import { useEffect, useState } from "react";
import Logo from "@/components/feature/Logo";

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
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
    const ids = ["top", "services", "about", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-background-50/90 backdrop-blur-md border-b border-background-200/70"
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap group/nav ${
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
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 h-[3px] rounded-full bg-accent-500 transition-all duration-300 ${
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover/nav:w-3 group-hover/nav:opacity-70"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+12024007728"
            className={`hidden xl:flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              transparent
                ? "text-foreground-800 hover:text-accent-600"
                : "text-foreground-800 hover:text-primary-700"
            }`}
          >
            <i className="ri-phone-fill text-base"></i>
            (202) 400-7728
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-md bg-accent-500 text-primary-950 text-sm font-semibold hover:bg-accent-600 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Get a Free Quote
            <i className="ri-arrow-right-up-line text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-md flex items-center justify-center cursor-pointer transition-colors shrink-0 text-foreground-900 hover:bg-background-100"
        >
          <i className={`ri-${open ? "close" : "menu-3"}-line text-2xl`}></i>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-background-200/70 bg-background-50/95 backdrop-blur-md ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-3 rounded-md text-base font-medium cursor-pointer ${
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
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-md border border-background-300 text-foreground-800 text-sm font-medium cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i> Call
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-3 py-3 rounded-md bg-accent-500 text-primary-950 text-sm font-semibold cursor-pointer whitespace-nowrap"
            >
              Get a Quote <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}