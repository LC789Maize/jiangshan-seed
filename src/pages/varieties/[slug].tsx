import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { VarietyCard } from "@/components/VarietyCard";
import { ArrowIcon, CheckIcon, FieldIcon, LabIcon, ShieldIcon } from "@/components/Icons";
import { site, asset } from "@/lib/site";
import { varieties, getVariety, type Variety } from "@/lib/varieties";

interface Props {
  variety: Variety;
  related: Variety[];
}

const VarietyDetailPage: NextPage<Props> = ({ variety, related }) => {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "品种中心", item: `${site.url}/varieties/` },
      { "@type": "ListItem", position: 3, name: variety.name, item: `${site.url}/varieties/${variety.slug}/` },
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: variety.name,
    description: `${variety.tagline}。${variety.features[0]}`,
    image: [`${site.url}${variety.image}`],
    category: `${variety.crop}种子`,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.legalName },
    additionalProperty: [
      { "@type": "PropertyValue", name: "审定编号", value: variety.approvalNo },
      { "@type": "PropertyValue", name: "生育期", value: variety.growthPeriod },
      { "@type": "PropertyValue", name: "适宜区域", value: variety.region },
      { "@type": "PropertyValue", name: "包装规格", value: variety.packing },
    ],
  };

  const specs = [
    { label: "作物", value: variety.crop },
    { label: "生育期", value: variety.growthPeriod },
    { label: "审定编号", value: variety.approvalNo },
    { label: "适宜区域", value: variety.region },
    { label: "包装规格", value: variety.packing },
  ];

  return (
    <Layout
      title={`${variety.name}（${variety.crop}）品种介绍`}
      description={`${variety.name}：${variety.tagline}。生育期 ${variety.growthPeriod}，适宜区域 ${variety.region}，${variety.approvalNo}。`}
      image={variety.image}
      type="article"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />

      <nav aria-label="面包屑" className="border-b border-line bg-white">
        <div className="container-page flex items-center gap-2 overflow-x-auto py-4 text-xs text-ink/50">
          <Link href="/" className="shrink-0 hover:text-seed-700">
            首页
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/varieties" className="shrink-0 hover:text-seed-700">
            品种中心
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={`/varieties?crop=${encodeURIComponent(variety.crop)}`} className="shrink-0 hover:text-seed-700">
            {variety.crop}品种
          </Link>
          <span aria-hidden="true">/</span>
          <span className="shrink-0 text-ink/80">{variety.name}</span>
        </div>
      </nav>

      {/* 产品头部 */}
      <section className="bg-white">
        <div className="container-page grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-line">
              <img
                src={asset(variety.image)}
                alt={`${variety.name}（${variety.crop}）`}
                width={800}
                height={600}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {specs.slice(0, 3).map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-cream/60 px-3 py-3">
                  <p className="text-[10px] uppercase tracking-wide text-ink/40">{s.label}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-ink/80">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-seed-50 px-3 py-1 text-xs font-semibold text-seed-700">
                {variety.crop}
              </span>
              {variety.badge && (
                <span className="rounded-full bg-wheat-400 px-3 py-1 text-xs font-semibold text-white">
                  {variety.badge}
                </span>
              )}
              <span className="text-xs text-ink/40">品种编号 {variety.slug.toUpperCase()}</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{variety.name}</h1>
            <p className="mt-3 text-base leading-7 text-ink/60 sm:text-lg">{variety.tagline}</p>

            <ul className="mt-6 space-y-2.5">
              {variety.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-seed-600" />
                  {h}
                </li>
              ))}
            </ul>

            <dl className="mt-7 divide-y divide-line border-y border-line text-sm">
              {specs.map((s) => (
                <div key={s.label} className="flex gap-4 py-3">
                  <dt className="w-20 shrink-0 text-ink/45">{s.label}</dt>
                  <dd className="flex-1 font-medium text-ink/80">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-primary flex-1 sm:flex-none">
                电话咨询 {site.phone}
              </a>
              <Link href="/contact" className="btn-ghost flex-1 sm:flex-none">
                索取品种资料
              </Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-ink/40">
              种子为特殊商品，购买前请确认品种适宜种植区域与当地审定情况。
            </p>
          </div>
        </div>
      </section>

      {/* 详细参数 */}
      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card p-6 sm:p-8 lg:col-span-2">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-seed-50 text-seed-700">
                <LabIcon className="h-5 w-5" />
              </span>
              特征特性
            </h2>
            <ul className="mt-5 space-y-3">
              {variety.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-7 text-ink/70">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wheat-400" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card p-6 sm:p-8">
              <h2 className="flex items-center gap-2.5 text-lg font-semibold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-seed-50 text-seed-700">
                  <FieldIcon className="h-5 w-5" />
                </span>
                产量表现
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink/70">{variety.yield}</p>
            </div>
            <div className="card p-6 sm:p-8">
              <h2 className="flex items-center gap-2.5 text-lg font-semibold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-seed-50 text-seed-700">
                  <ShieldIcon className="h-5 w-5" />
                </span>
                抗性表现
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink/70">{variety.resistance}</p>
            </div>
          </div>
        </div>

        <div className="card mt-6 p-6 sm:p-8">
          <h2 className="text-lg font-semibold">栽培要点</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-3">
            {variety.cultivation.map((c, i) => (
              <li key={c} className="rounded-xl border border-line bg-cream/50 p-4">
                <span className="text-xs font-semibold text-wheat-600">0{i + 1}</span>
                <p className="mt-2 text-sm leading-6 text-ink/70">{c}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-6 text-ink/40">
            以上为品种通用栽培建议，具体播期、密度与施肥量请结合当地农技部门指导与地块条件调整。
          </p>
        </div>
      </section>

      {/* 相关品种 */}
      {related.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-xl font-semibold sm:text-2xl">同作物其他品种</h2>
              <Link
                href={`/varieties?crop=${encodeURIComponent(variety.crop)}`}
                className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-seed-700 hover:text-seed-600"
              >
                查看全部
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {related.map((v) => (
                <VarietyCard key={v.slug} variety={v} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: varieties.map((v) => ({ params: { slug: v.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const variety = getVariety(params?.slug as string);
  if (!variety) return { notFound: true };

  const related = varieties.filter((v) => v.crop === variety.crop && v.slug !== variety.slug).slice(0, 3);

  return { props: { variety, related } };
};

export default VarietyDetailPage;
