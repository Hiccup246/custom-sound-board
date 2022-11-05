import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./app.css" />
      </Head>
      
      <body class="bg-dark-black text-white">
        <div class="w-11/12 mx-auto">
          <Component />
        </div>
      </body>
    </>
  );
}