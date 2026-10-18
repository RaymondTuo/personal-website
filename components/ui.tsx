import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="eyebrow text-accent-fg">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="display display-lg mt-5 max-w-3xl">{title}</h2>
      {lede && <p className="lede mt-5 max-w-2xl">{lede}</p>}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[0.875rem] font-medium tracking-wide transition-all duration-200";

const buttonVariants = {
  solid:
    "bg-accent text-accent-contrast hover:brightness-110",
  outline:
    "border border-line-strong bg-bg/40 text-fg backdrop-blur-sm hover:border-accent hover:text-accent-fg",
} as const;

export function ButtonLink({
  children,
  variant = "solid",
  className = "",
  ...props
}: ButtonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  children,
  variant = "solid",
  className = "",
  ...props
}: ButtonProps & ComponentProps<"a">) {
  return (
    <a
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-surface px-3.5 py-1.5 font-mono text-[0.8125rem] text-fg-muted transition-colors hover:border-accent hover:text-fg">
      {children}
    </li>
  );
}
