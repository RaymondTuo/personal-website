/**
 * Placeholder chart data. Every export below is illustrative and shaped like
 * the real thing — replace the numbers and the charts will redraw unchanged.
 *
 * TODO(raymond): replace all six datasets with your real model outputs.
 */

/** Cell2Cell — share of actual churners captured in each predicted-risk decile. */
export const churnDecileData = [
  { decile: "1", captured: 31.0, baseline: 10 },
  { decile: "2", captured: 19.4, baseline: 10 },
  { decile: "3", captured: 13.8, baseline: 10 },
  { decile: "4", captured: 9.6, baseline: 10 },
  { decile: "5", captured: 7.5, baseline: 10 },
  { decile: "6", captured: 6.1, baseline: 10 },
  { decile: "7", captured: 4.4, baseline: 10 },
  { decile: "8", captured: 3.5, baseline: 10 },
  { decile: "9", captured: 2.8, baseline: 10 },
  { decile: "10", captured: 1.9, baseline: 10 },
];

/** Project Geminae — the same driver, estimated four ways. */
export const causalEstimateData = [
  { method: "Raw correlation", effect: 0.62, kind: "naive" as const },
  { method: "+ Controls (OLS)", effect: 0.41, kind: "naive" as const },
  { method: "Double ML", effect: 0.18, kind: "causal" as const },
  { method: "DoWhy refutation", effect: 0.16, kind: "causal" as const },
];

/** PJM — one representative load area, actual vs. forecast with an interval. */
export const loadForecastData = [
  { month: "Jan", actual: 7.9, forecast: 7.8, lower: 7.2, upper: 8.4 },
  { month: "Feb", actual: 7.2, forecast: 7.3, lower: 6.7, upper: 7.9 },
  { month: "Mar", actual: 6.4, forecast: 6.5, lower: 5.9, upper: 7.1 },
  { month: "Apr", actual: 5.8, forecast: 5.9, lower: 5.3, upper: 6.5 },
  { month: "May", actual: 6.1, forecast: 6.2, lower: 5.6, upper: 6.8 },
  { month: "Jun", actual: 7.6, forecast: 7.4, lower: 6.8, upper: 8.0 },
  { month: "Jul", actual: 8.8, forecast: 8.6, lower: 7.9, upper: 9.3 },
  { month: "Aug", actual: 8.5, forecast: 8.4, lower: 7.7, upper: 9.1 },
  { month: "Sep", actual: 7.1, forecast: 7.2, lower: 6.5, upper: 7.9 },
  { month: "Oct", actual: null, forecast: 6.3, lower: 5.6, upper: 7.0 },
  { month: "Nov", actual: null, forecast: 6.9, lower: 6.1, upper: 7.7 },
  { month: "Dec", actual: null, forecast: 7.7, lower: 6.8, upper: 8.6 },
];

/** Predict-then-optimize — even split vs. optimizer, by channel. */
export const allocationData = [
  { channel: "Paid search", even: 20, optimized: 31 },
  { channel: "Paid social", even: 20, optimized: 24 },
  { channel: "Retail media", even: 20, optimized: 18 },
  { channel: "CTV", even: 20, optimized: 15 },
  { channel: "Affiliate", even: 20, optimized: 12 },
];

/** TSMC–Nvidia — shadow price per unit of each binding constraint. */
export const shadowPriceData = [
  { constraint: "CoWoS packaging", shadowPrice: 42.0, binding: true },
  { constraint: "N4 wafer starts", shadowPrice: 28.5, binding: true },
  { constraint: "Test capacity", shadowPrice: 11.2, binding: true },
  { constraint: "HBM supply", shadowPrice: 4.8, binding: false },
  { constraint: "Substrate", shadowPrice: 0, binding: false },
];
