import { Head } from "$fresh/runtime.ts";

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
};

export function HeadElement({ description, image, title, url }: HeadProps) {
    return (
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* SEO */}
        <link rel="canonical" href={url.toString()} />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
        <meta name="author" content="James. Watt" />
        <meta name="keywords" content="soundboard, custom sound board, custom soundboard" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        
        {/* Favicon Meta Tags */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
  
        {/* Facebook Meta Tags */}
        <meta property="og:url" content={url.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
  
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url.hostname} />
        <meta property="twitter:url" content={url.href} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
    );
}