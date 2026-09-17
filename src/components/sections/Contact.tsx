import Reveal from "@/components/ui/Reveal";

const CTA_IMAGE = "/images/contact-cta.webp";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background-100 px-4 py-12 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-3xl md:mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground-600 uppercase sm:text-xs">
                Get in touch
              </span>
            </div>
            <h2 className="font-heading text-3xl leading-[1.05] font-bold tracking-tight text-foreground-950 sm:text-4xl md:text-5xl">
              Let&apos;s talk about your <em className="font-serif text-accent-700 italic font-normal">project</em>
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-foreground-600 sm:text-base md:text-lg">
              Get a free, no-obligation estimate. Call or email us with a few
              details about your build or renovation and we&apos;ll get back
              to you right away.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal variant="left" className="h-full">
              <div className="relative flex h-full min-h-105 flex-col justify-end overflow-hidden rounded-2xl">
                <img
                  src={CTA_IMAGE}
                  alt="Reviewing building plans and project details on a phone at a construction planning desk"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-primary-950/90 via-primary-950/60 to-primary-950/10"
                />

                <div className="relative p-6 sm:p-8 md:p-10">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-accent-500 uppercase sm:text-xs">
                    Ready when you are
                  </span>
                  <h3 className="mt-3 font-heading text-2xl leading-tight font-bold text-background-50 sm:text-3xl md:text-4xl">
                    Get a free, no-obligation estimate
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-background-200/90">
                    Reach out by phone or email — a real person on our team
                    will get back to you, usually within one working day.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+12024007728"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-sm font-semibold whitespace-nowrap text-primary-950 transition-all hover:-translate-y-0.5 hover:bg-accent-600"
                    >
                      <i className="ri-phone-fill" aria-hidden="true" />
                      Call (202) 400-7728
                    </a>
                    <a
                      href="mailto:contact@fahmsconstruction.com"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-background-50/30 bg-background-50/10 px-6 py-4 text-sm font-semibold whitespace-nowrap text-background-50 backdrop-blur-sm transition-all hover:bg-background-50/20"
                    >
                      <i className="ri-mail-line" aria-hidden="true" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-5">
            <Reveal variant="right">
              <div className="rounded-2xl border border-background-200 bg-background-50 p-5 sm:p-6 md:p-7">
                <p className="text-[11px] tracking-[0.18em] text-foreground-600 uppercase">Direct contact</p>
                <div className="mt-5 space-y-4">
                  <a
                    href="tel:+12024007728"
                    className="group flex items-center gap-4 rounded-xl border border-background-200 bg-background-100 p-4 transition-colors hover:border-accent-500"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-accent-700 transition-colors group-hover:bg-accent-500 group-hover:text-primary-950">
                      <i className="ri-phone-fill text-lg" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-foreground-600">Call</p>
                      <p className="text-base font-semibold text-foreground-950">(202) 400-7728</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-foreground-500" aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:contact@fahmsconstruction.com"
                    className="group flex items-center gap-4 rounded-xl border border-background-200 bg-background-100 p-4 transition-colors hover:border-accent-500"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-accent-700 transition-colors group-hover:bg-accent-500 group-hover:text-primary-950">
                      <i className="ri-mail-line text-lg" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-foreground-600">Email</p>
                      <p className="truncate text-sm font-semibold text-foreground-950 sm:text-base">
                        contact@fahmsconstruction.com
                      </p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-foreground-500" aria-hidden="true" />
                  </a>
                  <div className="flex items-center gap-4 rounded-xl border border-background-200 bg-background-100 p-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                      <i className="ri-map-2-line text-lg" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-foreground-600">Service area</p>
                      <p className="text-sm font-semibold text-foreground-950">Serving all of Maryland</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="rounded-2xl border border-background-200 bg-background-50 p-5 sm:p-6">
                <p className="mb-3 text-[11px] tracking-[0.18em] text-foreground-600 uppercase">Working hours</p>
                <ul className="space-y-2 text-sm text-foreground-800">
                  <li className="flex justify-between">
                    <span>Mon–Fri</span>
                    <span>08:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>09:00 – 15:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-foreground-500">Closed</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-accent-100 p-3 text-xs leading-relaxed text-foreground-800">
                  Licensed &amp; insured Maryland contractor · MHIC #168360
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
