import type {Shape, ShapeName} from "@/types";

import {create} from "zustand";
import {devtools} from "zustand/middleware";

type GameStatus = "picking" | "win" | "lose" | "draw";

interface GameState {
  score: number;
  gameStatus: GameStatus;
  selectedShape: ShapeName | null;
  houseShape: Shape | null;

  setSelectedShape: (shape: ShapeName) => void;
  resetSelectedShape: () => void;
  setScore: (score: number) => void;
  incrementScore: () => void;
  decrementScore: () => void;
  setGameStatus: (state: GameStatus) => void;
  playAgain: () => void;

  reset: () => void;
}

export const shapes: Partial<Record<ShapeName, Shape>> = {
  rock: {
    name: "rock",
    image: "/icon-rock.svg",
    beats: ["scissors", "lizard"],
  },
  paper: {
    name: "paper",
    image: "/icon-paper.svg",
    beats: ["rock", "spock"],
  },
  scissors: {
    name: "scissors",
    beats: ["paper", "lizard"],
    image: "/icon-scissors.svg",
  },
};

export const shapes_bouns = {
  ...shapes,
  lizard: {
    name: "lizard",
    beats: ["paper", "spock"],
    image: "/icon-lizard.svg",
  },
  spock: {
    name: "spock",
    beats: ["rock", "scissors"],
    image: "/icon-spock.svg",
  },
};

export const useGameStore = create<GameState, [["zustand/devtools", GameState]]>(
  devtools((set, get) => {
    return {
      score: 0,
      gameStatus: "picking",
      selectedShape: null,
      houseShape: null,

      setSelectedShape: (shape: ShapeName) => {
        const newHouseShape = getRandomShape();

        if (shape == newHouseShape.name) {
          set({selectedShape: shape, gameStatus: "draw", houseShape: newHouseShape});

          return;
        }

        if (newHouseShape.beats.includes(shape)) {
          set({
            selectedShape: shape,
            gameStatus: "lose",
            houseShape: newHouseShape,
            score: get().score - 1,
          });

          return;
        }
        set({
          selectedShape: shape,
          gameStatus: "win",
          houseShape: newHouseShape,
          score: get().score + 1,
        });

        return;
      },
      resetSelectedShape: () => set({selectedShape: null}),
      incrementScore: () => set((state) => ({score: state.score + 1})),
      decrementScore: () => set((state) => ({score: state.score - 1})),
      setScore: (score: number) => set({score}),
      setGameStatus: (gameStatus: GameStatus) => set({gameStatus}),

      playAgain: () => {
        set({gameStatus: "picking", selectedShape: null, houseShape: null});
      },

      reset: () => set({score: 0, gameStatus: "picking", selectedShape: null}),
    };
  }),
);

const getRandomShape = () => {
  return Object.values(shapes)[Math.floor(Math.random() * Object.values(shapes).length)];
};
