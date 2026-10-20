import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { site } from "@/lib/site";

const sections = [
  {
    title: "一、信息说明",
    body: [
      `本网站由 ${site.legalName}（以下简称"本公司"）运营，用于展示公司品种信息、新闻动态与联系方式。`,
      "本站所展示的品种特征特性、产量表现、抗性等信息，依据品种审定公告、区域试验报告及公司试验数据整理，仅供种植参考。",
    ],
  },
  {
    title: "二、品种适宜区域",
    body: [
      "农作物品种具有明确的适宜种植区域。购买与种植前，请务必确认品种已通过您所在区域的审定或引种备案，并参考当地农技部门指导意见。",
      "因未按适宜区域种植、违反栽培技术规程或不可抗力（极端天气、病虫害暴发等）造成的损失，本公司不承担赔偿责任。",
    ],
  },
  {
    title: "三、产量数据",
    body: [
      "本站提及的产量数据来自区域试验或特定地块实测，实际产量受气候、土壤、水肥管理、病虫害等多种因素影响，不构成对实际产量的承诺。",
    ],
  },
  {
    title: "四、知识产权",
    body: [
      "本站文字、图片、品种名称、商标及版式设计归本公司或相应权利人所有。未经书面许可，不得复制、转载或用于商业用途。",
      "品种权受《中华人民共和国种子法》及《植物新品种保护条例》保护。",
    ],
  },
  {
    title: "五、联系我们",
    body: [
      `如对本站内容有疑问，或发现信息错误，请联系：${site.phone}，${site.email}。`,
    ],
  },
];

const DisclaimerPage: NextPage = () => {
  return (
    <Layout title="法律声明" description={`${site.name}网站法律声明：品种信息、适宜区域、产量数据与知识产权说明。`}>
      <section className="border-b border-line bg-white">
        <div className="container-page py-12 sm:py-16">
          <p className="eyebrow">
            <span className="h-px w-6 bg-wheat-400" aria-hidden="true" />
            LEGAL
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">法律声明</h1>
          <p className="mt-3 text-sm text-ink/50">最近更新：2026 年 10 月</p>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p) => (
                  <p key={p} className="text-sm leading-7 text-ink/65">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default DisclaimerPage;
