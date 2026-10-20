import fs from "node:fs";
import path from "node:path";

/**
 * 构建后生成 sitemap.xml 与 robots.txt。
 * 直接扫描 out/ 下生成的 HTML 文件，新增页面无需改动脚本。
 *
 * 环境变量：
 *   NEXT_PUBLIC_SITE_URL  站点完整地址（含子路径），如 https://lc789maize.github.io/jiangshan-seed
 * 说明：basePath 由 next.config.ts 应用，导出目录中页面路径不含 basePath，
 *      因此这里统一拼上 SITE_URL（其本身已包含子路径）。
 */
const OUT_DIR = path.join(process.cwd(), "out");
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://lc789maize.github.io/jiangshan-seed").replace(/\/$/, "");

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next" || entry.name.startsWith(".")) continue;
      walk(full, acc);
    } else if (entry.name.endsWith(".html")) {
      acc.push(full);
    }
  }
  return acc;
}

function toRoute(file: string): string | null {
  let rel = path.relative(OUT_DIR, file).replace(/\\/g, "/");
  rel = rel.replace(/index\.html$/, "");
  rel = rel.replace(/\.html$/, "");
  if (rel === "404" || rel.startsWith("404/")) return null;
  return rel === "" ? "/" : `/${rel}`;
}

type Entry = { loc: string; priority: string; changefreq: string; lastmod?: string };

function priorityFor(route: string): { priority: string; changefreq: string } {
  if (route === "/") return { priority: "1.0", changefreq: "weekly" };
  if (route === "/varieties/" || route === "/varieties") return { priority: "0.9", changefreq: "weekly" };
  if (route.startsWith("/varieties/")) return { priority: "0.8", changefreq: "monthly" };
  if (route === "/news/" || route === "/news") return { priority: "0.7", changefreq: "weekly" };
  if (route.startsWith("/news/")) return { priority: "0.6", changefreq: "yearly" };
  if (route === "/about/") return { priority: "0.7", changefreq: "monthly" };
  if (route === "/contact/") return { priority: "0.6", changefreq: "yearly" };
  return { priority: "0.4", changefreq: "yearly" };
}

function lastmodFor(htmlFile: string): string {
  const mtime = fs.statSync(htmlFile).mtime;
  return mtime.toISOString().slice(0, 10);
}

if (!fs.existsSync(OUT_DIR)) {
  console.warn("[postbuild] out/ 不存在，跳过 sitemap 生成");
  process.exit(0);
}

const htmlFiles = walk(OUT_DIR).sort();
const entries: Entry[] = [];

for (const file of htmlFiles) {
  const route = toRoute(file);
  if (!route) continue;
  if (route === "/disclaimer") continue;
  const { priority, changefreq } = priorityFor(route);
  entries.push({
    loc: `${SITE_URL}${route}`,
    priority,
    changefreq,
    lastmod: lastmodFor(file),
  });
}

// 主页固定放第一位
entries.sort((a, b) => Number(b.priority) - Number(a.priority) || a.loc.localeCompare(b.loc));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), xml, "utf8");

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(OUT_DIR, "robots.txt"), robots, "utf8");

// GitHub Pages 自定义 404
const notFoundHtml = path.join(OUT_DIR, "404.html");
if (fs.existsSync(notFoundHtml)) {
  const custom = path.join(OUT_DIR, "404", "index.html");
  if (!fs.existsSync(custom)) {
    fs.mkdirSync(path.join(OUT_DIR, "404"), { recursive: true });
    fs.copyFileSync(notFoundHtml, custom);
  }
}

console.log(`[postbuild] sitemap.xml：${entries.length} 个页面；robots.txt 已生成（${SITE_URL}）`);
