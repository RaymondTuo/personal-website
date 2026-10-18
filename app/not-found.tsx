import { ArrowRight, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="display display-lg mt-6 max-w-[22ch]">
        This page doesn&rsquo;t exist. The rest of the site does.
      </h1>
      <div className="mt-10">
        <ButtonLink href="/">
          Back to the work
          <ArrowRight />
        </ButtonLink>
      </div>
    </section>
  );
}
