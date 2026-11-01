import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={() => setIsPlaying((p) => !p)}
        className={`group flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-mono transition-all cursor-pointer ${
          isPlaying
            ? "border-[#1db954] bg-[#1db954]/15 text-[#1db954] shadow-[0_0_15px_rgba(29,185,84,0.3)]"
            : "border-white/15 bg-white/5 text-white/80 hover:border-[#1db954] hover:text-white hover:bg-white/10"
        }`}
      >
        {/* Official Spotify Icon */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg"
          alt="Spotify"
          className="w-4 h-4 object-contain"
        />

        {/* Live Audio Equalizer Waves */}
        <div className="flex items-end gap-[2px] h-3">
          <span
            className={`w-[2px] rounded-full transition-all ${
              isPlaying ? "h-3 bg-[#1db954] animate-pulse" : "h-1.5 bg-white/40"
            }`}
            style={{ animationDuration: "0.6s" }}
          />
          <span
            className={`w-[2px] rounded-full transition-all ${
              isPlaying ? "h-2 bg-[#1db954] animate-pulse" : "h-1 bg-white/40"
            }`}
            style={{ animationDuration: "0.9s", animationDelay: "0.15s" }}
          />
          <span
            className={`w-[2px] rounded-full transition-all ${
              isPlaying ? "h-3.5 bg-[#1db954] animate-pulse" : "h-2 bg-white/40"
            }`}
            style={{ animationDuration: "0.75s", animationDelay: "0.3s" }}
          />
        </div>

        <span className="font-bold uppercase tracking-wider">
          {isPlaying ? "Playing Track" : "Play Featured Song"}
        </span>

        <span className="text-[10px] text-white/50 hidden sm:inline">
          • Die With A Smile
        </span>
      </button>

      {/* Direct Player Stream (Mounts & Plays Directly on Click) */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-full max-w-sm pt-1 overflow-hidden"
          >
            <div className="rounded-xl overflow-hidden border border-[#1db954]/40 shadow-2xl bg-black">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/76BCdlzWPijEvCyi70tOwe?utm_source=generator&theme=0&autoplay=1"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="eager"
                title="Die With A Smile - Lady Gaga & Bruno Mars"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}