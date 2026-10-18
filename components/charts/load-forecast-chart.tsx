"use client";

import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { loadForecastData } from "@/content/chart-data";
import {
  axisTick,
  ChartLegend,
  ChartTooltip,
  gridProps,
} from "@/components/charts/chart-primitives";

// A range area (one [low, high] pair per point) rather than two stacked areas:
// stacking would anchor the y-axis at zero and squash the whole series.
const banded = loadForecastData.map((row) => ({
  ...row,
  interval: [row.lower, row.upper] as [number, number],
}));

export function LoadForecastChart() {
  return (
    <div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={banded}
            margin={{ top: 8, right: 8, bottom: 4, left: -16 }}
          >
            <CartesianGrid {...gridProps} />
            <XAxis
              dataKey="month"
              tick={axisTick}
              tickLine={false}
              stroke="var(--line)"
            />
            <YAxis
              tick={axisTick}
              tickLine={false}
              axisLine={false}
              width={52}
              domain={[5, 10]}
              unit="GW"
            />
            <Tooltip
              cursor={{ stroke: "var(--line-strong)" }}
              content={
                <ChartTooltip
                  unit=" GW"
                  labels={{ actual: "Actual", forecast: "Forecast" }}
                />
              }
            />
            <Area
              dataKey="interval"
              stroke="none"
              fill="var(--chart-band)"
              isAnimationActive={false}
              activeDot={false}
              legendType="none"
            />
            <Line
              dataKey="forecast"
              stroke="var(--chart-1)"
              strokeWidth={2}
              strokeDasharray="5 4"
              dot={false}
            />
            <Line
              dataKey="actual"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <ChartLegend
          items={[
            { label: "Actual load", color: "var(--chart-2)" },
            { label: "Prophet forecast", color: "var(--chart-1)", dashed: true },
            { label: "80% interval", color: "var(--chart-band-legend)" },
          ]}
        />
      </div>
    </div>
  );
}
