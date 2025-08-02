"use client";
import React, { Suspense, useState } from "react";
import gsap from "gsap";

import scrollTrigger from "gsap/ScrollTrigger";
import LoadingScreen from "../../_screens/loading";

gsap.registerPlugin(scrollTrigger);

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineScene = () => {
  const [loaded, setLoaded] = useState(false);

  function onLoad() {
    setLoaded(true);
  }

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0">
        <Suspense fallback={null}>
          <Spline scene={"/spline/scene.splinecode"} onLoad={onLoad} />
        </Suspense>
      </div>
      <LoadingScreen loaded={loaded} />
    </>
  );
};

export default SplineScene;
