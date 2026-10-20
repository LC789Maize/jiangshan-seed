/**
 * 站点全局配置：改这里即可换公司名、电话、地址、域名。
 */
export const site = {
  name: "江山科技",
  legalName: "江山生物科技有限公司",
  slogan: "一粒好种，一季好收",
  description:
    "江山科技专注玉米、小麦、水稻、大豆等农作物优良品种的选育、繁育与推广，为种植户提供适配不同生态区的品种与配套栽培方案。",
  // CI 构建时会注入 NEXT_PUBLIC_SITE_URL；本地开发用下面这个占位值。
  // 仓库改名后无需改这里，GitHub Actions 会自动按新仓库名注入。
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lc789maize.github.io/jiangshan-seed",
  phone: "400-800-0000",
  phoneHref: "tel:4008000000",
  mobile: "138-0000-0000",
  email: "bbw8000000@gmail.com",
  address: "石家庄市栾城区裕翔街165号（未来科技城2区13号楼20B01栋)",
  postcode: "250100",
  workTime: "周一至周六 8:30–17:30",
  icp: "鲁ICP备00000000号-1",
  founded: "2008",
  keywords: [
    "种业公司",
    "玉米种子",
    "小麦种子",
    "水稻种子",
    "大豆种子",
    "优良品种",
    "江山科技",
  ],
};

export const nav = [
  { name: "首页", href: "/" },
  { name: "公司介绍", href: "/about" },
  { name: "品种中心", href: "/varieties" },
  { name: "新闻资讯", href: "/news" },
  { name: "联系我们", href: "/contact" },
];

/** 静态导出子路径（GitHub Pages 项目站点）下给 public 资源加前缀 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${clean}`;
}
