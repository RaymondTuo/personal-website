import Image from "next/image";

type Overlay = "hero" | "section" | "split";

const overlays: Record<Overlay, string> = {
  hero: "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--bg)_42%,transparent)_0%,color-mix(in_srgb,var(--bg)_58%,transparent)_45%,var(--bg)_100%),linear-gradient(to_right,color-mix(in_srgb,var(--bg)_72%,transparent)_0%,color-mix(in_srgb,var(--bg)_28%,transparent)_55%,transparent_100%)]",
  section:
    "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--bg)_55%,transparent),color-mix(in_srgb,var(--bg)_78%,transparent)_55%,var(--bg))] dark:bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--bg)_48%,transparent),color-mix(in_srgb,var(--bg)_70%,transparent)_50%,var(--bg))]",
  split:
    "bg-[linear-gradient(to_top,color-mix(in_srgb,var(--bg)_70%,transparent),transparent_45%),linear-gradient(to_left,transparent_40%,color-mix(in_srgb,var(--bg)_35%,transparent))]",
};

export function PhotoBackdrop({
  src,
  overlay = "section",
  priority = false,
  className = "",
}: {
  src: string;
  overlay?: Overlay;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center grayscale-[0.15] contrast-[1.08]"
      />
      <div className={`absolute inset-0 ${overlays[overlay]}`} />
    </div>
  );
}
