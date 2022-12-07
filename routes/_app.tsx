import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./app.css" />
        <script type="text/javascript">
          {`
            const themeSet = 'theme' in localStorage

            if (themeSet) {
              if (localStorage.theme == 'dark') {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } else {
              const systemHasDarkThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

              if (systemHasDarkThemePreference) {
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
              } else {
                localStorage.theme = 'light'
                document.documentElement.classList.remove('dark')
              }
            }
          `}
        </script>

        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <title>Custom Sound Board</title>
        <meta name="description" content="A custom sound board to play your favourite sounds" />
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
      </Head>
      
      <body class="dark:bg-dark-black dark:text-white bg-light-pink text-black">
        <div class="w-11/12 mx-auto">
          <Component />
        </div>
      </body>
    </>
  );
}