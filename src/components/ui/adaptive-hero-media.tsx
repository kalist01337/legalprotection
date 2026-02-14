"use client";

import { useEffect, useRef, useState } from "react";

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
  deviceMemory?: number;
};

const detectIOS = () => {
  const ua = navigator.userAgent || "";
  const isAppleMobile = /iP(hone|ad|od)/.test(ua);
  const isIPadOS =
    navigator.platform === "MacIntel" &&
    ((navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints ?? 0) > 1;
  return isAppleMobile || isIPadOS;
};

export function AdaptiveHeroMedia({ videoSrc, posterSrc }: AdaptiveHeroMediaProps) {
  const [disableVideo, setDisableVideo] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisableVideo(true);
      return;
    }

    const ios = detectIOS();
    setIsIOS(ios);

    if (ios) {
      setDisableVideo(false);
      return;
    }

    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection;
    const isDataSaver = Boolean(connection?.saveData);
    const isSlowNetwork =
      typeof connection?.effectiveType === "string" &&
      connection.effectiveType.includes("2g");
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    const deviceMemory = nav.deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    const isLowEnd = deviceMemory <= 4 || cores <= 4;
    const allowOnMobile = !isSmallScreen || !isLowEnd;

    setDisableVideo(isDataSaver || isSlowNetwork || !allowOnMobile);
  }, []);

  useEffect(() => {
    if (disableVideo || videoFailed || !videoRef.current) return;

    const video = videoRef.current;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const onError = () => setVideoFailed(true);
    video.addEventListener("error", onError);

    const tryPlay = () => video.play().catch(() => undefined);

    if (isIOS) {
      video.load();
      void tryPlay();
      const t1 = window.setTimeout(() => void tryPlay(), 400);
      const t2 = window.setTimeout(() => void tryPlay(), 1200);
      const startOnGesture = () => {
        void tryPlay();
      };
      window.addEventListener("touchstart", startOnGesture, { passive: true });
      window.addEventListener("pointerdown", startOnGesture, { passive: true });

      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
        window.removeEventListener("touchstart", startOnGesture);
        window.removeEventListener("pointerdown", startOnGesture);
        video.removeEventListener("error", onError);
      };
    }

    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      video.removeEventListener("error", onError);
    };
  }, [disableVideo, isIOS, videoFailed]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <img
        src={posterSrc}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-68"
        loading="eager"
        decoding="async"
      />
      {!disableVideo && !videoFailed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-72"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          disablePictureInPicture
          src={videoSrc}
          onError={() => setVideoFailed(true)}
          onCanPlay={() => {
            if (isIOS && videoRef.current) {
              void videoRef.current.play().catch(() => undefined);
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
