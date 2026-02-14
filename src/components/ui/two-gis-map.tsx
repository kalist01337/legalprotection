"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    DG?: {
      then: (callback: () => void) => void;
      map: (container: HTMLElement, options: Record<string, unknown>) => {
        remove: () => void;
      };
      marker: (coords: [number, number]) => {
        addTo: (map: unknown) => void;
      };
    };
  }
}

type TwoGisMapProps = {
  lat: number;
  lon: number;
  className?: string;
};

export function TwoGisMap({ lat, lon, className }: TwoGisMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let disposed = false;
    let mapInstance: { remove: () => void } | null = null;

    const initMap = () => {
      if (!window.DG || !mapContainerRef.current || disposed) return;

      window.DG.then(() => {
        if (!window.DG || !mapContainerRef.current || disposed) return;

        mapInstance = window.DG.map(mapContainerRef.current, {
          center: [lat, lon],
          zoom: 16,
          fullscreenControl: false,
        });

        window.DG.marker([lat, lon]).addTo(mapInstance);
      });
    };

    const existingLoader = document.querySelector<HTMLScriptElement>("script[data-2gis-loader='1']");
    if (existingLoader) {
      if (window.DG) {
        initMap();
      } else {
        existingLoader.addEventListener("load", initMap, { once: true });
      }
    } else {
      const script = document.createElement("script");
      script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
      script.async = true;
      script.dataset["2gisLoader"] = "1";
      script.addEventListener("load", initMap, { once: true });
      document.body.appendChild(script);
    }

    return () => {
      disposed = true;
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [lat, lon]);

  return <div ref={mapContainerRef} className={className} aria-label="Карта 2ГИС" />;
}
