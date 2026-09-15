import { useId, useState } from "react";
import { faqs } from "@/data/faqs";
import Reveal from "@/components/ui/Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-24 bg-background-100 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-10 max-w-3xl md:mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                Common questions
              </span>
            </div>
            <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl">
              Good to <em className="font-serif text-accent-700 italic font-normal">know</em>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-foreground-600 sm:text-base md:text-lg">
              Straight answers to the questions we hear most often from
              homeowners.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const buttonId = `${baseId}-faq-button-${i}`;
            const panelId = `${baseId}-faq-panel-${i}`;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`rounded-2xl border bg-background-50 transition-colors ${
                    isOpen ? "border-accent-500" : "border-background-200"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left whitespace-nowrap sm:px-6"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="text-base leading-snug font-heading font-semibold text-foreground-950 md:text-lg">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen ? "bg-accent-500 text-primary-950" : "bg-background-200 text-foreground-800"
                        }`}
                      >
                        <i className={`${isOpen ? "ri-subtract-line" : "ri-add-line"} text-lg`} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="-mt-1 px-5 pb-5 text-sm leading-relaxed text-foreground-600 sm:px-6 md:text-base">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
