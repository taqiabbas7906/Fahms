import { useState, type FormEvent } from "react";
import Reveal from "@/components/base/Reveal";

const projectTypes = [
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

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string>("");

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
      const serverMsg =
        parsed?.meta?.message || parsed?.meta?.detail || responseText || "";

      if (response.ok && parsed?.code === "OK") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setFormError(
          serverMsg
            ? `Sorry — ${serverMsg}. Please try again or email us.`
            : "Sorry — something went wrong sending your request. Please try again."
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
    <section id="contact" className="scroll-mt-24 px-4 md:px-8 py-12 sm:py-16 md:py-24 bg-background-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-500" aria-hidden="true"></span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-foreground-600">Get in touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground-950 leading-[1.05]">
              Let's talk about your <em className="font-serif italic font-normal text-accent-700">project</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground-600 max-w-2xl">
              Get a free, no-obligation estimate. Tell us a little about your
              build or renovation and we'll get back to you right away.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <Reveal variant="left">
              <div className="p-5 sm:p-6 md:p-7 rounded-2xl bg-background-50 border border-background-200">
                <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-600">
                  Direct contact
                </p>
                <div className="mt-5 space-y-4">
                  <a
                    href="tel:+12024007728"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-background-100 border border-background-200 hover:border-accent-500 transition-colors cursor-pointer"
                  >
                    <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700 group-hover:bg-accent-500 group-hover:text-primary-950 transition-colors">
                      <i className="ri-phone-fill text-lg"></i>
                    </span>
                    <div>
                      <p className="text-xs text-foreground-600">Call</p>
                      <p className="text-base font-semibold text-foreground-950">(202) 400-7728</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-foreground-500"></i>
                  </a>
                  <a
                    href="mailto:fahmsconstruction@yahoo.com"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-background-100 border border-background-200 hover:border-accent-500 transition-colors cursor-pointer"
                  >
                    <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700 group-hover:bg-accent-500 group-hover:text-primary-950 transition-colors">
                      <i className="ri-mail-line text-lg"></i>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-foreground-600">Email</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground-950 truncate">
                        fahmsconstruction@yahoo.com
                      </p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-foreground-500"></i>
                  </a>
                  <a
                    href="https://www.google.com/maps?q=21+Fahms+Ave,+Laurel,+MD+20707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-background-100 border border-background-200 hover:border-accent-500 transition-colors cursor-pointer"
                  >
                    <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700 group-hover:bg-accent-500 group-hover:text-primary-950 transition-colors">
                      <i className="ri-map-pin-2-fill text-lg"></i>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-foreground-600">Headquarters</p>
                      <p className="text-sm font-semibold text-foreground-950">
                        21 Fahms Ave, Laurel, MD 20707
                      </p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-foreground-500"></i>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="left" delay={120}>
              <div className="p-5 sm:p-6 rounded-2xl bg-background-50 border border-background-200">
                <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-600 mb-3">
                  Working hours
                </p>
                <ul className="text-sm space-y-2 text-foreground-800">
                  <li className="flex justify-between"><span>Mon–Fri</span><span>08:00 – 18:00</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>09:00 – 15:00</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="text-foreground-500">Closed</span></li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-accent-100 text-foreground-800 text-xs leading-relaxed">
                  Licensed &amp; insured Maryland contractor · MHIC #168360
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            {status === "success" ? (
              <Reveal variant="scale">
                <div className="rounded-2xl bg-background-50 border border-background-200 p-6 sm:p-8 md:p-12 text-center h-full flex flex-col items-center justify-center min-h-[420px]">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-accent-500 text-primary-950">
                    <i className="ri-check-line text-2xl"></i>
                  </div>
                  <h3 className="mt-5 text-xl sm:text-2xl md:text-4xl font-heading font-bold uppercase text-foreground-950 tracking-tight">
                    Thanks — request received.
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-foreground-600">
                    We'll get back to you as soon as we can, usually within one
                    working day.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal variant="right">
                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-background-50 border border-background-200 p-5 sm:p-6 md:p-10 space-y-6"
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
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold uppercase text-foreground-950 tracking-tight leading-tight">
                      Get a free quote
                    </h3>
                    <p className="mt-2 text-sm text-foreground-600">
                      A few short details help us prepare an accurate estimate for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">Name</span>
                      <input
                        type="text"
                        name="name"
                        required
                        maxLength={80}
                        className="px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">Phone</span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={30}
                        placeholder="(202) 555-0123"
                        className="px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        maxLength={120}
                        placeholder="you@example.com"
                        className="px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">City / Area</span>
                      <input
                        type="text"
                        name="location"
                        required
                        maxLength={60}
                        placeholder="Laurel, MD"
                        className="px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      />
                    </label>
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">Project type</span>
                      <select
                        name="project_type"
                        required
                        defaultValue="General renovation"
                        className="px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      >
                        {projectTypes.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </label>
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">Project details</span>
                      <textarea
                        name="message"
                        required
                        maxLength={500}
                        rows={5}
                        placeholder="Tell us about your project, timeline and budget so we can prepare an accurate estimate."
                        className="px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                      ></textarea>
                      <span className="text-[11px] text-foreground-500 text-right">
                        Up to 500 characters
                      </span>
                    </label>
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-foreground-600">Upload photo (optional)</span>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-background-100 border border-dashed border-background-300">
                        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-50 text-accent-700">
                          <i className="ri-image-add-line text-lg"></i>
                        </span>
                        <input
                          type="file"
                          name="photo"
                          accept="image/*"
                          className="flex-1 text-sm text-foreground-800 file:mr-4 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-accent-500 file:text-primary-950 cursor-pointer"
                        />
                      </div>
                    </label>
                  </div>

                  {status === "error" && formError && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800">
                      <i className="ri-error-warning-line text-lg mt-0.5"></i>
                      <p>{formError}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <p className="text-xs text-foreground-500">
                      Your details won't be used for marketing.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-accent-500 text-primary-950 text-sm font-semibold hover:bg-accent-600 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i> Sending…
                        </>
                      ) : (
                        <>
                          Request Free Quote
                          <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
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