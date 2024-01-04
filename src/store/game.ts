import type {Shape, ShapeName} from "@/types";

import {create} from "zustand";

interface GameState {
  score: number;
  state: "picking" | "playing" | "gameover";
  selectedShape: ShapeName | null;

  setSelectedShape: (shape: ShapeName) => void;
  resetSelectedShape: () => void;
  setScore: (score: number) => void;
  incrementScore: () => void;
  decrementScore: () => void;
  setState: (state: "picking" | "playing" | "gameover") => void;

  reset: () => void;
}

export const shapes: Partial<Record<ShapeName, Shape>> = {
  rock: {
    name: "rock",
    image: "/icon-rock.svg",
    beats: ["scissors", "lizard"],
    gradient: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
  },
  paper: {
    name: "paper",
    image: "/icon-paper.svg",
    beats: ["rock", "cyan"],
    gradient: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
  },
  scissors: {
    name: "scissors",
    beats: ["paper", "lizard"],
    image: "/icon-scissors.svg",
    gradient: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
  },
};

export const shapes_bouns = {
  ...shapes,
  lizard: {
    name: "lizard",
    beats: ["paper", "cyan"],
    image: "/icon-lizard.svg",
    gradient: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
  },
  cyan: {
    name: "cyan",
    beats: ["rock", "scissors"],
    image: "/icon-cyan.svg",
    gradient: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
  },
};

export const useGameStore = create<GameState>((set) => {
  return {
    score: 12,
    state: "picking",
    selectedShape: null,

    setSelectedShape: (shape: ShapeName) => set({selectedShape: shape}),
    resetSelectedShape: () => set({selectedShape: null}),
    incrementScore: () => set((state) => ({score: state.score + 1})),
    decrementScore: () => set((state) => ({score: state.score - 1})),
    setScore: (score: number) => set({score}),
    setState: (state: "picking" | "playing" | "gameover") => set({state}),

    reset: () => set({score: 0, state: "picking", selectedShape: null}),
  };
});
