import { useEffect, useState } from "preact/hooks";
import { Howl } from "howler";

export default function SoundClipButton({ src, name }: SoundClip) {
    const [audio, setAudio] = useState<Howl>();
    const [audioLoaded, setAudioLoaded] = useState(false);

    useEffect(() => {
        const audioClip = new Howl({
            src: location.href + src.slice(2),
            onload: () => { if (!audioLoaded) { setAudioLoaded(true) } },
            volume: 1.0
          });

        setAudio(audioClip)
      }, [])

    function playAudio(event: MouseEvent) {
        event.preventDefault();

        if (!audio) return
        audio.stop();
        audio.play();
    }

    function loadedClassed() {
        if (audioLoaded) {
          return "bg-dark-grey hover:bg-light-grey-dark"
        } else {
          return "bg-soft-grey cursor-default"
        }
    }

    return (
        <button 
        disabled={!audioLoaded}
        onClick={playAudio}
        className={`
          w-40 h-28 rounded-md
          border shadow-sm
          text-soft-white p-3.5 button
          text-center break-words overflow-y-hidden
          border-soft-cyan focus:bg-dark-teal focus:outline-none
          ${loadedClassed()}
        `}
        >
            { name }
        </button>
    );
}