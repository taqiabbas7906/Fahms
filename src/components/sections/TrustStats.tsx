import { trustStats } from "@/data/testimonials";
import Reveal from "@/components/ui/Reveal";

export default function TrustStats() {
  return (
    <section aria-label="Company highlights" className="bg-background-50 px-4 py-10 sm:py-14 md:px-8 md:py-16">
      <div className="grid grid-cols-2 gap-4 border-t border-b border-background-200 py-8 md:gap-6 md:py-10 lg:grid-cols-4">
        {trustStats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 100}
            className={`px-2 text-center ${i > 0 ? "lg:border-l lg:border-background-200" : ""}`}
          >
            <div className="font-heading text-3xl font-bold tracking-tight text-accent-600 sm:text-4xl md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[11px] leading-snug text-foreground-600 sm:text-xs md:text-sm">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
