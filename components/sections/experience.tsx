import { Expandable } from "@/components/expandable";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

// TODO(raymond): verify every number here against your latest resume before
// you ship. The 20%, 7%, 300k, and 4.03 figures came from the April 2026 PDF.
const timeline = [
  {
    period: "Aug 2025 — May 2026",
    org: "Carnegie Mellon University · Tepper School of Business",
    role: "M.S. Business Analytics",
    place: "Pittsburgh, PA",
    current: true,
    bullets: [
      "Carrying a 4.03 GPA through Machine Learning I & II, Optimization for Prescriptive Analytics, and Integrative Analytics — the coursework behind every case study on this page.",
      "Business analyst on the Project Geminae capstone, where I replaced an R²-driven pipeline with causal estimates that survived DoWhy refutation testing.",
    ],
  },
  {
    period: "Mar 2024 — May 2025",
    org: "THE 20 MSP Group LLC",
    role: "Data Analyst & System Administrator",
    place: "Boston, MA",
    current: false,
    bullets: [
      "Lifted operational efficiency 20% by analyzing client performance, technician utilization, and service effectiveness, then rebuilding the reporting layer in Power BI so managers could see it without asking me.",
      "Held the analytics workstream together through the Drivetech acquisition — Python pipelines plus Kaseya service coordination — and briefed the Regional Director on client and performance data every week.",
    ],
  },
  {
    period: "May 2023 — Mar 2024",
    org: "Drivetech Inc.",
    role: "Business Analyst",
    place: "Boston, MA",
    current: false,
    bullets: [
      "Raised yearly profitability 7% by analyzing three years of service and revenue data to find which clients and service lines were actually carrying the margin — and which were quietly subsidized.",
      "Wrangled 300,000+ ConnectWise records into the profit-margin analysis behind the company's valuation and its March 2024 acquisition, and co-designed the new pricing model with the owner.",
    ],
  },
  {
    period: "Jan 2019 — Dec 2022",
    org: "The Ohio State University",
    role: "B.S. Economics, Statistics, and Business",
    place: "Columbus, OH",
    current: false,
    bullets: [
      "Three concentrations at once: Econometrics I & II and Statistical Modeling I & II on one side, Marketing and Operations Management on the other.",
      "Econometrics is where the causal habit started — the training to ask \u201ccompared to what?\u201d before \u201chow big?\u201d",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section scroll-mt-20 border-t border-line"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title="Three years of doing this where the numbers had consequences."
            lede="Two of these jobs were the same company on either side of an acquisition. I was the analyst on both sides of it."
          />
        </Reveal>

        <ol className="mt-16 md:mt-20">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={entry.org} delay={i * 0.06}>
              <article className="border-t border-line py-10 md:py-12">
                <Expandable
                  label={entry.role}
                  summary={
                    <div className="grid gap-x-12 gap-y-5 pr-12 md:grid-cols-[13rem_1fr]">
                      <div className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className={`mt-[0.45rem] size-1.5 shrink-0 rounded-full ${
                            entry.current ? "bg-accent" : "bg-line-strong"
                          }`}
                        />
                        <div>
                          <p className="eyebrow">{entry.period}</p>
                          <p className="mt-2 font-mono text-[0.6875rem] tracking-wide text-fg-muted/70 uppercase">
                            {entry.place}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span
                          role="heading"
                          aria-level={3}
                          className="display display-md block text-balance"
                        >
                          {entry.role}
                        </span>
                        <p className="mt-2 text-sm font-medium text-accent-fg">
                          {entry.org}
                        </p>
                      </div>
                    </div>
                  }
                >
                  <ul className="flex flex-col gap-4 md:pl-[calc(13rem+3rem)]">
                    {entry.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-6 text-[0.9375rem] leading-relaxed text-fg-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute top-[0.7em] left-0 h-px w-3 bg-accent"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Expandable>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
