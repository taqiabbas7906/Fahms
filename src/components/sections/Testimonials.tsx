import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-background-100 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-3xl md:mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                Client reviews
              </span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl"
            >
              What our <em className="font-serif text-accent-700 italic font-normal">clients</em> say
            </h2>
            <div className="mt-4 flex items-center gap-2 text-sm text-foreground-600">
              <span className="flex text-accent-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-lg" />
                ))}
              </span>
              <span className="font-semibold text-foreground-950">5.0</span>
              <span>· Maryland homeowners</span>
            </div>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-background-200 bg-background-50 p-6 md:p-7">
                  <div className="flex text-accent-500" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <i key={j} className="ri-star-fill" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground-800">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-background-200 pt-4">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 font-heading font-bold text-accent-700"
                      >
                        {t.name.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground-950">{t.name}</p>
                        <p className="text-xs text-foreground-500">
                          {t.location} · {t.project}
                        </p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
