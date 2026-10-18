import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowRight, SectionHeading } from "@/components/ui";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <section id="work" className="section scroll-mt-20 border-t border-line">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Case studies"
            title="Five problems, written the way I'd brief a marketing team."
            lede="Challenge, insight, approach, impact — and then the part most analytics write-ups skip: what a marketer would actually do with the result."
          />
        </Reveal>

        <ul className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2">
          {studies.map((study, i) => (
            <Reveal as="li" key={study.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/work/${study.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow">{study.pillar}</span>
                  <span className="eyebrow text-accent-fg/70">
                    {study.timeframe}
                  </span>
                </div>

                <h3 className="display display-md mt-7 text-balance transition-colors group-hover:text-accent-fg">
                  {study.title}
                </h3>

                <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {study.tagline}
                </p>

                <div className="mt-auto pt-8">
                  <p className="font-mono text-[0.6875rem] tracking-wide text-fg-muted uppercase">
                    Marketer&rsquo;s move
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-fg">
                    {study.marketerMove}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1">
                      {study.stack.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[0.75rem] text-fg-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ArrowRight className="ml-auto shrink-0 text-accent-fg" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
