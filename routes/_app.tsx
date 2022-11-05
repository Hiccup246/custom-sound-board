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
      </Head>
      
      <body class="dark:bg-dark-black dark:text-white bg-light-pink text-black">
        <div class="w-11/12 mx-auto">
          <Component />
        </div>
      </body>
    </>
  );
}