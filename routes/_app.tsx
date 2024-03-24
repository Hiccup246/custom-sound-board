import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <title>Custom Sound Board</title>
        <meta
          name="description"
          content="A custom sound board to play your favourite sounds"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Custom sound board, soundboard, sound board, sound clip player"
        />
        <meta name="author" content="James Watt" />
        <link rel="canonical" href="https://www.custom-sound-board.com/" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href="https://www.custom-sound-board.com/" rel="publisher" />
        <link rel="stylesheet" href="./styles.css" />
        <script src="/themeLoader.js"></script>
      </head>
      <body class="dark:bg-dark-black dark:text-white bg-light-pink text-black">
        <div class="w-11/12 mx-auto">
          <Component />
        </div>
      </body>
    </html>
  );
}
