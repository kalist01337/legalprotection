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
  const isIPadOS = navigator.platform === "MacIntel" && ((navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints ?? 0) > 1;
  return isAppleMobile || isIPadOS;
};

export function AdaptiveHeroMedia({ videoSrc, posterSrc }: AdaptiveHeroMediaProps) {
  const [useVideo, setUseVideo] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection;
    const isDataSaver = Boolean(connection?.saveData);
    const isSlowNetwork = typeof connection?.effectiveType === "string" && connection.effectiveType.includes("2g");

    const ios = detectIOS();
    setIsIOS(ios);

    const deviceMemory = nav.deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    const isLowEnd = deviceMemory <= 4 || cores <= 4;

    if (prefersReducedMotion) {
      setUseVideo(false);
      return;
    }

    // iOS: force-enable video to avoid false negatives from network/device heuristics.
    if (ios) {
      setUseVideo(true);
      return;
    }

    const allowOnMobile = !isSmallScreen || !isLowEnd;
    setUseVideo(!isDataSaver && !isSlowNetwork && allowOnMobile);
  }, []);

  useEffect(() => {
    if (!useVideo || videoFailed || !videoRef.current) return;

    const video = videoRef.current;
    video.muted = true;
    const markFailed = () => setVideoFailed(true);
    const markReady = () => setVideoReady(true);
    const tryPlay = () => video.play().then(markReady).catch(() => undefined);

    video.addEventListener("error", markFailed);
    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);

    if (isIOS) {
      const startOnGesture = () => {
        void tryPlay();
      };

      const retryTimer = window.setTimeout(() => {
        void tryPlay();
      }, 650);

      video.load();
      void tryPlay();
      window.addEventListener("touchstart", startOnGesture, { passive: true, once: true });
      window.addEventListener("pointerdown", startOnGesture, { passive: true, once: true });

      return () => {
        window.clearTimeout(retryTimer);
        window.removeEventListener("touchstart", startOnGesture);
        window.removeEventListener("pointerdown", startOnGesture);
        video.removeEventListener("error", markFailed);
        video.removeEventListener("loadedmetadata", markReady);
        video.removeEventListener("canplay", markReady);
        video.removeEventListener("playing", markReady);
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
      video.removeEventListener("error", markFailed);
      video.removeEventListener("loadedmetadata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
    };
  }, [useVideo, isIOS, videoFailed]);

  useEffect(() => {
    if (!useVideo) return;
    setVideoReady(false);
    setVideoFailed(false);
  }, [useVideo, videoSrc]);

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
      {useVideo && !videoFailed ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            videoReady ? "opacity-72" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          disablePictureInPicture
          onLoadedData={() => setVideoReady(true)}
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
