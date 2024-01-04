import {create} from "zustand";

interface GameState {
  score: number;
  state: "picking" | "playing" | "gameover";
}

export const useGameStore = create<GameState>((set) => {
  return {
    score: 12,
    state: "picking",
  };
});
