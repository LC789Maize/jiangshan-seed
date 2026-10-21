import type { NextPage, GetStaticProps } from "next";
import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { NewsCard } from "@/components/NewsCard";
import { getAllNews, type NewsItem } from "@/lib/news";
import { site } from "@/lib/site";

interface Props {
  news: NewsItem[];
}

const NewsPage: NextPage<Props> = ({ news }) => {
  const categories = useMemo(
    () => ["全部", ...Array.from(new Set(news.map((n) => n.category)))],
    [news]
  );
  const [cat, setCat] = useState("全部");
  const list = cat === "全部" ? news : news.filter((n) => n.category === cat);

  return (
    <Layout
      title="新闻资讯"
      description={`${site.name}新闻资讯：品种审定、田间观摩、丰收测产、农技服务与公司动态。`}
      image="/images/news/news-harvest.webp"
    >
      <section className="border-b border-line bg-gradient-to-b from-white to-seed-50/70">
        <div className="container-page py-12 sm:py-16">
          <p className="eyebrow">
            <span className="h-px w-6 bg-wheat-400" aria-hidden="true" />
            NEWS
          </p>
          <div className="mt-5 max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">新闻资讯</h1>
            <p className="mt-3 text-sm leading-7 text-ink/60 sm:text-base">
              品种观摩、丰收测产、技术服务与公司动态，记录田间的每一步。
            </p>
          </div>
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  cat === c
                    ? "border-seed-700 bg-seed-700 text-white"
                    : "border-line bg-white text-ink/65 hover:border-seed-300 hover:text-seed-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { news: getAllNews() } };
};

export default NewsPage;
