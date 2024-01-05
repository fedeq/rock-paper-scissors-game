import type {ShapeName} from "@/types";

import {useGameStore} from "@/store/game";

import {PaperIcon} from "./PaperIcon";
import {RockIcon} from "./RockIcon";
import {ScissorsIcon} from "./ScissorsIcon";
import {LizardIcon} from "./LizardIcon";
import {SpockIcon} from "./SpockIcon";

export function SelectShape() {
  const setSelectedShape = useGameStore((state) => state.setSelectedShape);

  const createHandleClick = (selectedShape: ShapeName) => () => {
    setSelectedShape(selectedShape);
  };

  return (
    <section className="bg-triangle relative flex h-[278px] w-[313px] items-center justify-center bg-center bg-no-repeat">
      <button
        className="absolute -left-[20%] -top-[30%]"
        type="button"
        onClick={createHandleClick("paper")}
      >
        <PaperCircle />
      </button>
      <button
        className="absolute -right-[20%] -top-[30%]"
        type="button"
        onClick={createHandleClick("scissors")}
      >
        <ScissorsCircle />
      </button>
      <button className="absolute -bottom-[20%]" type="button" onClick={createHandleClick("rock")}>
        <RockCircle />
      </button>
    </section>
  );
}

export function PaperCircle({big = false}: {big?: boolean}) {
  return (
    <ShapeCircle bgClass="bg-paper_gradient" big={big}>
      <PaperIcon />
    </ShapeCircle>
  );
}

export function ScissorsCircle({big = false}: {big?: boolean}) {
  return (
    <ShapeCircle bgClass="bg-scissors_gradient" big={big}>
      <ScissorsIcon />
    </ShapeCircle>
  );
}

export function RockCircle({big = false}: {big?: boolean}) {
  return (
    <ShapeCircle bgClass="bg-rock_gradient" big={big}>
      <RockIcon />
    </ShapeCircle>
  );
}

export function LizardCircle({big = false}: {big?: boolean}) {
  return (
    <ShapeCircle bgClass="bg-lizard_gradient" big={big}>
      <LizardIcon />
    </ShapeCircle>
  );
}

export function SpockCircle({big = false}: {big?: boolean}) {
  return (
    <ShapeCircle bgClass="bg-spock_gradient" big={big}>
      <SpockIcon />
    </ShapeCircle>
  );
}

function ShapeCircle({
  children,
  bgClass,
  big = false,
}: {
  children: React.ReactNode;
  bgClass?: string;
  big?: boolean;
}) {
  return (
    <div
      className={`${bgClass} flex ${
        big ? "h-80 w-80" : "h-40 w-40"
      }  items-center justify-center rounded-full `}
    >
      <div
        className={`flex ${
          big ? "h-60 w-60" : "h-32 w-32"
        }  items-center justify-center rounded-full bg-white text-[#3B4262] shadow-inner shadow-indigo-200 drop-shadow-md transition-all hover:shadow-xl`}
      >
        {children}
      </div>
    </div>
  );
}
