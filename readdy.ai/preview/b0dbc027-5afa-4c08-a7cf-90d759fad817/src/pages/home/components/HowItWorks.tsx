import { processSteps } from "@/mocks/process";
import Reveal from "@/components/base/Reveal";

export default function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 px-4 md:px-8 py-12 sm:py-16 md:py-24 bg-background-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">Our process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground-950 leading-[1.05]">
              How we build your <em className="font-serif italic font-normal text-accent-700">project</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground-600 max-w-xl">
              A clear, straightforward process from the first conversation to your
              final walkthrough — no surprises.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 90} className="h-full">
              <div className="relative p-6 md:p-8 rounded-2xl bg-background-50 border border-background-200 h-full">
                <span className="absolute top-5 right-5 font-heading text-4xl md:text-5xl font-bold text-background-300 select-none">
                  {p.step}
                </span>
                <span className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-accent-500 text-primary-950">
                  <i className={`${p.icon} text-xl md:text-2xl`}></i>
                </span>
                <h3 className="mt-5 text-lg md:text-xl font-heading font-semibold text-foreground-950 leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                  {p.description}
                </p>
                {i < processSteps.length - 1 && (
                  <i className="hidden lg:block absolute top-1/2 -right-3 text-foreground-300 text-xl ri-arrow-right-line"></i>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}