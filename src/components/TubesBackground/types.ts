import type { ReactNode } from "react";

export interface TubesController {
  tubes?: {
    setColors?: (colors: string[]) => void;
    setLightsColors?: (colors: string[]) => void;
  };
  dispose?: () => void;
}

export interface TubesBackgroundProps {
  children: ReactNode;
  className?: string;
  enableClickToRandomize?: boolean;
}
