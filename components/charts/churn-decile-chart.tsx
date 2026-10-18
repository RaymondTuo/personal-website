"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { churnDecileData } from "@/content/chart-data";
import {
  axisTick,
  ChartLegend,
  ChartTooltip,
  gridProps,
} from "@/components/charts/chart-primitives";

export function ChurnDecileChart() {
  return (
    <div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={churnDecileData}
            margin={{ top: 8, right: 4, bottom: 4, left: -16 }}
            barCategoryGap="22%"
          >
            <CartesianGrid {...gridProps} />
            <XAxis
              dataKey="decile"
              tick={axisTick}
              tickLine={false}
              stroke="var(--line)"
              label={{
                value: "PREDICTED RISK DECILE",
                position: "insideBottom",
                offset: -2,
                style: { ...axisTick, fontSize: 9, letterSpacing: "0.12em" },
              }}
              height={40}
            />
            <YAxis
              tick={axisTick}
              tickLine={false}
              axisLine={false}
              unit="%"
              width={48}
            />
            <Tooltip
              cursor={{ fill: "var(--accent-wash)" }}
              content={
                <ChartTooltip
                  unit="%"
                  labels={{
                    captured: "Churners captured",
                    baseline: "Random targeting",
                  }}
                />
              }
            />
            <ReferenceLine
              y={10}
              stroke="var(--chart-4)"
              strokeDasharray="4 4"
            />
            <Bar dataKey="captured" radius={[3, 3, 0, 0]}>
              {churnDecileData.map((row, i) => (
                <Cell
                  key={row.decile}
                  // The top three deciles are the ones a retention team can
                  // actually afford to call.
                  fill={i < 3 ? "var(--chart-1)" : "var(--chart-4)"}
                  fillOpacity={i < 3 ? 1 : 0.45}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <ChartLegend
          items={[
            { label: "Target these", color: "var(--chart-1)" },
            { label: "Leave alone", color: "var(--chart-4)" },
            { label: "Random = 10%", color: "var(--chart-4)", dashed: true },
          ]}
        />
      </div>
    </div>
  );
}
