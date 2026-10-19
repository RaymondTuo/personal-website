import Link from "next/link";
import { Expandable } from "@/components/expandable";
import { Reveal } from "@/components/reveal";
import { ArrowRight, SectionHeading } from "@/components/ui";

const pillars = [
  {
    index: "01",
    pillar: "Customer Insight",
    headline: "Know who's leaving before they do.",
    body: "Churn and segmentation models are only useful if they change who gets contacted. I build them to produce a call list with a budget dial on it, not a score nobody can act on.",
    proof: "Cell2Cell — 64% of churners, 3 deciles",
    href: "/work/cell2cell-churn",
  },
  {
    index: "02",
    pillar: "Measurement & Attribution",
    headline: "Prove it moved the needle, not just that it happened.",
    body: "Double ML, DoWhy, holdout design. Last-click will always flatter the channel closest to the sale. I separate what your marketing caused from what it merely witnessed.",
    proof: "Geminae — naive estimate 3.5× too high",
    href: "/work/project-geminae",
  },
  {
    index: "03",
    pillar: "Growth Optimization",
    headline: "Forecast the demand, then spend against it.",
    body: "Prophet for what's coming, Gurobi for where the money goes. Forecasting without an allocation step is a slide; allocation without a forecast is a guess.",
    proof: "PJM — 10 markets, 4.2% MAPE",
    href: "/work/pjm-load-forecasting",
  },
];

export function Pillars() {
  return (
    <section className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="What I bring to AI marketing"
            title={
              <>
                Three things a marketing team can&rsquo;t fake:{" "}
                <em className="italic text-fg-muted">
                  who to target, whether it worked, where the money goes.
                </em>
              </>
            }
          />
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:mt-20 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.index} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-bg p-7 transition-colors duration-300 hover:bg-surface md:p-9">
                <Expandable
                  className="flex-1"
                  label={pillar.headline}
                  summary={
                    <>
                      <div className="flex items-center justify-between gap-4">
                        <span className="eyebrow text-accent-fg">
                          {pillar.index}
                        </span>
                        <span className="eyebrow">{pillar.pillar}</span>
                      </div>
                      <span
                        role="heading"
                        aria-level={3}
                        className="display display-md mt-8 block text-balance"
                      >
                        {pillar.headline}
                      </span>
                    </>
                  }
                >
                  <p className="text-[0.9375rem] leading-relaxed text-fg-muted">
                    {pillar.body}
                  </p>
                </Expandable>
                <Link
                  href={pillar.href}
                  className="group mt-8 flex items-center gap-2 border-t border-line pt-5 font-mono text-[0.75rem] text-fg-muted transition-colors hover:text-accent-fg"
                >
                  <span className="truncate">{pillar.proof}</span>
                  <ArrowRight className="ml-auto shrink-0" />
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
