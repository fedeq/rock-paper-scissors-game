import {useGameStore} from "@/store/game";

export const useScore = () => {
  const score = useGameStore((state) => state.score);
  const setScore = useGameStore((state) => state.setScore);
  const incrementScore = useGameStore((state) => state.incrementScore);
  const decrementScore = useGameStore((state) => state.decrementScore);

  return {score, setScore, incrementScore, decrementScore};
};
