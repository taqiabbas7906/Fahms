import { useId, useState, type FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";

const PROJECT_TYPES = [
  "Custom home build",
  "Home addition / extension",
  "Kitchen remodel",
  "Bathroom remodel",
  "Basement finishing",
  "Deck or fence",
  "General renovation",
  "Something else",
];

const FORM_URL = "https://readdy.ai/api/form/dahlkkjoh653ivfvo1c0";

type Status = "idle" | "success" | "error";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const formId = useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const trap = String(fd.get("website_alt") || "").trim();
    if (trap) {
      setStatus("success");
      form.reset();
      return;
    }
    fd.delete("website_alt");

    const photo = fd.get("photo");
    if (photo instanceof File && photo.size === 0) fd.delete("photo");

    const payload = new URLSearchParams();
    fd.forEach((value, key) => {
      if (value instanceof File) {
        if (value.size > 0) payload.append(key, `Uncollectable: ${value.name}`);
      } else {
        payload.append(key, String(value));
      }
    });

    try {
      setSubmitting(true);
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } = {};
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = {};
      }
      const serverMsg = parsed?.meta?.message || parsed?.meta?.detail || responseText || "";

      if (response.ok && parsed?.code === "OK") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setFormError(
          serverMsg
            ? `Sorry — ${serverMsg}. Please try again or email us.`
            : "Sorry — something went wrong sending your request. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setFormError("Sorry — network issue. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

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
              Get a free, no-obligation estimate. Tell us a little about your
              build or renovation and we&apos;ll get back to you right away.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-12">
          <div className="order-2 space-y-4 lg:order-1 lg:col-span-5">
            <Reveal variant="left">
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
                    href="mailto:fahmsconstruction@yahoo.com"
                    className="group flex items-center gap-4 rounded-xl border border-background-200 bg-background-100 p-4 transition-colors hover:border-accent-500"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-accent-700 transition-colors group-hover:bg-accent-500 group-hover:text-primary-950">
                      <i className="ri-mail-line text-lg" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-foreground-600">Email</p>
                      <p className="truncate text-sm font-semibold text-foreground-950 sm:text-base">
                        fahmsconstruction@yahoo.com
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

            <Reveal variant="left" delay={120}>
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

          <div className="order-1 lg:order-2 lg:col-span-7">
            {status === "success" ? (
              <Reveal variant="scale">
                <div
                  role="status"
                  className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-background-200 bg-background-50 p-6 text-center sm:p-8 md:p-12"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-primary-950">
                    <i className="ri-check-line text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-foreground-950 uppercase sm:text-2xl md:text-4xl">
                    Thanks — request received.
                  </h3>
                  <p className="mt-3 text-sm text-foreground-600 md:text-base">
                    We&apos;ll get back to you as soon as we can, usually within one
                    working day.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal variant="right">
                <form
                  onSubmit={handleSubmit}
                  noValidate={false}
                  className="space-y-6 rounded-2xl border border-background-200 bg-background-50 p-5 sm:p-6 md:p-10"
                >
                  <input
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="hp-field"
                  />

                  <div>
                    <h3 className="font-heading text-xl leading-tight font-bold tracking-tight text-foreground-950 uppercase sm:text-2xl md:text-4xl">
                      Get a free quote
                    </h3>
                    <p className="mt-2 text-sm text-foreground-600">
                      A few short details help us prepare an accurate estimate for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <label htmlFor={`${formId}-name`} className="flex flex-col gap-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">Name</span>
                      <input
                        id={`${formId}-name`}
                        type="text"
                        name="name"
                        required
                        maxLength={80}
                        autoComplete="name"
                        className="rounded-xl border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-950 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      />
                    </label>
                    <label htmlFor={`${formId}-phone`} className="flex flex-col gap-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">Phone</span>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        name="phone"
                        required
                        maxLength={30}
                        autoComplete="tel"
                        placeholder="(202) 555-0123"
                        className="rounded-xl border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-950 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      />
                    </label>
                    <label htmlFor={`${formId}-email`} className="flex flex-col gap-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">Email</span>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        name="email"
                        required
                        maxLength={120}
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="rounded-xl border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-950 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      />
                    </label>
                    <label htmlFor={`${formId}-location`} className="flex flex-col gap-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">City / Area</span>
                      <input
                        id={`${formId}-location`}
                        type="text"
                        name="location"
                        required
                        maxLength={60}
                        placeholder="e.g. Columbia, MD"
                        className="rounded-xl border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-950 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      />
                    </label>
                    <label htmlFor={`${formId}-project-type`} className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">Project type</span>
                      <select
                        id={`${formId}-project-type`}
                        name="project_type"
                        required
                        defaultValue="General renovation"
                        className="rounded-xl border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-950 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      >
                        {PROJECT_TYPES.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label htmlFor={`${formId}-message`} className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">Project details</span>
                      <textarea
                        id={`${formId}-message`}
                        name="message"
                        required
                        maxLength={500}
                        rows={5}
                        placeholder="Tell us about your project, timeline and budget so we can prepare an accurate estimate."
                        className="resize-none rounded-xl border border-background-200 bg-background-50 px-4 py-3 text-sm text-foreground-950 transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      />
                      <span className="text-right text-[11px] text-foreground-500">Up to 500 characters</span>
                    </label>
                    <label htmlFor={`${formId}-photo`} className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-xs tracking-[0.14em] text-foreground-600 uppercase">
                        Upload photo (optional)
                      </span>
                      <div className="flex items-center gap-3 rounded-xl border border-dashed border-background-300 bg-background-100 p-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-50 text-accent-700">
                          <i className="ri-image-add-line text-lg" aria-hidden="true" />
                        </span>
                        <input
                          id={`${formId}-photo`}
                          type="file"
                          name="photo"
                          accept="image/*"
                          className="flex-1 text-sm text-foreground-800 file:mr-4 file:rounded-md file:border-0 file:bg-accent-500 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-primary-950"
                        />
                      </div>
                    </label>
                  </div>

                  {status === "error" && formError && (
                    <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      <i className="ri-error-warning-line mt-0.5 text-lg" aria-hidden="true" />
                      <p>{formError}</p>
                    </div>
                  )}

                  <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                    <p className="text-xs text-foreground-500">Your details won&apos;t be used for marketing.</p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3.5 text-sm font-semibold whitespace-nowrap text-primary-950 transition-all hover:-translate-y-0.5 hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:py-4"
                    >
                      {submitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin" aria-hidden="true" /> Sending…
                        </>
                      ) : (
                        <>
                          Request Free Quote
                          <i
                            className="ri-arrow-right-up-line transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
