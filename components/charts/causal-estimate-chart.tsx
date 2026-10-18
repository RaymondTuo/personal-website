"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { causalEstimateData } from "@/content/chart-data";
import {
  axisTick,
  ChartLegend,
  ChartTooltip,
  gridProps,
} from "@/components/charts/chart-primitives";

export function CausalEstimateChart() {
  return (
    <div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={causalEstimateData}
            layout="vertical"
            margin={{ top: 4, right: 16, bottom: 4, left: 8 }}
            barCategoryGap="28%"
          >
            <CartesianGrid {...gridProps} vertical horizontal={false} />
            <XAxis
              type="number"
              tick={axisTick}
              tickLine={false}
              stroke="var(--line)"
              domain={[0, "dataMax"]}
            />
            <YAxis
              type="category"
              dataKey="method"
              tick={{ ...axisTick, fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={128}
            />
            <Tooltip
              cursor={{ fill: "var(--accent-wash)" }}
              content={
                <ChartTooltip labels={{ effect: "Estimated effect" }} />
              }
            />
            <Bar dataKey="effect" radius={[0, 3, 3, 0]}>
              {causalEstimateData.map((row) => (
                <Cell
                  key={row.method}
                  fill={
                    row.kind === "causal" ? "var(--chart-1)" : "var(--chart-4)"
                  }
                  fillOpacity={row.kind === "causal" ? 1 : 0.45}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <ChartLegend
          items={[
            { label: "Associational", color: "var(--chart-4)" },
            { label: "Causal", color: "var(--chart-1)" },
          ]}
        />
      </div>
    </div>
  );
}
