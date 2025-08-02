import React from "react";
import SplineScene from "../../_ui/_module/spline";
import ScrollControl from "../../_ui/_module/scroll";
import MusicButton from "../../_ui/_basic/musicButton";
import PlayOnScroll from "../../_ui/_basic/scrollSounds";
import ScrollToTop from "../../_ui/_basic/scrollToTop";

const HomeScreen = () => {
  return (
    <div className="overflow-scroll">
      <SplineScene />
      <div className="fixed w-screen h-screen flex items-end justify-center pointer-events-none pb-4">
        <MusicButton />
        <PlayOnScroll />
        <ScrollToTop />
      </div>
      <div className="will-change-transform pointer-events-none relative">
        <ScrollControl />
      </div>
    </div>
  );
};

export default HomeScreen;
