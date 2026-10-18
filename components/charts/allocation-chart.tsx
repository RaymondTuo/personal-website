"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { allocationData } from "@/content/chart-data";
import {
  axisTick,
  ChartLegend,
  ChartTooltip,
  gridProps,
} from "@/components/charts/chart-primitives";

export function AllocationChart() {
  return (
    <div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={allocationData}
            margin={{ top: 8, right: 4, bottom: 4, left: -16 }}
            barGap={2}
            barCategoryGap="26%"
          >
            <CartesianGrid {...gridProps} />
            <XAxis
              dataKey="channel"
              tick={{ ...axisTick, fontSize: 10 }}
              tickLine={false}
              stroke="var(--line)"
              interval={0}
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
                  unit="% of budget"
                  labels={{ even: "Even split", optimized: "Optimizer" }}
                />
              }
            />
            <Bar
              dataKey="even"
              fill="var(--chart-4)"
              fillOpacity={0.4}
              radius={[3, 3, 0, 0]}
            />
            <Bar dataKey="optimized" fill="var(--chart-1)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4">
        <ChartLegend
          items={[
            { label: "Even split", color: "var(--chart-4)" },
            { label: "QP optimizer", color: "var(--chart-1)" },
          ]}
        />
      </div>
    </div>
  );
}
