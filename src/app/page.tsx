"use client";
import type {Shape, ShapeName} from "@/types";

import {useState} from "react";

import {PaperIcon} from "@/components/PaperIcon";
import {RockIcon} from "@/components/RockIcon";
import {ScissorsIcon} from "@/components/ScissorsIcon";
import {shapes} from "@/store/game";
import {useScore} from "@/hooks/useScore";

const getRandomShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};

export default function Home() {
  const {incrementScore, decrementScore} = useScore();
  const [selectedShape, setSelectedShape] = useState<Shape | null>(null);
  const [computerShape, setComputerShape] = useState<Shape | null>(null);

  const createHandleClick = (selectedShape: ShapeName) => () => {
    setSelectedShape(selectedShape);

    const randomShape = getRandomShape();

    console.log(`You selected: ${selectedShape}`);
    console.log(`Computer selected: ${randomShape.name}`);
    if (selectedShape === randomShape.name) {
      return;
    }
    if (randomShape.beats.some((shapeName) => shapeName === selectedShape)) {
      return decrementScore();
    }

    return incrementScore();
  };

  return (
    <section>
      <section>
        <button className="text-white" type="button" onClick={createHandleClick("rock")}>
          <RockIcon />
        </button>
        <button className="text-white" type="button" onClick={createHandleClick("paper")}>
          <PaperIcon />
        </button>
        <button className="text-white" type="button" onClick={createHandleClick("scissors")}>
          <ScissorsIcon />
        </button>
      </section>
    </section>
  );
}
