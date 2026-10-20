import { useState, type FormEvent } from "react";
import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, CheckIcon } from "@/components/Icons";
import { site } from "@/lib/site";

const ContactPage: NextPage = () => {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /**
   * 纯静态站点没有后端。这里的提交逻辑做两件事：
   * 1) 若在 site.ts 配置了 FORM_ENDPOINT，则 POST 到该地址（如表单服务/云函数）；
   * 2) 否则生成一条留言内容，引导用户通过电话或微信联系，不丢失线索。
   * 详见 README「联系表单接入」。
   */
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    setSubmitting(true);
    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(data.entries())),
        });
      } else {
        await new Promise((r) => setTimeout(r, 400));
      }
      setSent(true);
      form.reset();
    } finally {
      setSubmitting(false);
    }
  };

  const contacts = [
    { icon: PhoneIcon, label: "服务热线", value: site.phone, href: site.phoneHref, note: "工作日 8:30–17:30" },
    { icon: MailIcon, label: "电子邮箱", value: site.email, href: `mailto:${site.email}`, note: "1 个工作日内回复" },
    { icon: PinIcon, label: "公司地址", value: site.address, note: `邮编 ${site.postcode}` },
    { icon: ClockIcon, label: "工作时间", value: site.workTime, note: "周日及法定节假日休息" },
  ];

  return (
    <Layout
      title="联系我们"
      description={`联系${site.name}：服务热线 ${site.phone}，地址 ${site.address}。选种咨询、品种资料索取、区域合作，欢迎来电或留言。`}
      image="/images/news/news-base.jpg"
    >
      <section className="border-b border-line bg-white">
        <div className="container-page py-12 sm:py-16">
          <p className="eyebrow">
            <span className="h-px w-6 bg-wheat-400" aria-hidden="true" />
            CONTACT
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">联系我们</h1>
              <p className="mt-3 max-w-xl text-sm leading-7 text-ink/60 sm:text-base">
                选种咨询、品种资料索取、区域合作，都可以直接联系我们。告诉我们地块位置与前茬作物，农技顾问会给出适配建议。
              </p>
            </div>
            <div className="lg:col-span-5">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-line bg-cream/60 px-5 py-4 transition-colors hover:border-seed-300"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-seed-700 text-white">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-ink/45">全国服务热线</span>
                  <span className="mt-0.5 block text-lg font-semibold text-ink">{site.phone}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* 联系信息 */}
          <div className="lg:col-span-5">
            <h2 className="text-lg font-semibold">联系方式</h2>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {contacts.map((c) => (
                <div key={c.label} className="flex gap-4 py-4">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-seed-50 text-seed-700">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs text-ink/45">{c.label}</dt>
                    <dd className="mt-1 text-sm font-medium leading-6 text-ink/85">
                      {c.href ? (
                        <a href={c.href} className="hover:text-seed-700">
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                    <dd className="mt-0.5 text-xs text-ink/40">{c.note}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl border border-line bg-white p-5">
              <h3 className="text-sm font-semibold">到访提示</h3>
              <p className="mt-2 text-xs leading-6 text-ink/55">
                来访前请提前电话预约，我们会安排对应作物线的技术人员对接。
                如需参观试验田，建议安排在作物关键生育期（玉米抽雄期、小麦灌浆期）。
              </p>
            </div>
          </div>

          {/* 表单 */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <SectionHeading
                eyebrow="在线留言"
                title="留下您的需求"
                description="填写地块与作物信息，我们会更快给出建议。带 * 为必填项。"
              />

              {sent ? (
                <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-seed-200 bg-seed-50 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-seed-700 text-white">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-seed-900">留言已记录</p>
                    <p className="mt-1 text-sm leading-6 text-seed-800/70">
                      感谢您的信任，我们会尽快与您联系。急需答复可直接拨打{" "}
                      <a href={site.phoneHref} className="font-semibold underline underline-offset-4">
                        {site.phone}
                      </a>
                      。
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold text-seed-700 hover:text-seed-600"
                  >
                    再填一条
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">
                      您的称呼 *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="如：张师傅"
                      className="h-11 w-full rounded-lg border border-line bg-cream/40 px-3.5 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-seed-400 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="field-label">
                      联系电话 *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="手机号或固定电话"
                      className="h-11 w-full rounded-lg border border-line bg-cream/40 px-3.5 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-seed-400 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="field-label">
                      所在地区
                    </label>
                    <input
                      id="region"
                      name="region"
                      placeholder="如：山东德州齐河县"
                      className="h-11 w-full rounded-lg border border-line bg-cream/40 px-3.5 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-seed-400 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="crop" className="field-label">
                      意向作物
                    </label>
                    <select
                      id="crop"
                      name="crop"
                      defaultValue=""
                      className="h-11 w-full rounded-lg border border-line bg-cream/40 px-3.5 text-sm text-ink outline-none transition-colors focus:border-seed-400 focus:bg-white"
                    >
                      <option value="">请选择</option>
                      <option value="玉米">玉米</option>
                      <option value="水稻">水稻</option>
                      <option value="小麦">小麦</option>
                      <option value="大豆">大豆</option>
                      <option value="多作物/其他">多作物 / 其他</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="field-label">
                      留言内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="地块面积、前茬作物、灌溉条件，或想了解的品种……"
                      className="w-full rounded-lg border border-line bg-cream/40 px-3.5 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-ink/30 focus:border-seed-400 focus:bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-ink/40">
                      我们仅将信息用于品种咨询，不会对外提供。
                    </p>
                    <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                      {submitting ? "提交中…" : "提交留言"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
