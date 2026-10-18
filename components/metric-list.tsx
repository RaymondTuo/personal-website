import { Counter } from "@/components/counter";
import type { Metric } from "@/lib/case-studies";

export function MetricList({
  metrics,
  className = "",
  size = "md",
}: {
  metrics: Metric[];
  className?: string;
  size?: "md" | "lg";
}) {
  const valueClass =
    size === "lg"
      ? "display text-4xl md:text-5xl"
      : "display text-3xl md:text-4xl";

  return (
    <dl className={`grid gap-x-8 gap-y-7 sm:grid-cols-3 ${className}`}>
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className={`${valueClass} text-accent`}>
            <Counter
              to={metric.value}
              decimals={metric.decimals}
              prefix={metric.prefix}
              suffix={metric.suffix}
            />
          </dt>
          <dd className="mt-2.5 font-mono text-[0.6875rem] leading-snug tracking-wide text-fg-muted uppercase">
            {metric.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
