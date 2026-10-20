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
  { year: "2013", title: "起步", text: "在石家庄栾城区成立种子经营部，代理销售玉米、小麦种子。" },
  { year: "2016", title: "扎根冀中南", text: "服务范围覆盖石家庄、邢台、邯郸，建立稳定的乡镇经销网络。" },
  { year: "2019", title: "自有品系", text: "启动五紫特色玉米品系选育，形成根紫、秆紫、叶鞘紫、花丝紫、苞叶紫的稳定材料。" },
  { year: "2022", title: "引种备案", text: "陆续完成民泰 1T、鲁单系列等品种的河北引种备案，品种结构进一步完善。" },
  { year: "2024", title: "五紫成系列", text: "良纯七八九、紫竹竿、五紫战神形成粮用、青贮、升级款三条产品线。" },
  { year: "2026", title: "一年两熟方案", text: "推出早顿麦衔接夏播玉米的整套轮作方案，把冀中南光温资源用足。" },
];

const team = [
  { name: "五紫特色玉米品系", text: "自主选育的五紫系列，根、秆、叶鞘、花丝、苞叶五紫齐全，抗倒耐密，是公司粮用与青贮产品线的基础。" },
  { name: "引种备案", text: "民泰 1T、鲁单 221、鲁单 226 等品种已完成河北引种备案，审定区域、备案编号均如实标注。" },
  { name: "一年两熟配套", text: "早顿麦早熟腾茬，衔接良纯七八九、紫竹竿等夏播玉米，形成适配冀中南的完整轮作方案。" },
];

const AboutPage: NextPage = () => {
  return (
    <Layout
      title="公司介绍"
      description={`${site.name}位于石家庄栾城区，专注特色玉米、优质小麦的选育、引种备案、种子加工与推广，适配河北中南部一年两熟种植模式。`}
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
              十三年，只做一件事：
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
                河北江山生物科技基地位于石家庄市栾城区，专注特色玉米与优质小麦的选育、
                引种备案、种子加工与推广。公司现有 8 个主推品种，其中 6 个玉米、2 个小麦，
                适配河北中南部大田一年两熟种植模式。
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
                ["8", "主推品种"],
                ["5 紫", "自有玉米品系"],
                ["2", "早熟小麦品种"],
                ["1 年", "两熟方案"],
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
                alt="玉米品种田间观察与考种"
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
                我们有 8 个主推品种，覆盖粮用玉米、青贮玉米与早熟小麦。按作物筛选，或直接联系我们。
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
