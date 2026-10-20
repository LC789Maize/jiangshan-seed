import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="页面不存在" description="您访问的页面不存在或已移动。">
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-seed-600">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">这块地还没种上东西</h1>
        <p className="mt-3 max-w-md text-sm leading-7 text-ink/60">
          您访问的页面不存在或已移动。可以回到首页，或直接去品种中心看看。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            返回首页
          </Link>
          <Link href="/varieties" className="btn-ghost">
            品种中心
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
