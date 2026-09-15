import { Link } from "react-router-dom";

interface LogoProps {
  light?: boolean;
  size?: "sm" | "md";
}

export default function Logo({ light = false, size = "md" }: LogoProps) {
  const box = size === "md" ? "w-11 h-11 md:w-12 md:h-12" : "w-9 h-9";
  const name = size === "md" ? "text-xl md:text-2xl" : "text-lg";
  const sub = size === "md" ? "text-[9px] md:text-[10px]" : "text-[9px]";

  return (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer min-w-0 shrink-0">
      <span
        className={`${box} flex items-center justify-center rounded-lg bg-accent-500 text-primary-950 shadow-sm transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105 shrink-0`}
      >
        <i className="ri-home-3-fill text-xl md:text-2xl"></i>
      </span>
      <span className="flex flex-col leading-none min-w-0">
        <span
          className={`${name} font-heading font-bold uppercase tracking-tight leading-none whitespace-nowrap ${
            light ? "text-background-50" : "text-foreground-950"
          }`}
        >
          Fahms<span className="text-accent-500">*</span>
        </span>
        <span
          className={`${sub} uppercase tracking-[0.22em] mt-1 whitespace-nowrap ${
            light ? "text-background-200/80" : "text-foreground-500"
          }`}
        >
          Build &amp; Renovate
        </span>
      </span>
    </Link>
  );
}