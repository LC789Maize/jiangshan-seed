import Link from "next/link";
import type { NewsItem } from "@/lib/news";
import { formatDate } from "@/lib/format";
import { asset } from "@/lib/site";

export function NewsCard({ item, compact = false }: { item: NewsItem; compact?: boolean }) {
  return (
    <article className="card card-hover group flex flex-col">
      <Link href={`/news/${item.slug}`} className="relative block overflow-hidden">
        <div className={`${compact ? "aspect-[16/10]" : "aspect-[16/9]"} overflow-hidden bg-seed-100`}>
          <img
            src={asset(item.cover)}
            alt={item.title}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-seed-950/25 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-seed-800 shadow-sm ring-1 ring-black/5 backdrop-blur">
          {item.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time dateTime={item.date} className="text-xs text-ink/40">
          {formatDate(item.date)}
        </time>
        <h3 className="mt-2 text-base font-semibold leading-7 text-ink sm:text-lg">
          <Link href={`/news/${item.slug}`} className="hover:text-seed-700">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/60">{item.summary}</p>
        <Link
          href={`/news/${item.slug}`}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-seed-700 hover:text-seed-600"
        >
          阅读全文
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
      </div>
    </article>
  );
}
