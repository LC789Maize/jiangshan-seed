import type { NextConfig } from "next";

/**
 * 静态导出，便于部署到 GitHub Pages / Gitee / 对象存储 / 任意 CDN。
 * GitHub Pages 项目站点需要子路径时，构建前设置：
 *   NEXT_PUBLIC_BASE_PATH=/仓库名
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
