import { ReactNode } from "react";
import Seo from "./Seo";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  absoluteTitle?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  image,
  type,
  publishedTime,
  absoluteTitle,
}: LayoutProps) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        type={type}
        publishedTime={publishedTime}
        absoluteTitle={absoluteTitle}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-seed-800 focus:px-5 focus:py-2 focus:text-sm focus:text-white"
      >
        跳到主要内容
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
