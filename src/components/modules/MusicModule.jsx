import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicModule({ config, theme }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!config.music?.enabled || !config.music?.url) return undefined;
    const element = new Audio(config.music.url);
    element.loop = true;
    audioRef.current = element;
    return () => {
      element.pause();
      audioRef.current = null;
    };
  }, [config.music?.enabled, config.music?.url]);

  if (!config.music?.enabled || !config.music?.url) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    await audio.play();
    setPlaying(true);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition hover:scale-105"
      style={{ background: theme.primary, color: "white" }}
      aria-label={playing ? "Pausar musica" : "Reproducir musica"}
      title={playing ? "Pausar musica" : "Reproducir musica"}
    >
      {playing ? <Pause size={22} /> : <Play size={22} />}
    </button>
  );
}
