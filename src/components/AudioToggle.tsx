import { useState, useRef, useEffect } from "react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/ambient-drift.wav");
    audio.loop = true;
    audio.volume = 0.28; // soothing ambient background level
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay policy or error
        setIsPlaying(false);
      });
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono backdrop-blur-md transition-all hover:border-brand-lime hover:bg-white/[0.08]"
    >
      <div className="flex items-end gap-[2px] h-3">
        <span
          className={`w-[2px] bg-brand-lime rounded-full transition-all ${
            isPlaying ? "h-3 animate-pulse" : "h-1 opacity-40"
          }`}
          style={{ animationDuration: "0.6s" }}
        />
        <span
          className={`w-[2px] bg-brand-lime rounded-full transition-all ${
            isPlaying ? "h-2.5 animate-pulse" : "h-1 opacity-40"
          }`}
          style={{ animationDuration: "0.9s", animationDelay: "0.15s" }}
        />
        <span
          className={`w-[2px] bg-brand-lime rounded-full transition-all ${
            isPlaying ? "h-3.5 animate-pulse" : "h-1 opacity-40"
          }`}
          style={{ animationDuration: "0.75s", animationDelay: "0.3s" }}
        />
      </div>

      <span className="hidden sm:inline text-white/60 group-hover:text-white transition-colors text-[11px] uppercase tracking-wider font-bold">
        {isPlaying ? "Ambient On" : "Sound"}
      </span>
    </button>
  );
}
