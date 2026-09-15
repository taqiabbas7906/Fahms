import { testimonials } from "@/mocks/testimonials";
import Reveal from "@/components/base/Reveal";

export default function Testimonial() {
  return (
    <section className="px-4 md:px-8 py-12 sm:py-16 md:py-24 bg-background-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">Client reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground-950 leading-[1.05]">
              What our <em className="font-serif italic font-normal text-accent-700">clients</em> say
            </h2>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground-600">
              <span className="flex text-accent-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-lg"></i>
                ))}
              </span>
              <span className="font-semibold text-foreground-950">5.0</span>
              <span>· Maryland homeowners</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="p-6 md:p-7 rounded-2xl bg-background-50 border border-background-200 flex flex-col h-full">
                <div className="flex text-accent-500">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="ri-star-fill"></i>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-foreground-800 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-background-200">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-100 text-accent-700 font-heading font-bold">
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground-950">{t.name}</p>
                      <p className="text-xs text-foreground-500">{t.location} · {t.project}</p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}