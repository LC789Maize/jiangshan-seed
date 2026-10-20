import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="mt-24 bg-seed-900 text-white/75">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
            {site.description}
          </p>
          <p className="mt-6 text-sm font-medium text-wheat-300">{site.slogan}</p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            网站导航
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            联系我们
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-6">
            <li>
              服务热线：
              <a href={site.phoneHref} className="font-semibold text-white hover:text-wheat-300">
                {site.phone}
              </a>
            </li>
            <li>
              邮箱：
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>地址：{site.address}</li>
            <li>工作时间：{site.workTime}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · 保留所有权利
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{site.icp}</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>本站品种信息以审定公告及包装标签为准</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
