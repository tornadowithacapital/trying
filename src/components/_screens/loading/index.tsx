import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import gsap from "gsap";

type Props = {
  loaded: boolean;
};

const LoadingScreen: React.FC<Props> = ({ loaded }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked && ref.current) {
      const timeline = gsap
        .timeline()
        .to(ref.current, { opacity: 0, duration: 0.8 })
        .set(ref.current, { display: "none" });
      return () => {
        timeline.kill();
      };
    }
  }, [clicked]);

  return (
    <div
      ref={ref}
      onClick={() => {
        setClicked(true);
      }}
      className={classNames(
        "fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500",
      )}
    >
      {!loaded ? (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>
      ) : (
        <button className="text-center text-white">
          Please Click here to start.
        </button>
      )}
    </div>
  );
};

export default LoadingScreen;
