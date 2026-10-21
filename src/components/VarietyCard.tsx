import Link from "next/link";
import type { Variety } from "@/lib/varieties";
import { asset } from "@/lib/site";

export function VarietyCard({ variety, priority = false }: { variety: Variety; priority?: boolean }) {
  return (
    <article className="card card-hover group flex flex-col">
      <Link href={`/varieties/${variety.slug}`} className="relative block overflow-hidden">
        <div className="aspect-[4/3] w-full overflow-hidden bg-seed-100">
          <img
            src={asset(variety.image)}
            alt={`${variety.name}（${variety.crop}）`}
            width={800}
            height={600}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-seed-950/25 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-seed-800 shadow-sm ring-1 ring-black/5 backdrop-blur">
          {variety.crop}
        </span>
        {variety.badge && (
          <span className="absolute right-4 top-4 rounded-full bg-wheat-400 px-3 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-black/5">
            {variety.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-ink">
          <Link href={`/varieties/${variety.slug}`} className="hover:text-seed-700">
            {variety.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/60">{variety.tagline}</p>

        <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-line/80 pt-4 text-xs">
          <div>
            <dt className="text-ink/40">生育期</dt>
            <dd className="mt-0.5 font-medium text-ink/80">{variety.growthPeriod}</dd>
          </div>
          <div>
            <dt className="text-ink/40">审定编号</dt>
            <dd className="mt-0.5 font-medium text-ink/80">{variety.approvalNo}</dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {variety.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className="rounded-full bg-seed-50 px-2.5 py-1 text-[11px] font-medium text-seed-700"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <Link
            href={`/varieties/${variety.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-seed-700 hover:text-seed-600"
          >
            查看品种详情
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M3 8h9M8.5 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <span className="text-[11px] text-ink/35">{variety.region.split("、")[0]}</span>
        </div>
      </div>
    </article>
  );
}
