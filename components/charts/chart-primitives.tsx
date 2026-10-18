"use client";

import type { ReactNode } from "react";

/**
 * Recharts renders SVG, so CSS custom properties work directly as paint
 * values. Charts therefore follow the theme toggle with no JS and no re-render.
 */
export const axisTick = {
  fill: "var(--fg-muted)",
  fontSize: 11,
  fontFamily: "var(--font-mono)",
} as const;

export const gridProps = {
  stroke: "var(--chart-grid)",
  strokeDasharray: "2 4",
  vertical: false,
} as const;

type TooltipRow = {
  name?: ReactNode;
  value?: number | string;
  color?: string;
  dataKey?: string | number;
};

export function ChartTooltip({
  active,
  payload,
  label,
  unit = "",
  labels = {},
}: {
  active?: boolean;
  payload?: TooltipRow[];
  label?: ReactNode;
  unit?: string;
  labels?: Record<string, string>;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-2.5 shadow-lg shadow-black/5">
      {label != null && (
        <p className="eyebrow mb-1.5 text-[10px]">{label}</p>
      )}
      <ul className="flex flex-col gap-1">
        {payload
          .filter((row) => row.value != null)
          .map((row, i) => (
            <li
              key={i}
              className="flex items-center gap-2 font-mono text-xs text-fg"
            >
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: row.color }}
              />
              <span className="text-fg-muted">
                {labels[String(row.dataKey)] ?? row.name}
              </span>
              <span className="ml-auto tabular-nums">
                {row.value}
                {unit}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function ChartLegend({
  items,
}: {
  items: { label: string; color: string; dashed?: boolean }[];
}) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-fg-muted uppercase"
        >
          <span
            aria-hidden="true"
            className="h-0.5 w-4 shrink-0 rounded-full"
            style={{
              background: item.dashed
                ? `repeating-linear-gradient(to right, ${item.color} 0 4px, transparent 4px 7px)`
                : item.color,
            }}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
