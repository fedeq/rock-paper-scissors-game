import {useGameStore} from "@/store/game";

export const useScore = () => {
  const score = useGameStore((state) => state.score);

  return {score};
};
