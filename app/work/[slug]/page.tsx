import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Chart } from "@/components/charts";
import { MetricList } from "@/components/metric-list";
import { PhotoBackdrop } from "@/components/photo-backdrop";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "@/components/ui";
import { getAllCaseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.tagline,
      url: `/work/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const all = getAllCaseStudies();
  const next = all[(all.findIndex((s) => s.slug === slug) + 1) % all.length];

  return (
    <article>
      <header className="grain relative isolate overflow-hidden border-b border-line">
        <PhotoBackdrop src="/images/bg-hero.jpg" overlay="hero" />

        <div className="shell pt-12 pb-16 md:pt-16 md:pb-24">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-[0.75rem] tracking-wide text-fg-muted uppercase transition-colors hover:text-accent-fg"
          >
            <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="eyebrow text-accent-fg">{study.pillar}</span>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            <span className="eyebrow">{study.timeframe}</span>
          </div>

          <h1 className="display display-xl mt-6 max-w-[18ch]">
            {study.title}
          </h1>

          <p className="lede mt-7 max-w-2xl">{study.tagline}</p>

          <MetricList
            metrics={study.metrics}
            className="mt-14 max-w-3xl border-t border-line pt-10"
            size="lg"
          />
        </div>
      </header>

      <div className="shell grid gap-x-16 gap-y-12 py-16 md:py-24 lg:grid-cols-[15rem_minmax(0,46rem)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <dl className="flex flex-col gap-7">
            <div>
              <dt className="eyebrow">My role</dt>
              <dd className="mt-2.5 text-[0.9375rem] text-fg">{study.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">Stack</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-[0.75rem] text-fg-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>

        <div className="prose-editorial">
          <MDXRemote
            source={study.body}
            components={{ Chart }}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </div>

      <Reveal>
        <Link
          href={`/work/${next.slug}`}
          className="group block border-t border-line bg-surface-sunk transition-colors hover:bg-surface"
        >
          <div className="shell flex flex-col gap-4 py-14 sm:flex-row sm:items-end sm:justify-between md:py-20">
            <div>
              <p className="eyebrow">Next case study</p>
              <p className="display display-md mt-4 transition-colors group-hover:text-accent-fg">
                {next.title}
              </p>
            </div>
            <ArrowRight className="size-6 text-accent-fg" />
          </div>
        </Link>
      </Reveal>
    </article>
  );
}
