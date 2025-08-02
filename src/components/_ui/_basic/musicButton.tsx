"use client";
import { useEffect, useRef } from "react";
import { useAppStore } from "../../../store";

const MusicButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlay, setIsPlay } = useAppStore();

  const handleClick = () => {
    console.log("Clicked To Play");

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlay) {
      audio.pause();
      setIsPlay(false);
    } else {
      audio
        .play()
        .then(() => setIsPlay(true))
        .catch((err) => console.warn("Play failed:", err));
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isPlay]);

  return (
    <div>
      {!isPlay && (
        <span className="text-white text-sm font-light">
          Click anywhere to start music
        </span>
      )}
      <audio ref={audioRef} src="/music/background.mp3" loop preload="auto" />
    </div>
  );
};

export default MusicButton;
