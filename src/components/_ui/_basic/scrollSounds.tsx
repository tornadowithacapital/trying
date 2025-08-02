"use client";
import { useEffect, useRef } from "react";

const PlayOnScroll = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlaying = useRef(false);
  const scrollTimeout = useRef<any>(null);
  const canPlay = useRef(true);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.5;

    const handleScroll = () => {
      if (!audioRef.current) return;

      if (canPlay.current && audioRef.current.paused) {
        canPlay.current = false;

        setTimeout(() => {
          if (!audioRef.current) return;
          audioRef.current
            .play()
            .then(() => {
              if (!audioRef.current) return;

              isPlaying.current = true;
              audioRef.current.onended = () => {
                isPlaying.current = false;
              };
            })
            .catch((err) => console.warn("Playback error:", err));
        }, 500);
      }

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        canPlay.current = true;
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music/scroll.mp3" preload="auto" />
    </>
  );
};

export default PlayOnScroll;
