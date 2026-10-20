import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { nav, site } from "@/lib/site";

function Mark() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
      <circle cx="20" cy="20" r="19" fill="#33582f" />
      <path
        d="M20 31c0-7 0-11 0-15"
        stroke="#f8f6ef"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 20c-5.5 0-8-3.4-8-8 5 0 8 3 8 8Z"
        fill="#d3a343"
      />
      <path
        d="M20 24c5.5 0 8-3.4 8-8-5 0-8 3-8 8Z"
        fill="#a7c7a1"
      />
    </svg>
  );
}

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name}首页`}>
      <Mark />
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}
        >
          {site.name}
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[10px] tracking-[0.22em] ${
              light ? "text-white/60" : "text-ink/45"
            }`}
          >
            SEED · SINCE {site.founded}
          </span>
        )}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-line/80 bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "border-transparent bg-cream/80 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-seed-800"
                  : "text-ink/70 hover:bg-seed-50 hover:text-seed-800"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-wheat-400" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-seed-800 hover:text-seed-600"
          >
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            咨询品种
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          className="relative z-[60] -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-seed-100 lg:hidden"
        >
          <span className="sr-only">菜单</span>
          <div className="flex w-5 flex-col items-end gap-[5px]">
            <span
              className={`h-[1.5px] w-5 rounded bg-current transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-3.5 rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 rounded bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`lg:hidden overflow-hidden border-t border-line bg-cream transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="container-page flex flex-col py-2" aria-label="移动端导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between border-b border-line/70 py-4 text-base font-medium ${
                isActive(item.href) ? "text-seed-800" : "text-ink/80"
              }`}
            >
              {item.name}
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-ink/30" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
          <div className="flex flex-col gap-3 py-5">
            <a href={site.phoneHref} className="btn-primary w-full">
              电话咨询 {site.phone}
            </a>
            <Link href="/contact" className="btn-ghost w-full">
              在线留言
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
