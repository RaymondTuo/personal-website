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
import { shadowPriceData } from "@/content/chart-data";
import {
  axisTick,
  ChartLegend,
  ChartTooltip,
  gridProps,
} from "@/components/charts/chart-primitives";

export function ShadowPriceChart() {
  return (
    <div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={shadowPriceData}
            layout="vertical"
            margin={{ top: 4, right: 16, bottom: 4, left: 8 }}
            barCategoryGap="30%"
          >
            <CartesianGrid {...gridProps} vertical horizontal={false} />
            <XAxis
              type="number"
              tick={axisTick}
              tickLine={false}
              stroke="var(--line)"
              unit="M"
            />
            <YAxis
              type="category"
              dataKey="constraint"
              tick={{ ...axisTick, fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={120}
            />
            <Tooltip
              cursor={{ fill: "var(--accent-wash)" }}
              content={
                <ChartTooltip
                  unit="M per unit"
                  labels={{ shadowPrice: "Marginal value" }}
                />
              }
            />
            <Bar dataKey="shadowPrice" radius={[0, 3, 3, 0]}>
              {shadowPriceData.map((row) => (
                <Cell
                  key={row.constraint}
                  fill={row.binding ? "var(--chart-1)" : "var(--chart-4)"}
                  fillOpacity={row.binding ? 1 : 0.45}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <ChartLegend
          items={[
            { label: "Binding — buy more", color: "var(--chart-1)" },
            { label: "Slack — already enough", color: "var(--chart-4)" },
          ]}
        />
      </div>
    </div>
  );
}
