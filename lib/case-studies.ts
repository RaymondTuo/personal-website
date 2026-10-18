import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Metric = {
  value: number;
  label: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export type Pillar =
  | "Customer Insight"
  | "Measurement & Attribution"
  | "Growth Optimization";

export type CaseStudyMeta = {
  slug: string;
  title: string;
  /** Short marketing framing used on cards and as the page subhead. */
  tagline: string;
  pillar: Pillar;
  role: string;
  timeframe: string;
  stack: string[];
  /** Key into the chart registry in components/charts. */
  chart: string;
  chartCaption: string;
  order: number;
  metrics: Metric[];
  /** One-line "so what" for a marketer, shown on the card. */
  marketerMove: string;
};

export type CaseStudy = CaseStudyMeta & { body: string };

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

function readCaseStudy(fileName: string): CaseStudy {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  return { ...(data as Omit<CaseStudyMeta, "slug">), slug, body: content };
}

export function getAllCaseStudies(): CaseStudy[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map(readCaseStudy)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((study) => study.slug === slug);
}
