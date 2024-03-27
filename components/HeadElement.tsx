import { Head } from "$fresh/runtime.ts";

export function HeadElement() {
  return (
    <Head>
      {/* Essential META Tags */}
      <meta property="og:title" content="Custom Sound Board" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.custom-sound-board.com/site-screenshot.webp"
      />
      <meta property="og:url" content="https://www.custom-sound-board.com/" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Non-Essential, But Recommended */}
      <meta
        property="og:description"
        content="A custom sound board to play your favourite sounds"
      />
      <meta property="og:site_name" content="Custom Sound Board" />
      <meta
        name="twitter:image"
        content="https://www.custom-sound-board.com/site-screenshot.webp"
      />
      <meta
        name="twitter:image:alt"
        content="Screenshot of the custom sound board website"
      />
      <meta name="twitter:title" content="Custom Sound Board" />
      <meta name="twitter:creator" content="@jameswattnz"></meta>
    </Head>
  );
}
