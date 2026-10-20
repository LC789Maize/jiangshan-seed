import Head from "next/head";
import { useRouter } from "next/router";
import { site, asset } from "@/lib/site";

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** 传 true 时标题不加站名后缀（首页） */
  absoluteTitle?: boolean;
}

const ORG_ID = `${site.url}/#organization`;

export default function Seo({
  title,
  description = site.description,
  image = "/images/hero/hero-field.jpg",
  type = "website",
  publishedTime,
  absoluteTitle = false,
}: SeoProps) {
  const router = useRouter();
  const fullTitle = absoluteTitle ? title : `${title} - ${site.name}`;
  const path = (router.asPath || "/").split("?")[0].split("#")[0];
  const canonical = `${site.url}${path === "/" ? "/" : path}`;
  const ogImage = image.startsWith("http") ? image : `${site.url}${image}`;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/brand/logo.png`,
    foundingDate: site.founded,
    slogan: site.slogan,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "CN",
      postalCode: site.postcode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "CN",
      availableLanguage: ["zh-CN"],
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "zh-CN",
    publisher: { "@id": ORG_ID },
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={site.keywords.join(",")} />
      <meta name="author" content={site.legalName} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="zh_CN" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href={asset("/favicon.svg")} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={asset("/images/brand/logo.png")} />
      <meta name="theme-color" content="#33582f" />
      <meta name="format-detection" content="telephone=no" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </Head>
  );
}
