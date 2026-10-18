import { PhotoBackdrop } from "@/components/photo-backdrop";
import { Reveal } from "@/components/reveal";

export function Bilingual() {
  return (
    <section className="grain relative isolate overflow-hidden border-t border-line">
      <PhotoBackdrop src="/images/bg-bilingual.jpg" overlay="section" />

      <div className="shell section relative">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div>
              <p className="eyebrow">Bilingual edge</p>
              <p
                className="display mt-6 text-5xl leading-none text-accent md:text-7xl"
                lang="zh-Hans"
              >
                双语
              </p>
              <p className="mt-5 font-mono text-[0.75rem] tracking-wide text-fg-muted uppercase">
                English · 中文
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-2xl rounded-xl border border-line bg-bg/70 p-6 backdrop-blur-md sm:p-8">
              <h2 className="display display-md text-balance">
                The useful part isn&rsquo;t the translation. It&rsquo;s knowing
                the same campaign needs a different shape in each market.
              </h2>

              <div className="mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-fg-muted">
                <p>
                  Chinese consumers meet brands inside WeChat and 小红书, where
                  content <em className="italic">is</em> the channel and a
                  five-star review is assumed to be paid for until proven
                  otherwise. US consumers arrive from search and email and
                  extend the opposite benefit of the doubt. Same product, same
                  price, two completely different trust problems.
                </p>
                <p>
                  I work in both markets, which means every positioning and
                  measurement decision gets stress-tested twice before I would
                  ship it.
                </p>
                <p>
                  I&rsquo;ve also spent three years as the person translating
                  between the technical room and the room that owns the budget.
                  Working across markets is the same skill with a wider gap.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
