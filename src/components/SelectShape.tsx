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
    <section className="bg-triangle relative flex h-[222px] w-[250px] items-center justify-center bg-cover bg-center bg-no-repeat md:m-20 md:h-[278px] md:w-[313px]">
      <button
        className="absolute -left-[10%] -top-[20%] md:-left-[20%] md:-top-[30%]"
        type="button"
        onClick={createHandleClick("paper")}
      >
        <PaperCircle />
      </button>
      <button
        className="absolute -right-[10%] -top-[20%] md:-right-[20%] md:-top-[30%]"
        type="button"
        onClick={createHandleClick("scissors")}
      >
        <ScissorsCircle />
      </button>
      <button
        className="absolute -bottom-[10%] md:-bottom-[20%]"
        type="button"
        onClick={createHandleClick("rock")}
      >
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
        big ? "h-40 w-40 md:h-80 md:w-80" : "h-28 w-28 md:h-40 md:w-40"
      }  items-center justify-center rounded-full `}
    >
      <div
        className={`flex h-5/6 w-5/6
         items-center justify-center rounded-full bg-white text-[#3B4262] shadow-inner shadow-indigo-200 drop-shadow-md transition-all hover:shadow-xl`}
      >
        {children}
      </div>
    </div>
  );
}
