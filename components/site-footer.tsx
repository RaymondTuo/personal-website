import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface-sunk">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display flex items-baseline gap-2.5 text-2xl">
            {site.name}
            <span className="text-base text-fg-muted" lang="zh-Hans">
              {site.nameZh}
            </span>
          </p>
          <p className="mt-2 font-mono text-[0.75rem] tracking-wide text-fg-muted uppercase">
            {site.role} &nbsp;/&nbsp; {site.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[0.75rem] tracking-wide text-fg-muted uppercase transition-colors hover:text-accent-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[0.6875rem] text-fg-muted/70 sm:text-right">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </nav>
      </div>
    </footer>
  );
}
