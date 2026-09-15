import { useState } from "react";
import { faqs } from "@/mocks/faqs";
import Reveal from "@/components/base/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 px-4 md:px-8 py-12 sm:py-16 md:py-24 bg-background-100">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">Common questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground-950 leading-[1.05]">
              Good to <em className="font-serif italic font-normal text-accent-700">know</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground-600 max-w-xl">
              Straight answers to the questions we hear most often from
              homeowners.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`rounded-2xl border bg-background-50 transition-colors ${
                    isOpen ? "border-accent-500" : "border-background-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer whitespace-nowrap"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-heading font-semibold text-foreground-950 leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-colors ${
                        isOpen ? "bg-accent-500 text-primary-950" : "bg-background-200 text-foreground-800"
                      }`}
                    >
                      <i className={`${isOpen ? "ri-subtract-line" : "ri-add-line"} text-lg`}></i>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 text-sm md:text-base text-foreground-600 leading-relaxed -mt-1">
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