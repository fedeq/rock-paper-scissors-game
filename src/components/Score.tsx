"use client";
import {useScore} from "@/hooks/useScore";

export function Score({className}: {className?: string}) {
  const {score} = useScore();

  return <span className={className}>{score}</span>;
}
