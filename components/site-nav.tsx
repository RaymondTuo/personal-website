"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A fixed-position menu over a scrollable page is disorienting on mobile.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        lifted
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="shell flex h-16 items-center justify-between gap-6 md:h-20"
      >
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 rounded-sm"
          aria-label={`${site.name} — home`}
        >
          <span className="display text-xl tracking-tight">{site.name}</span>
          <span
            aria-hidden="true"
            className="display text-base text-fg-muted transition-colors group-hover:text-accent-fg"
          >
            {site.nameZh}
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href={site.resume}
            className="ml-1 hidden rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent-fg md:inline-block"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-9 place-items-center rounded-md border border-line text-fg-muted md:hidden"
          >
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 border-t border-line bg-bg px-6 pt-8 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5"
                >
                  <span className="eyebrow">{`0${i + 1}`}</span>
                  <span className="display text-3xl">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.resume}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-contrast"
          >
            Download resume
          </a>
        </div>
      )}
    </header>
  );
}
