"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

type HeroVisualProps = {
  imageSrc: string;
  videoSrc?: string;
  alt: string;
};

export function HeroVisual({ imageSrc, videoSrc, alt }: HeroVisualProps) {
  const reduceMotion = useReducedMotion();
  const [canUseVideo, setCanUseVideo] = useState(false);

  useEffect(() => {
    if (!videoSrc || reduceMotion) {
      setCanUseVideo(false);
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setCanUseVideo(!mediaQuery.matches);

    const listener = () => setCanUseVideo(!mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, [videoSrc, reduceMotion]);

  const gradientOverlay = useMemo(
    () =>
      "linear-gradient(150deg, rgba(11,11,11,0.45) 0%, rgba(11,11,11,0.8) 65%, rgba(11,11,11,0.9) 100%)",
    [],
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-gold/35 bg-ink/70 shadow-premium">
      <div className="absolute inset-0" style={{ background: gradientOverlay }} aria-hidden />
      <img src={imageSrc} alt={alt} className="h-full min-h-[360px] w-full object-cover opacity-70" />
      {canUseVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover mix-blend-lighten opacity-45"
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold-line" />
    </div>
  );
}
