export default function MobileStickyCTA() {
  return (
    <div className="fixed right-3 bottom-3 left-3 z-40 lg:hidden">
      <div className="flex items-center gap-2 rounded-2xl border border-background-200 bg-background-50/95 p-2 shadow-md backdrop-blur-md">
        <a
          href="tel:+12024007728"
          aria-label="Call FAHMS Construction"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-background-100 text-foreground-800 transition-colors hover:bg-background-200"
        >
          <i className="ri-phone-fill text-lg" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent-500 text-sm font-semibold whitespace-nowrap text-primary-950 transition-colors hover:bg-accent-600"
        >
          Get a Free Quote
          <i className="ri-arrow-right-up-line" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
