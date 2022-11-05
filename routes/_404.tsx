import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <div class="w-11/12 mx-auto h-[100vh] bg-dark-black flex justify-center flex-col">
      <div class="text-center">
        <h1 class="m-auto text-2xl">404 not found: {url.pathname}</h1>
        <h1 class="mt-2">Click <a href="/" class="underline hover:text-soft-cyan">here</a> to head to the home page</h1>
      </div>
    </div>
  );
}