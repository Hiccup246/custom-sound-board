import { useState } from "preact/hooks";
import SoundBoardButton from "@/islands/SoundBoardButton.tsx";
import SearchIcon from "@/components/SearchIcon.tsx";

export type SoundBoardProps = {
    soundClips: SoundClip[];
};

export default function SoundBoard({ soundClips }: SoundBoardProps ) {
    const [searchQuery, setSearchQuery] = useState("")

    const soundClipElements = soundClips.map((soundClip: SoundClip) => {
        return (
            <SoundBoardButton src={soundClip.src} name={soundClip.name} key={soundClip.name}/>
        )
    })    

    function filteredSoundClipElements() {
        if (searchQuery) {
            return soundClipElements.filter((clip: preact.JSX.Element)=>{
            return clip.props.name.search(searchQuery) == 0
            })   
        } else {
            return soundClipElements
        }
    }

    return (
        <div>
            <div class="sticky top-0 h-24 dark:bg-dark-black bg-light-pink flex flex-col justify-center">
                <label class="w-full relative block mx-auto">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                       <SearchIcon />
                    </span>
                    <span class="sr-only">Search</span>
                    <input 
                        class="
                            w-full block
                            placeholder:italic placeholder:soft-grey
                            focus:outline-none focus:shadow
                            active:outline-none active:shadow
                            dark:bg-dark-grey dark:border-soft-cyan
                            bg-white text-black border border-white rounded-md
                            py-2 pl-9 pr-3 sm:text-sm"
                        onInput={(event) => setSearchQuery((event.target as HTMLInputElement).value)}
                        placeholder="Search..."
                        type="search"
                        name="search"
                    />
                </label>
            </div>
            <div 
                class="
                w-full mx-auto min-h-[calc(100vh-var(--header-height))]
                dark:bg-dark-black bg-light-pink justify-center mb-32 mt-2
                grid gap-4 auto-rows-min grid-cols-soundboard">
                { 
                    filteredSoundClipElements()
                }
            </div>
        </div>
    );
}