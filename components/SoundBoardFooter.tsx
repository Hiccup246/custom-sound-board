import GitHubIcon from "@/components/GitHubIcon.tsx";
import FreshIcon from "@/components/FreshIcon.tsx";
import ThemeToggle from "@/islands/ThemeToggle.tsx";

export function SoundBoardFooter() {
  return (
    <footer class="mx-auto dark:bg-dark-black bg-light-pink flex flex-wrap mb-2 justify-center">
      <a
        href="https://fresh.deno.dev"
        class="my-auto w-52 flex place-content-center hover:underline mb-1.5 sm:mb-auto"
      >
        <FreshIcon />
        <p class="my-auto mr-5">
          Made with <b>Fresh</b>
        </p>
      </a>

      <a
        class="hover:underline flex gap-2 items-center dark:text-white text-black my-auto mb-4 sm:mb-auto w-52 place-content-center"
        href="https://github.com/Hiccup246/custom-sound-board"
      >
        <GitHubIcon class="h-5 w-5 dark:text-gray-500 dark:text-white text-black" />
        Source
      </a>

      <div class="w-52 my-auto flex place-content-center mb-4 sm:mb-auto">
        <ThemeToggle />
      </div>
    </footer>
  );
}
