import { useState, useMemo } from "react";
import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { VarietyCard } from "@/components/VarietyCard";
import { varieties, crops, type Variety, type Crop } from "@/lib/varieties";
import { site } from "@/lib/site";

interface Props {
  all: Variety[];
}

type Filter = "全部" | Crop;

const VarietiesPage: NextPage<Props> = ({ all }) => {
  const [filter, setFilter] = useState<Filter>("全部");
  const [query, setQuery] = useState("");

  const tabs: Filter[] = ["全部", ...crops];

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((v) => {
      const matchCrop = filter === "全部" || v.crop === filter;
      const matchQuery =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.tagline.toLowerCase().includes(q) ||
        v.region.toLowerCase().includes(q);
      return matchCrop && matchQuery;
    });
  }, [all, filter, query]);

  return (
    <Layout
      title="品种中心"
      description={`${site.name}品种列表：粮用玉米、青贮玉米、早熟小麦。查看每个品种的生育期、审定或备案编号、适宜区域、产量表现与栽培要点。`}
      image="/images/varieties/liangchun-789.webp"
    >
      {/* 页头 */}
      <section className="border-b border-line bg-gradient-to-b from-white to-seed-50/70">
        <div className="container-page py-12 sm:py-16">
          <p className="eyebrow">
            <span className="h-px w-6 bg-wheat-400" aria-hidden="true" />
            VARIETIES
          </p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">品种中心</h1>
              <p className="mt-3 text-sm leading-7 text-ink/60 sm:text-base">
                共 {all.length} 个主推品种，覆盖粮用玉米、青贮玉米与早熟小麦。按作物筛选，或搜索品种名称、
                适宜区域。自有品系与引种备案品种均如实标注，具体以包装标签为准。
              </p>
            </div>
            <div className="w-full lg:w-72">
              <label htmlFor="search" className="sr-only">
                搜索品种
              </label>
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16.5 16.5 4 4" strokeLinecap="round" />
                </svg>
                <input
                  id="search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜索品种名称或适宜区域"
                  className="h-12 w-full rounded-full border border-line bg-cream/60 pl-11 pr-4 text-sm text-ink placeholder:text-ink/35 focus:border-seed-400 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 筛选 */}
      <section className="container-page py-8 sm:py-10">
        <div
          className="no-scrollbar sticky top-[76px] z-30 -mx-1 flex gap-2 overflow-x-auto rounded-2xl border border-line/70 bg-cream/90 p-2 shadow-sm backdrop-blur"
          role="tablist"
          aria-label="按作物筛选"
        >
          {tabs.map((t) => {
            const count = t === "全部" ? all.length : all.filter((v) => v.crop === t).length;
            const active = filter === t;
            return (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(t)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-seed-700 bg-seed-700 text-white"
                    : "border-line bg-white text-ink/70 hover:border-seed-300 hover:text-seed-700"
                }`}
              >
                {t}
                <span className={active ? "text-white/60" : "text-ink/35"}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* 列表 */}
        {list.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {list.map((v, i) => (
              <VarietyCard key={v.slug} variety={v} priority={i === 0} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-line bg-white/60 py-16 text-center">
            <p className="text-sm text-ink/60">没有找到匹配的品种</p>
            <button
              type="button"
              onClick={() => {
                setFilter("全部");
                setQuery("");
              }}
              className="mt-3 text-sm font-semibold text-seed-700 hover:text-seed-600"
            >
              清除筛选条件
            </button>
          </div>
        )}

        <p className="mt-8 text-xs leading-6 text-ink/40">
          注：品种审定编号、适宜区域以农业农村部或省级审定公告为准；产量数据来自区域试验，实际产量受气候、地力与栽培管理影响。
        </p>
      </section>

      {/* 底部提示 */}
      <section className="container-page pb-4">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white px-6 py-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-base font-semibold">没有找到合适的品种？</h2>
            <p className="mt-1 text-sm text-ink/60">告诉我们地块位置与前茬作物，农技顾问帮你选。</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 !px-5 !py-2.5">
            选种咨询
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { all: varieties } };
};

export default VarietiesPage;
