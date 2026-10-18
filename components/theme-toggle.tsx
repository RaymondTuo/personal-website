"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Deliberately stateless. The <html> class is the single source of truth, and
 * both icons ship in the markup with CSS picking the right one, so there's
 * nothing to hydrate, nothing to mismatch, and no flash on first paint.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";

    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing can reject writes; the toggle still works in-session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid size-9 place-items-center rounded-md border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-[17px] dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4.25" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="hidden size-[17px] dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
