import { GradientMesh } from "@/components/gradient-mesh";
import { PhotoBackdrop } from "@/components/photo-backdrop";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ButtonAnchor, ButtonLink } from "@/components/ui";
import { site } from "@/lib/site";

// TODO(raymond): these three are pulled straight from your resume. Edit if you
// want different proof points above the fold.
const credentials = [
  { value: "3 yrs", label: "Business & data analytics" },
  { value: "4.03", label: "GPA — CMU Tepper MSBA" },
  { value: "2", label: "Markets: US & China" },
];

export function Hero() {
  return (
    <section className="grain relative isolate min-h-[100svh] overflow-hidden">
      <PhotoBackdrop src="/images/bg-hero.jpg" overlay="hero" priority />
      <GradientMesh />

      <div className="shell relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end pt-24 pb-16 md:min-h-[calc(100svh-5rem)] md:pb-20">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">
              {site.location}
              <span className="mx-2 text-accent">/</span>
              CMU Tepper MSBA &rsquo;26
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display display-xl mt-6">
              I make the number trustworthy
              <span className="text-accent"> — </span>
              and the story
              <em className="italic"> impossible to ignore.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="lede mt-8 max-w-xl text-fg">
              Marketing analytics with receipts: churn models that name the
              customer, causal tests that prove the lift, optimizers that place
              the budget. Three years doing it for real businesses, now finishing
              an MSBA at Carnegie Mellon.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="#work">
                See my work
                <ArrowRight />
              </ButtonLink>
              <ButtonAnchor href={site.resume} variant="outline" download>
                Download resume
              </ButtonAnchor>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7 sm:grid-cols-3 md:mt-20 md:max-w-3xl">
            {credentials.map((item) => (
              <div key={item.label}>
                <dt className="display text-3xl md:text-4xl">{item.value}</dt>
                <dd className="mt-2 max-w-[10rem] font-mono text-[0.6875rem] leading-tight tracking-wide text-fg-muted uppercase">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
