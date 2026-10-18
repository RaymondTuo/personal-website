import { AllocationChart } from "@/components/charts/allocation-chart";
import { CausalEstimateChart } from "@/components/charts/causal-estimate-chart";
import { ChurnDecileChart } from "@/components/charts/churn-decile-chart";
import { LoadForecastChart } from "@/components/charts/load-forecast-chart";
import { ShadowPriceChart } from "@/components/charts/shadow-price-chart";

const registry = {
  "churn-decile": ChurnDecileChart,
  "causal-estimate": CausalEstimateChart,
  "load-forecast": LoadForecastChart,
  allocation: AllocationChart,
  "shadow-price": ShadowPriceChart,
} as const;

export type ChartName = keyof typeof registry;

export function isChartName(value: string): value is ChartName {
  return value in registry;
}

type ChartProps = {
  name: string;
  /** Rendered as the figure caption; also the chart's accessible description. */
  caption: string;
  label?: string;
  className?: string;
};

export function Chart({ name, caption, label, className }: ChartProps) {
  if (!isChartName(name)) return null;
  const Visual = registry[name];

  return (
    <figure className={className}>
      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
        {label && <p className="eyebrow mb-5">{label}</p>}
        {/* role="img" collapses the SVG internals into one accessible node. */}
        <div role="img" aria-label={caption}>
          <Visual />
        </div>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-fg-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
