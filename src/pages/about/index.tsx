import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon, CheckIcon, FieldIcon, LabIcon, ShieldIcon, SproutIcon } from "@/components/Icons";
import { site, asset } from "@/lib/site";

const values = [
  {
    icon: SproutIcon,
    title: "以品种说话",
    text: "不夸大、不承诺做不到的产量。所有宣传数据来自区域试验与实测实收，可追溯到具体年份与地块。",
  },
  {
    icon: ShieldIcon,
    title: "质量零容忍",
    text: "种子纯度、净度、发芽率、水分四项指标批批检测，不合格种子一律不出库。",
  },
  {
    icon: LabIcon,
    title: "把技术送到地头",
    text: "农技顾问常驻重点县，关键生育期下田，用种植户听得懂的话讲栽培。",
  },
  {
    icon: FieldIcon,
    title: "长期主义",
    text: "育种是慢功夫，一个品种从组合配制到审定通常需要 6–8 年。我们愿意等。",
  },
];

const milestones = [
  { year: "2008", title: "起步", text: "在山东济南成立第一家县级种子站，代理销售玉米、小麦种子。" },
  { year: "2012", title: "自育第一品种", text: "良纯麦 3 号通过省级审定，开始自主育种。" },
  { year: "2016", title: "建基地", text: "在甘肃张掖建立第一个规范化制种基地，实现制种自主可控。" },
  { year: "2019", title: "南繁加代", text: "入驻海南南繁基地，育种周期由每年一代提升至两代。" },
  { year: "2022", title: "育繁推一体化", text: "获批国家级育繁推一体化种子企业资质，品种覆盖四大作物。" },
  { year: "2025", title: "数字服务", text: "上线品种适配查询与田间服务记录系统，服务种植户超 30 万。" },
];

const team = [
  { name: "育种中心", text: "32 名科研人员，其中高级职称 11 人，负责玉米、水稻、小麦、大豆四大作物育种。" },
  { name: "制种与加工", text: "甘肃、新疆、江苏三地制种基地 4.2 万亩，配套种子加工线 3 条，年加工能力 1.2 万吨。" },
  { name: "农技服务", text: "40 余名农技顾问，覆盖黄淮海 68 个重点县，年开展田间观摩与培训 200 余场。" },
];

const AboutPage: NextPage = () => {
  return (
    <Layout
      title="公司介绍"
      description={`${site.name}成立于 ${site.founded} 年，是集育种、制种、加工、推广于一体的种业企业，主营玉米、水稻、小麦、大豆优良品种。`}
      image="/images/about/company.jpg"
    >
      {/* Hero */}
      <section className="border-b border-line bg-white">
        <div className="container-page py-14 sm:py-20">
          <p className="eyebrow">
            <span className="h-px w-6 bg-wheat-400" aria-hidden="true" />
            ABOUT US
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:col-span-7 lg:text-[2.9rem]">
              十七年，只做一件事：
              <span className="text-seed-700">把种子做好</span>
            </h1>
            <p className="text-sm leading-7 text-ink/60 sm:text-base lg:col-span-5">
              {site.legalName}成立于 {site.founded} 年，是集育种、制种、加工、推广于一体的育繁推一体化种子企业。
              我们把研发放在第一位，把质量当作底线，把服务做到田间。
            </p>
          </div>
        </div>
      </section>

      {/* 公司简介 + 图 */}
      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={asset("/images/about/company.jpg")}
              alt="江山科技科研人员在小麦田间"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">公司简介</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              <p>
                江山科技总部位于山东济南，在甘肃张掖、新疆昌吉、江苏盐城设有制种基地，
                在海南乐东建有南繁育种站。公司主营玉米、水稻、小麦、大豆四大作物种子，
                现有 26 个通过国家或省级审定的品种，累计推广面积 1800 万亩。
              </p>
              <p>
                我们相信，品种的价值最终要落到种植户的收成上。因此从组合配制开始，
                公司就把"适配性"放在首位——不追求单一试验点的高产数字，而是看多年多点、
                不同水肥条件下的稳定性。
              </p>
              <p>
                在服务上，每个主推品种都配有一份本地化栽培方案，由农技顾问在关键生育期下田指导。
                我们希望种植户买到的不只是一袋种子，而是一整季可以依赖的技术支持。
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["26", "审定品种"],
                ["1800万", "推广面积（亩）"],
                ["4.2万", "制种基地（亩）"],
                ["30万+", "服务农户"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-line bg-white px-4 py-4">
                  <dd className="text-xl font-semibold text-seed-800">{v}</dd>
                  <dt className="mt-1 text-[11px] text-ink/50">{l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="价值观"
            title="我们怎么做事"
            description="四条朴素的原则，决定了我们如何育种、如何卖种子、如何面对种植户。"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-cream/60 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-seed-700 shadow-sm">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-ink/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="container-page py-14 sm:py-20">
        <SectionHeading eyebrow="发展历程" title="一步一步走到今天" />
        <ol className="mt-10 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <li
              key={m.year}
              className="relative border-l border-line py-5 pl-6 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-6"
            >
              <span className="absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full bg-wheat-400 ring-4 ring-cream sm:first:left-[-5px]" />
              <p className="text-sm font-semibold text-wheat-600">{m.year}</p>
              <h3 className="mt-1 text-base font-semibold">{m.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-ink/60">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 团队与能力 */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="组织能力" title="育种、制种、服务，三条腿走路" />
            <p className="mt-4 text-sm leading-7 text-ink/60">
              种业是长跑。我们把资源集中在三个环节：能不能育出好品种、能不能把种子繁好、能不能把技术送到地头。
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src={asset("/images/about/research.jpg")}
                alt="种子发芽试验与育苗盘"
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-line rounded-2xl border border-line bg-cream/50">
              {team.map((t) => (
                <div key={t.name} className="flex gap-4 p-6">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-seed-600" />
                  <div>
                    <h3 className="text-base font-semibold">{t.name}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-ink/60">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-seed-800 p-6 text-white sm:p-8">
              <h3 className="text-lg font-semibold">想了解具体品种？</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                我们有 26 个审定品种，覆盖玉米、水稻、小麦、大豆。按作物筛选，或直接联系我们。
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/varieties" className="btn-light group !px-5 !py-2.5">
                  品种中心
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/30 !px-5 !py-2.5 text-white hover:bg-white/10"
                >
                  联系我们
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
