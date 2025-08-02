"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
    });
  };

  return (
    isVisible && (
      <button
        onClick={onClick}
        className="pointer-events-auto w-12 h-12 rounded-full fixed bg-white right-8 bottom-8 font-bold shadow-sm z-50"
      >
        <svg
          width={20}
          height={20}
          className="-rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 46 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
        </svg>
      </button>
    )
  );
};

export default ScrollToTop;
