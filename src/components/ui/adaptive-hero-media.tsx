"use client";

import { useEffect, useState } from "react";

type AdaptiveHeroMediaProps = {
  videoSrc: string;
  posterSrc: string;
};

type ConnectionInfo = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorWithConnection = Navigator & {
  connection?: ConnectionInfo;
};

export function AdaptiveHeroMedia({ videoSrc, posterSrc }: AdaptiveHeroMediaProps) {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.innerWidth < 992;
    const connection = (navigator as NavigatorWithConnection).connection;
    const isDataSaver = Boolean(connection?.saveData);
    const isSlowNetwork = typeof connection?.effectiveType === "string" && connection.effectiveType.includes("2g");

    setUseVideo(!prefersReducedMotion && !isSmallScreen && !isDataSaver && !isSlowNetwork);
  }, []);

  return (
    <>
      <img
        src={posterSrc}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-68"
        loading="eager"
        decoding="async"
      />
      {useVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-72"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={posterSrc}
          disablePictureInPicture
        >
          <source src={videoSrc} />
          <source src={videoSrc} type="video/quicktime" />
        </video>
      ) : null}
    </>
  );
}
