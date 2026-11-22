"use client";

import { Component, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { NEON_PALETTES } from "@/components/shared/constants";
import type { TubesBackgroundProps, TubesController } from "@/components/TubesBackground/types";
import { cn } from "@/lib/utils";

const TUBES_CDN_URL =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

class CanvasErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function TubesCanvasLayer({
  paletteIndex,
  onLoaded,
  onFallback,
}: {
  paletteIndex: number;
  onLoaded: () => void;
  onFallback: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const controllerRef = useRef<TubesController | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let cancelled = false;

    async function mountTubes() {
      try {
        const mod = (await import(/* webpackIgnore: true */ TUBES_CDN_URL)) as {
          default?: (
            el: HTMLCanvasElement,
            opts: {
              tubes: {
                colors: string[];
                lights: { intensity: number; colors: string[] };
              };
            },
          ) => TubesController;
        };

        if (cancelled || !canvasRef.current || typeof mod.default !== "function") {
          onFallback();
          return;
        }

        const initialPalette = NEON_PALETTES[0];
        controllerRef.current = mod.default(canvasRef.current, {
          tubes: {
            colors: initialPalette,
            lights: {
              intensity: 160,
              colors: ["#00ff88", "#22d3ee", "#7700ff", "#ff006e"],
            },
          },
        });
        onLoaded();
      } catch {
        if (!cancelled) {
          onFallback();
        }
      }
    }

    mountTubes();

    return () => {
      cancelled = true;
      try {
        controllerRef.current?.dispose?.();
      } catch {
        // Ignore cleanup errors from third-party WebGL instances
      }
      controllerRef.current = null;
    };
  }, [onLoaded, onFallback]);

  useEffect(() => {
    const palette = NEON_PALETTES[paletteIndex % NEON_PALETTES.length];
    try {
      controllerRef.current?.tubes?.setColors?.(palette);
      controllerRef.current?.tubes?.setLightsColors?.(palette);
    } catch {
      // Ignore if third-party runtime is not ready
    }
  }, [paletteIndex]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
    />
  );
}

export function TubesBackground({
  children,
  className,
  enableClickToRandomize = true,
}: TubesBackgroundProps) {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [shouldLoadWebGl, setShouldLoadWebGl] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  const handleLoaded = useCallback(() => setCanvasReady(true), []);
  const handleFallback = useCallback(() => setCanvasReady(false), []);

  // Load cursor-tracking WebGL canvas on desktop upon first user interaction
  // so initial load never pays a Three.js shader compilation or frame cost.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktopPointer = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    ).matches;

    if (reducedMotion || !isDesktopPointer) return undefined;

    const triggerMount = () => {
      setShouldLoadWebGl(true);
      window.removeEventListener("pointermove", triggerMount);
      window.removeEventListener("pointerdown", triggerMount);
      window.removeEventListener("keydown", triggerMount);
    };

    window.addEventListener("pointermove", triggerMount, { once: true, passive: true });
    window.addEventListener("pointerdown", triggerMount, { once: true, passive: true });
    window.addEventListener("keydown", triggerMount, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointermove", triggerMount);
      window.removeEventListener("pointerdown", triggerMount);
      window.removeEventListener("keydown", triggerMount);
    };
  }, []);

  const handleClick = () => {
    if (!enableClickToRandomize) return;
    setPaletteIndex((prev) => (prev + 1) % NEON_PALETTES.length);
  };

  const activeColors = NEON_PALETTES[paletteIndex % NEON_PALETTES.length];

  const fallbackGlow = (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 transition-all duration-700"
      style={{
        background: `radial-gradient(ellipse 60% 50% at 80% 18%, ${activeColors[0]}1f, transparent), radial-gradient(ellipse 45% 40% at 15% 75%, ${activeColors[1]}18, transparent), radial-gradient(ellipse 40% 35% at 60% 85%, ${activeColors[2]}14, transparent)`,
      }}
    />
  );

  return (
    <div
      onClick={handleClick}
      className={cn("relative overflow-x-clip bg-[#07080b]", className)}
    >
      {/* Ambient neon mesh always visible immediately at zero JS/blocking cost */}
      {fallbackGlow}

      {/* Deferred 3D WebGL Tubes Canvas on desktop */}
      {shouldLoadWebGl ? (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 z-0 transition-opacity duration-700",
            canvasReady ? "opacity-100" : "opacity-0",
          )}
        >
          <CanvasErrorBoundary fallback={null}>
            <TubesCanvasLayer
              paletteIndex={paletteIndex}
              onLoaded={handleLoaded}
              onFallback={handleFallback}
            />
          </CanvasErrorBoundary>
        </div>
      ) : null}

      {/* Subtle readability scrim over 3D tubes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#07080b]/45 via-transparent to-[#07080b]/90"
      />

      {/* Foreground interactive content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
