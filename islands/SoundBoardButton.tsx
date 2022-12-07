import { useEffect, useState } from "preact/hooks";
import { Howl } from "howler";

export default function SoundClipButton({ src, name }: SoundClip) {
    const [audio, setAudio] = useState<Howl>();
    const [audioLoaded, setAudioLoaded] = useState(false);

    useEffect(() => {
        const audioClip = new Howl({
            src: location.href + src.slice(2),
            autoplay: false,
            preload: true,
            onload: () => { if (!audioLoaded) { setAudioLoaded(true); } },
            volume: 1.0
          });

        setAudio(audioClip)
      }, [])

    function playAudio(event: MouseEvent) {
        event.preventDefault();
        
        if (event.target) {
          (event.target as HTMLButtonElement).focus()
        }

        if (!audio) return
        audio.stop();
        audio.play();
    }

    function loadedClassed() {
        if (audioLoaded) {
          return "dark:bg-dark-grey bg-white dark:hover:bg-light-grey-dark hover:bg-lightest-grey hover:border-lightest-grey"
        } else {
          return "dark:bg-soft-grey bg-lightest-grey border-lightest-grey cursor-default"
        }
    }

    return (
        <button 
        disabled={!audioLoaded}
        onClick={playAudio}
        className={`
          w-40 h-28 rounded-md
          border shadow-sm
          dark:text-soft-white dark:border-soft-cyan dark:focus:bg-dark-teal
          dark:hover:border-soft-cyan
          text-black p-3.5 button
          text-center break-words overflow-y-hidden
          border-white focus:bg-lightest-grey focus:border-lightest-grey focus:outline-none
          ${loadedClassed()}
        `}
        >
            { name }
        </button>
    );
}