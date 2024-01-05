"use client";
import type {ShapeName} from "@/types";

import {shapes, useGameStore} from "@/store/game";
import {useScore} from "@/hooks/useScore";
import {
  LizardCircle,
  PaperCircle,
  RockCircle,
  ScissorsCircle,
  SelectShape,
  SpockCircle,
} from "@/components/SelectShape";

const shapeCircles: Record<ShapeName, Function> = {
  rock: () => <RockCircle big />,
  paper: () => <PaperCircle big />,
  scissors: () => <ScissorsCircle big />,
  lizard: () => <LizardCircle big />,
  spock: () => <SpockCircle big />,
};

export default function Home() {
  const {incrementScore, decrementScore} = useScore();
  const selectedShape = useGameStore((state) => state.selectedShape);
  const gameStatus = useGameStore((state) => state.gameStatus);
  const houseShape = useGameStore((state) => state.houseShape);
  const playAgain = useGameStore((state) => state.playAgain);

  if (gameStatus !== "picking" && selectedShape && houseShape) {
    return (
      <section className="mx-auto mt-20 flex h-[400px] w-full max-w-5xl items-center justify-between">
        <div className="flex h-full flex-col items-center ">
          <h2 className="text-center text-2xl font-bold uppercase tracking-wider text-white">
            You Picked
          </h2>
          <div className="mt-10">{shapeCircles[selectedShape]()}</div>
        </div>
        <div className="animate-jump-in animate-delay-[1200ms] flex h-full flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-bold uppercase tracking-wider text-white drop-shadow-md">
            {gameStatus === "win" && "You Win"}
            {gameStatus === "lose" && "You Lose"}
            {gameStatus === "draw" && "Draw"}
          </h2>
          <div className="mt-4 flex justify-center">
            <button
              className="text-dark_text mr-4 rounded-md bg-white px-10 py-2 text-base font-bold uppercase tracking-widest hover:text-red-500"
              type="button"
              onClick={() => {
                playAgain();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
        <div className=" flex h-full flex-col items-center">
          <h2 className="text-center text-2xl font-bold uppercase tracking-wider text-white">
            The House Picked
          </h2>
          <div className="animate-fade animate-delay-1000 mt-10">
            {shapeCircles[houseShape.name]()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex h-full items-center justify-center">
      <SelectShape />
      {/* <button className="text-white" type="button" onClick={createHandleClick("rock")}>
        <RockIcon />
      </button>
      <button className="text-white" type="button" onClick={createHandleClick("paper")}>
        <PaperIcon />
      </button>
      <button className="text-white" type="button" onClick={createHandleClick("scissors")}>
        <ScissorsIcon />
      </button> */}
    </section>
  );
}
