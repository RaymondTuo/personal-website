import { Expandable } from "@/components/expandable";
import { PhotoBackdrop } from "@/components/photo-backdrop";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ButtonAnchor } from "@/components/ui";
import { site } from "@/lib/site";

const elsewhere = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Resume (PDF)", href: site.resume },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="grain relative isolate scroll-mt-20 overflow-hidden border-t border-line"
    >
      <PhotoBackdrop src="/images/bg-contact.jpg" overlay="section" />

      <div className="shell section relative">
        <Reveal>
          <p className="eyebrow">05 &nbsp;/&nbsp; Contact</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display display-lg mt-6 max-w-[24ch]">
            If any of this sounds like a problem you already have,{" "}
            <em className="italic text-accent">let&rsquo;s talk.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <Expandable
            className="mt-7 max-w-xl"
            compact
            label="what I'm looking for"
            summary={
              <span className="eyebrow text-accent-fg">More context</span>
            }
          >
            <p className="lede">
              I&rsquo;m looking for a role where marketing judgment and
              model-building sit in the same job description — ideally somewhere
              that would rather know the real lift than the flattering one.
              Email is the fastest way to reach me, and I answer everything.
            </p>
          </Expandable>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonAnchor href={`mailto:${site.email}`}>
              {site.email}
              <ArrowRight />
            </ButtonAnchor>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7">
            {elsewhere.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 font-mono text-[0.8125rem] text-fg-muted transition-colors hover:text-accent-fg"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                  <ArrowRight className="size-3 -rotate-45" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
