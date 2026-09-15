import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="px-4 md:px-8 py-24 md:py-40 bg-background-50 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl text-center">
        <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600 mb-5">
          404 — page not found
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground-950 leading-tight">
          We haven't built this <em className="font-serif italic font-normal text-accent-700">yet</em>.
        </h1>
        <p className="mt-4 text-foreground-600">
          Let's get you back somewhere useful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-accent-500 text-primary-950 text-sm font-semibold hover:bg-accent-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Back home
            <i className="ri-arrow-right-line"></i>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-background-300 text-foreground-800 text-sm font-semibold hover:bg-background-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get a Free Quote
            <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}