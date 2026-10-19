"use client";

import { useId, useState, type ReactNode } from "react";

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative mt-0.5 size-7 shrink-0 rounded-md border border-line bg-surface text-fg-muted transition-colors group-hover:border-accent group-hover:text-accent-fg"
    >
      <span className="absolute top-1/2 left-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span
        className={`absolute top-1/2 left-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-200 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

export function Expandable({
  label,
  summary,
  children,
  className = "",
  compact = false,
  defaultOpen = false,
}: {
  /** Accessible name for the toggle, usually the block title. */
  label: string;
  summary: ReactNode;
  children: ReactNode;
  className?: string;
  /** Sit the plus next to the label instead of pushing it to the far right. */
  compact?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={className} data-open={open ? "true" : "false"}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? "Hide" : "Show"} details: ${label}`}
        onClick={() => setOpen((value) => !value)}
        className={`group cursor-pointer items-start gap-4 text-left ${
          compact ? "inline-flex" : "flex w-full justify-between"
        }`}
      >
        <span className="min-w-0 flex-1">{summary}</span>
        <PlusMinus open={open} />
      </button>

      <div
        id={panelId}
        role="region"
        hidden={!open}
        className="overflow-hidden"
      >
        <div className="pt-5">{children}</div>
      </div>
    </div>
  );
}
