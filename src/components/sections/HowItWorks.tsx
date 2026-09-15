import { processSteps } from "@/data/process";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 bg-background-100 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-3xl md:mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                Our process
              </span>
            </div>
            <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl">
              How we build your <em className="font-serif text-accent-700 italic font-normal">project</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground-600 sm:text-base md:text-lg">
              A clear, straightforward process from the first conversation to your
              final walkthrough — no surprises.
            </p>
          </div>
        </Reveal>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <li key={p.step}>
              <Reveal delay={i * 90} className="h-full">
                <div className="relative h-full rounded-2xl border border-background-200 bg-background-50 p-6 md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-5 right-5 font-heading text-4xl font-bold text-background-300 select-none md:text-5xl"
                  >
                    {p.step}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-primary-950 md:h-14 md:w-14">
                    <i className={`${p.icon} text-xl md:text-2xl`} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg leading-tight font-semibold text-foreground-950 md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{p.description}</p>
                  {i < processSteps.length - 1 && (
                    <i
                      aria-hidden="true"
                      className="ri-arrow-right-line absolute top-1/2 -right-3 hidden text-xl text-foreground-300 lg:block"
                    />
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
