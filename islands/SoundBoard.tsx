import { useState } from "preact/hooks";
import SoundBoardButton from "@/islands/SoundBoardButton.tsx";
import SearchIcon from "@/components/SearchIcon.tsx";

export type SoundBoardProps = {
  soundClips: SoundClip[];
  soundClipDirs: string[];
};

export function filterByClipSource(
  soundClips: preact.JSX.Element[],
  directories: string[],
): preact.JSX.Element[] {
  if (directories.length < 1) return soundClips;

  return soundClips.filter((clip: preact.JSX.Element) => {
    // a/b/c => "abc"
    const processedSrc: string = clip.props.src.replaceAll("/", "");

    // "[abc, 1234]".find("abc" => xyzabc)
    const found = directories.find((dir) => processedSrc.includes(dir));

    if (found) return clip;
  });
}

export function filterByClipName(
  soundClips: preact.JSX.Element[],
  searchQuery: string,
): preact.JSX.Element[] {
  if (searchQuery) {
    return soundClips.filter((clip: preact.JSX.Element) => {
      return clip.props.name.search(searchQuery) >= 0;
    });
  } else {
    return soundClips;
  }
}

export default function SoundBoard(
  { soundClips, soundClipDirs }: SoundBoardProps,
) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDirs, setSelectedDirs] = useState(new Array<string>());

  const soundClipElements = soundClips.map((soundClip: SoundClip) => {
    return (
      <SoundBoardButton
        src={soundClip.src}
        name={soundClip.name}
        key={soundClip.src}
      />
    );
  });

  function filteredSoundClipElements() {
    const filteredByDirectories = filterByClipSource(
      soundClipElements,
      selectedDirs,
    );
    const filteredBySearchQuery = filterByClipName(
      filteredByDirectories,
      searchQuery,
    );

    return filteredBySearchQuery;
  }

  function directorySelected(checked: boolean, dir: string) {
    if (checked) {
      setSelectedDirs([...selectedDirs, dir]);
    } else {
      setSelectedDirs(selectedDirs.filter((selDir) => selDir != dir));
    }
  }

  return (
    <div>
      <div class="sticky top-0 h-36 dark:bg-dark-black bg-light-pink flex flex-col pt-6">
        <label class="w-full relative block mx-auto">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon />
          </span>
          <span class="sr-only">Search</span>
          <input
            class="
              w-full block
              placeholder:italic placeholder:soft-grey
              focus:outline-none focus:shadow dark:focus:border-teal
              active:outline-none active:shadow dark:active:border-teal
              dark:bg-dark-grey dark:border-soft-cyan dark:text-soft-white
              bg-white text-black border border-white rounded-md
              py-2 pl-9 pr-3 sm:text-sm"
            onInput={(event) =>
              setSearchQuery((event.target as HTMLInputElement).value)}
            placeholder="Search..."
            type="search"
            name="search"
          />
        </label>

        <div class="pl-2 flex flex-row flex-wrap overflow-y-scroll">
          {soundClipDirs.map((dir) => {
            return (
              <label
                class="flex mr-2 mt-2"
                onChange={(event: Event) =>
                  directorySelected(
                    (event.target as HTMLInputElement).checked,
                    dir,
                  )}
              >
                <span class="my-auto align-center mr-1">{dir}</span>
                <input
                  type="checkbox"
                  name="checkbox"
                  class="my-auto h-4 w-4"
                />
              </label>
            );
          })}
        </div>
      </div>
      <div class="
                w-full mx-auto min-h-[calc(100vh-var(--header-height))]
                dark:bg-dark-black bg-light-pink justify-center mb-32 mt-2
                grid gap-4 auto-rows-min grid-cols-soundboard">
        {filteredSoundClipElements()}
      </div>
    </div>
  );
}
