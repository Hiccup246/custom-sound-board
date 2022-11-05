import GitHubIcon from "@/components/GitHubIcon.tsx";
import FreshIcon from "@/components/FreshIcon.tsx";

export function SoundBoardFooter() {
    return (
        <footer class="w-11/12 mx-auto bg-dark-black flex flex-wrap mb-2 justify-center">
            <a href="https://fresh.deno.dev" class="my-auto w-52 flex place-content-center hover:underline">
                <FreshIcon/><p class="my-auto mr-5">Made with <b>Fresh</b></p>
            </a>

            <a
            class="hover:underline flex gap-2 items-center text-white my-auto w-52 place-content-center"
            href="https://github.com/Hiccup246/sound-board"
            >
                <GitHubIcon class="h-5 w-5 text-gray-500" />
                Source
            </a>
        </footer>
    );
}