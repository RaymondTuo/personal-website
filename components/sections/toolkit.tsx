import { Expandable } from "@/components/expandable";
import { Reveal } from "@/components/reveal";
import { Chip, SectionHeading } from "@/components/ui";

const groups = [
  {
    index: "01",
    name: "Analyze",
    note: "Get to the real question",
    tools: [
      "Python",
      "SQL",
      "pandas",
      "R",
      "Econometrics",
      "Data wrangling",
      "Excel",
    ],
  },
  {
    index: "02",
    name: "Model",
    note: "Predict, then prove",
    tools: [
      "scikit-learn",
      "XGBoost",
      "Random forest",
      "Logistic regression",
      "Prophet",
      "Double ML",
      "DoWhy",
    ],
  },
  {
    index: "03",
    name: "Optimize",
    note: "Turn the forecast into a decision",
    tools: [
      "Gurobi",
      "Linear programming",
      "Quadratic programming",
      "Sensitivity analysis",
    ],
  },
  {
    index: "04",
    name: "Visualize",
    note: "Make it legible to non-modelers",
    tools: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Recharts",
      "Dashboard design",
    ],
  },
  {
    index: "05",
    name: "Ship",
    note: "Put it where people work",
    tools: [
      "AWS SageMaker",
      "S3",
      "RDS",
      "Streamlit",
      "Git",
      "ConnectWise",
      "Kaseya",
    ],
  },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="section scroll-mt-20 border-t border-line">
      <div className="shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Toolkit"
            title="Grouped by what it's for, not by what it says on a job posting."
          />
        </Reveal>

        <div className="mt-16 flex flex-col md:mt-20">
          {groups.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.05}>
              <div className="border-t border-line py-8">
                <Expandable
                  label={group.name}
                  summary={
                    <div className="flex items-baseline gap-3 pr-12">
                      <span className="eyebrow text-accent-fg">
                        {group.index}
                      </span>
                      <div>
                        <span
                          role="heading"
                          aria-level={3}
                          className="display block text-2xl"
                        >
                          {group.name}
                        </span>
                        <p className="mt-1 font-mono text-[0.6875rem] tracking-wide text-fg-muted uppercase">
                          {group.note}
                        </p>
                      </div>
                    </div>
                  }
                >
                  <ul className="flex flex-wrap content-start gap-2 md:pl-[4.25rem]">
                    {group.tools.map((tool) => (
                      <Chip key={tool}>{tool}</Chip>
                    ))}
                  </ul>
                </Expandable>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
