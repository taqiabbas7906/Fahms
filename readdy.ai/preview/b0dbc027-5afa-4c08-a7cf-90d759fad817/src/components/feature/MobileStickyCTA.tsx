export default function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-background-50/95 backdrop-blur-md border border-background-200 shadow-md">
        <a
          href="tel:+12024007728"
          aria-label="Call FAHMS Construction"
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-background-100 text-foreground-800 hover:bg-background-200 transition-colors cursor-pointer"
        >
          <i className="ri-phone-fill text-lg"></i>
        </a>
        <a
          href="#contact"
          className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-accent-500 text-primary-950 text-sm font-semibold hover:bg-accent-600 transition-colors cursor-pointer whitespace-nowrap"
        >
          Get a Free Quote
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>
    </div>
  );
}