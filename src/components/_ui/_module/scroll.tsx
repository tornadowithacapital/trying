"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollControl = () => {
  useLayoutEffect(() => {
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      snap: [0, 0.1, 0.28, 0.5, 1],
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <div className="w-screen h-[12000px]"></div>;
};

export default ScrollControl;
