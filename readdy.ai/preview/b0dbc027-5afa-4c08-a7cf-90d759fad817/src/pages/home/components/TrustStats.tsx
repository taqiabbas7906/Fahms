import { trustStats } from "@/mocks/testimonials";
import Reveal from "@/components/base/Reveal";

export default function TrustStats() {
  return (
    <section className="px-4 md:px-8 py-10 sm:py-14 md:py-16 bg-background-50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-b border-background-200 py-8 md:py-10">
        {trustStats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 100}
            className={`text-center px-2 ${i > 0 ? "lg:border-l lg:border-background-200" : ""}`}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-accent-600 tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 text-[11px] sm:text-xs md:text-sm text-foreground-600 leading-snug">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}