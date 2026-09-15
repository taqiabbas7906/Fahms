interface LogoProps {
  light?: boolean;
  size?: "sm" | "md";
}

export default function Logo({ light = false, size = "md" }: LogoProps) {
  const box = size === "md" ? "w-11 h-11 md:w-12 md:h-12" : "w-9 h-9";
  const name = size === "md" ? "text-xl md:text-2xl" : "text-lg";
  const sub = size === "md" ? "text-[9px] md:text-[10px]" : "text-[9px]";

  return (
    <a href="#top" className="group flex min-w-0 shrink-0 items-center gap-3">
      <span
        aria-hidden="true"
        className={`${box} flex shrink-0 items-center justify-center rounded-lg bg-accent-500 text-primary-950 shadow-sm transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105`}
      >
        <i className="ri-home-3-fill text-xl md:text-2xl" />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`${name} font-heading font-bold uppercase leading-none tracking-tight whitespace-nowrap ${
            light ? "text-background-50" : "text-foreground-950"
          }`}
        >
          FAHMS<span className="text-accent-500">*</span>
        </span>
        <span
          className={`${sub} mt-1 uppercase tracking-[0.22em] whitespace-nowrap ${
            light ? "text-background-200/80" : "text-foreground-500"
          }`}
        >
          Build &amp; Renovate
        </span>
      </span>
      <span className="sr-only">FAHMS Construction &amp; Builders — home</span>
    </a>
  );
}
