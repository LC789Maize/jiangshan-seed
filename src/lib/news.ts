import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  cover: string;
  author?: string;
  content?: string;
}

const newsDir = path.join(process.cwd(), "content/news");

export function getNewsSlugs(): string[] {
  return fs
    .readdirSync(newsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllNews(): NewsItem[] {
  const items = getNewsSlugs().map((slug) => {
    const raw = fs.readFileSync(path.join(newsDir, `${slug}.md`), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      summary: data.summary as string,
      date: data.date as string,
      category: data.category as string,
      cover: data.cover as string,
      author: (data.author as string) || "青禾种业",
    };
  });
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNews(slug: string): Promise<NewsItem> {
  const raw = fs.readFileSync(path.join(newsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title as string,
    summary: data.summary as string,
    date: data.date as string,
    category: data.category as string,
    cover: data.cover as string,
    author: (data.author as string) || "青禾种业",
    content: processed.toString(),
  };
}
