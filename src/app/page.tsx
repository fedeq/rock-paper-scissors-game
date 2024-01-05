"use client";
import type {ShapeName} from "@/types";

import {useGameStore} from "@/store/game";
import {
  LizardCircle,
  PaperCircle,
  RockCircle,
  ScissorsCircle,
  SelectShape,
  SpockCircle,
} from "@/components/SelectShape";

type CircleFn = () => JSX.Element;

const shapeCircles: Record<ShapeName, CircleFn> = {
  rock: () => <RockCircle big />,
  paper: () => <PaperCircle big />,
  scissors: () => <ScissorsCircle big />,
  lizard: () => <LizardCircle big />,
  spock: () => <SpockCircle big />,
};

export default function Home() {
  const selectedShape = useGameStore((state) => state.selectedShape);
  const gameStatus = useGameStore((state) => state.gameStatus);
  const houseShape = useGameStore((state) => state.houseShape);
  const playAgain = useGameStore((state) => state.playAgain);

  if (gameStatus !== "picking" && selectedShape && houseShape) {
    return (
      <section className="mx-auto grid h-[400px] w-full max-w-5xl grid-cols-2 items-center justify-between md:grid-cols-3">
        <div className="order-1 flex h-full flex-col-reverse items-center justify-center md:flex-col">
          <h2 className="text-center text-base font-bold uppercase tracking-widest text-white md:text-2xl">
            You Picked
          </h2>
          <div className="my-10">{shapeCircles[selectedShape]()}</div>
        </div>
        <div className="animate-jump-in animate-delay-[600ms] order-3 col-span-2 mx-4 flex h-full flex-col items-center justify-center md:order-2 md:col-span-1">
          <h2 className="text-center text-4xl font-bold uppercase tracking-wider text-white drop-shadow-md">
            {gameStatus === "win" && "You Win"}
            {gameStatus === "lose" && "You Lose"}
            {gameStatus === "draw" && "Draw"}
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="text-dark_text rounded-md bg-white px-10 py-2 text-base font-bold uppercase tracking-widest hover:text-red-500"
              type="button"
              onClick={() => {
                playAgain();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="order-2 flex h-full flex-col-reverse items-center justify-center md:order-3 md:flex-col">
          <h2 className="text-center text-base font-bold uppercase tracking-widest text-white md:text-2xl">
            The House Picked
          </h2>
          <div className="animate-fade animate-delay-200 my-10">
            {shapeCircles[houseShape.name]()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex h-full items-center justify-center md:mt-10">
      <SelectShape />
    </section>
  );
}
