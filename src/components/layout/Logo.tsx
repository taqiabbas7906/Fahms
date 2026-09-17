interface LogoProps {
  size?: "sm" | "md";
}

export default function Logo({ size = "md" }: LogoProps) {
  const height = size === "md" ? "h-12 md:h-16" : "h-9";

  return (
    <a href="#top" className="group flex min-w-0 shrink-0 items-center">
      <img
        src="/brand/fahms-logo.png"
        alt="FAHMS Construction & Builders"
        width={1086}
        height={362}
        className={`${height} w-auto shrink-0 transition-transform duration-200 group-hover:scale-105`}
      />
    </a>
  );
}
