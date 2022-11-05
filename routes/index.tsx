import { SoundBoardFooter } from "@/components/SoundBoardFooter.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import SoundBoard from "@/islands/SoundBoard.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<SoundClip[]> = {
  async GET(_, ctx) {
    const soundClips = await soundClipPaths("./static/sound-clips")
    return ctx.render(soundClips);
  },
};

async function soundClipPaths(currentPath: string): Promise<SoundClip[]> {
  const soundClips: SoundClip[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
      const dirEntryName = dirEntry.name;
      const entryPath = `${currentPath}/${dirEntry.name}`;

      if (dirEntry.isFile && dirEntryName.endsWith(".mp3")) {
          const clipNameWithoutExtension = dirEntryName.slice(0, -4);
          const clipPathWithoutStaticDir = "./" + entryPath.slice(9)

          soundClips.push({ src: clipPathWithoutStaticDir, name: clipNameWithoutExtension })
      }

      if (dirEntry.isDirectory) {
        soundClips.push(...await soundClipPaths(entryPath));
      }
  }

  return soundClips
}

export default function Home({ data }: PageProps<SoundClip[]>) {
  

  return (
    <div class="flex flex-start flex-col">
      <HeadElement
        description="A custom sound board"
        title="Custom Sound Board"
        url={new URL("https://www.custom-sound-board.com")}
       />
      <SoundBoard soundClips={data} />
      <SoundBoardFooter />
    </div>
  );
}
