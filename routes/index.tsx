import { SoundBoardFooter } from "@/components/SoundBoardFooter.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import SoundBoard from "@/islands/SoundBoard.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<{ soundClips: SoundClip[], soundClipDirs: string[]}> = {
  async GET(_, ctx) {
    const soundClips = await soundClipPaths("./static/sound-clips");
    const soundClipDirs = await soundClipDirectories("./static/sound-clips");
    return ctx.render({ soundClips, soundClipDirs });
  },
};

export async function soundClipPaths(currentPath: string): Promise<SoundClip[]> {
  const soundClips: SoundClip[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
      const dirEntryName = dirEntry.name;
      const entryPath = `${currentPath}/${dirEntry.name}`;

      if (dirEntry.isFile && dirEntryName.endsWith(".mp3")) {
          const clipNameWithoutExtension = dirEntryName.slice(0, -4);
          const endOfFirstDirectory = entryPath.indexOf("/", 2)
          const clipPathWithoutStaticDir = "." + entryPath.slice(endOfFirstDirectory)

          soundClips.push({ src: clipPathWithoutStaticDir, name: clipNameWithoutExtension })
      }

      if (dirEntry.isDirectory) {
        soundClips.push(...await soundClipPaths(entryPath));
      }
  }

  return soundClips
}

export async function soundClipDirectories(currentPath: string): Promise<string[]> {
  const soundClipDirs: string[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
      const dirEntryName = dirEntry.name;
      const entryPath = `${currentPath}/${dirEntry.name}`;

      if (dirEntry.isDirectory) {
        soundClipDirs.push(dirEntryName);
        soundClipDirs.push(...await soundClipDirectories(entryPath));
      }
  }

  return soundClipDirs
}

export default function Home({ data }: PageProps<{ soundClips: SoundClip[], soundClipDirs: string[] }>) {
  return (
    <div class="flex flex-start flex-col">
      <HeadElement />
      <SoundBoard soundClips={data.soundClips} soundClipDirs={data.soundClipDirs} />
      <SoundBoardFooter />
    </div>
  );
}
