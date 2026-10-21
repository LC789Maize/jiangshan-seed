import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { NewsCard } from "@/components/NewsCard";
import { getAllNews, getNews, getNewsSlugs, type NewsItem } from "@/lib/news";
import { formatDate } from "@/lib/format";
import { site, asset } from "@/lib/site";

interface Props {
  item: NewsItem;
  related: NewsItem[];
}

const NewsDetailPage: NextPage<Props> = ({ item, related }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    image: [`${site.url}${item.cover}`],
    datePublished: item.date,
    dateModified: item.date,
    inLanguage: "zh-CN",
    author: { "@type": "Organization", name: item.author || site.name },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/news/${item.slug}/` },
  };

  return (
    <Layout
      title={item.title}
      description={item.summary}
      image={item.cover}
      type="article"
      publishedTime={item.date}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="面包屑" className="border-b border-line bg-white">
        <div className="container-page flex items-center gap-2 py-4 text-xs text-ink/50">
          <Link href="/" className="hover:text-seed-700">
            首页
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/news" className="hover:text-seed-700">
            新闻资讯
          </Link>
          <span aria-hidden="true">/</span>
          <span className="truncate text-ink/80">{item.title}</span>
        </div>
      </nav>

      <article className="bg-white">
        <header className="container-page pt-10 sm:pt-14">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full bg-seed-50 px-3 py-1 text-xs font-semibold text-seed-700">
              {item.category}
            </span>
            <h1 className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-[2.4rem] lg:leading-[1.25]">
              {item.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line pb-6 text-xs text-ink/45">
              <time dateTime={item.date}>{formatDate(item.date)}</time>
              <span>来源：{item.author || site.name}</span>
            </div>
          </div>
        </header>

        <div className="container-page">
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-line shadow-card">
            <img
              src={asset(item.cover)}
              alt={item.title}
              width={1200}
              height={675}
              className="w-full object-cover"
            />
          </div>

          <div
            className="article-body mx-auto mt-8 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: item.content || "" }}
          />

          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-line bg-cream/60 p-5 text-xs leading-6 text-ink/55">
            本文内容由 {site.name} 整理发布，品种与农事建议请结合当地实际条件。
            咨询电话：<a href={site.phoneHref} className="font-semibold text-seed-700">{site.phone}</a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-seed-700 hover:text-seed-600"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M13 8H4M7.5 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              返回新闻列表
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-page pt-16">
          <h2 className="text-xl font-semibold sm:text-2xl">相关阅读</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {related.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getNewsSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  try {
    const item = await getNews(slug);
    const related = getAllNews()
      .filter((n) => n.slug !== slug)
      .slice(0, 3);
    return { props: { item, related } };
  } catch {
    return { notFound: true };
  }
};

export default NewsDetailPage;
