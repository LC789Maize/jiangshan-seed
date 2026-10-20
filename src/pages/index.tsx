import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { VarietyCard } from "@/components/VarietyCard";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowIcon,
  CheckIcon,
  FieldIcon,
  LabIcon,
  ShieldIcon,
  SproutIcon,
  stats,
} from "@/components/Icons";
import { site, asset } from "@/lib/site";
import { varieties } from "@/lib/varieties";
import { getAllNews, type NewsItem } from "@/lib/news";

interface HomeProps {
  featured: typeof varieties;
  news: NewsItem[];
}

const advantages = [
  {
    icon: SproutIcon,
    title: "自有五紫品系",
    text: "自主选育五紫特色玉米品系，根、秆、叶鞘、花丝、苞叶五紫齐全，抗倒耐密，适配冀中南一年两熟。",
  },
  {
    icon: ShieldIcon,
    title: "引种备案规范",
    text: "自有品种自主试验报审，引进品种全部完成河北引种备案，种植区域与审定信息如实标注。",
  },
  {
    icon: LabIcon,
    title: "配套栽培方案",
    text: "每个品种配一份冀中南本地化栽培要点，关键生育期下田指导，让好品种种出好收成。",
  },
  {
    icon: FieldIcon,
    title: "一年两熟方案",
    text: "早熟小麦衔接夏播玉米，从品种搭配到播期衔接给出整套方案，把两季光温资源用足。",
  },
];

const HomePage: NextPage<HomeProps> = ({ featured, news }) => {
  return (
    <Layout
      title={`${site.name} - ${site.slogan}｜冀中南玉米小麦良种`}
      description={site.description}
      absoluteTitle
      image="/images/hero/hero-field.jpg"
    >
      {/* ================= Hero ================= */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={asset("/images/hero/hero-field.jpg")}
            alt="冀中南高标准农田航拍"
            width={2000}
            height={855}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-seed-950/85 via-seed-900/60 to-seed-900/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-seed-950/70 via-transparent to-seed-950/20" />
        </div>

        <div className="container-page flex min-h-[540px] flex-col justify-center py-20 sm:min-h-[600px] lg:min-h-[660px]">
          <div className="max-w-2xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-wheat-300" aria-hidden="true" />
              国家级育繁推一体化种子企业
            </p>

            <h1 className="mt-6 text-[2.15rem] font-semibold leading-[1.2] tracking-tight text-white text-shadow-hero sm:text-5xl lg:text-[3.4rem]">
              一粒好种<span className="text-wheat-300">，</span>
              <br className="sm:hidden" />
              一季好收
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              {site.name}专注特色玉米与优质小麦的选育、引种备案与推广。
              五紫系列玉米 + 引种备案品种，适配河北中南部一年两熟种植模式。
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/varieties" className="btn-light group">
                浏览品种中心
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15"
              >
                获取品种手册
              </Link>
            </div>
          </div>

          {/* 数据条 */}
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:mt-16 lg:mt-20 lg:grid-cols-4 lg:gap-x-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-6 w-6 shrink-0 text-wheat-300" />
                <div>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-semibold leading-none text-white sm:text-[1.7rem]">
                    {s.value}
                  </dd>
                  <dd className="mt-1.5 text-[11px] leading-tight text-white/60 sm:text-xs">
                    {s.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= 品种推荐 ================= */}
      <section className="container-page py-16 sm:py-20 lg:py-24" aria-labelledby="featured-varieties">
        <SectionHeading
          eyebrow="品种中心"
          title="主推品种"
          description="按生态区筛选，每一个品种都经过多年多点试验。查看生育期、审定编号、适宜区域与栽培要点。"
          action={
            <Link
              href="/varieties"
              className="btn-ghost group !px-5 !py-2.5"
            >
              全部品种
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featured.map((v, i) => (
            <VarietyCard key={v.slug} variety={v} priority={i === 0} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-line bg-white/60 px-5 py-4 text-xs text-ink/55">
          <span className="font-semibold text-ink/70">按作物查找：</span>
          {["玉米", "小麦"].map((c) => (
            <Link
              key={c}
              href={`/varieties?crop=${encodeURIComponent(c)}`}
              className="rounded-full border border-line px-3 py-1 transition-colors hover:border-seed-300 hover:text-seed-700"
            >
              {c}品种
            </Link>
          ))}
          <span className="ml-auto hidden sm:inline">品种信息以审定公告为准</span>
        </div>
      </section>

      {/* ================= 公司介绍 ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="about-home">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={asset("/images/about/company.jpg")}
                alt="江山科技科研人员在田间观察玉米长势"
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-56 rounded-2xl border border-line bg-cream p-5 shadow-soft sm:block lg:-right-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-seed-600">
                自主品系
              </p>
              <p className="mt-2 text-3xl font-semibold text-ink">5 紫</p>
              <p className="mt-1 text-xs leading-5 text-ink/55">
                根紫、秆紫、叶鞘紫、花丝紫、苞叶紫，自有特色玉米品系
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="关于江山"
              title="十三年，只做一件事：把种子做好"
              description="从石家庄栾城的一家种子站起步，到今天集选育、引种备案、加工、推广于一体，我们始终围绕一个朴素的目标——让冀中南的种植户少走弯路。"
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "自有五紫特色玉米品系",
                "8 个主推品种（6 玉米 2 小麦）",
                "引种备案品种手续齐全",
                "冀中南一年两熟配套方案",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-seed-600" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/about" className="btn-primary group">
                了解公司介绍
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 为什么选择我们 ================= */}
      <section className="container-page py-16 sm:py-20 lg:py-24" aria-labelledby="advantages">
        <SectionHeading
          align="center"
          eyebrow="我们的坚持"
          title="从一粒种子，到一季收成"
          description="育种、制种、加工、服务，四个环节都由我们自己盯到底。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              className="relative rounded-2xl border border-line bg-white p-6 transition-colors hover:border-seed-200"
            >
              <span className="absolute right-5 top-5 text-xs font-semibold text-ink/15">
                0{i + 1}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-seed-50 text-seed-700">
                <a.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">{a.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-ink/60">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 新闻 ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="news-home">
        <div className="container-page">
          <SectionHeading
            eyebrow="新闻资讯"
            title="田间地头的近况"
            description="品种观摩、丰收测产、技术服务与公司动态。"
            action={
              <Link href="/news" className="btn-ghost group !px-5 !py-2.5">
                全部新闻
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {news.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 联系 CTA ================= */}
      <section className="container-page pb-4">
        <div className="relative isolate overflow-hidden rounded-3xl bg-seed-800 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="grain-bg absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wheat-300">
                选种咨询
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                不确定种哪个品种？把地块情况告诉我们
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                提供所在县区、前茬作物与灌溉条件，农技顾问会在 1 个工作日内给出 2–3 个适配品种建议。
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={site.phoneHref} className="btn-light w-full sm:w-auto">
                拨打 {site.phone}
              </a>
              <Link
                href="/contact"
                className="btn w-full border border-white/30 text-white hover:bg-white/10 sm:w-auto"
              >
                在线留言
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      featured: varieties.filter((v) => v.featured),
      news: getAllNews().slice(0, 3),
    },
  };
};

export default HomePage;
