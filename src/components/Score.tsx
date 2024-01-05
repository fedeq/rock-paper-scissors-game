"use client";
import {useScore} from "@/hooks/useScore";

export function Score({className}: {className?: string}) {
  const {score} = useScore();

  return (
    <span key={score} className={`animate-fade-down animate-delay-[650ms] ${className}`}>
      {score}
    </span>
  );
}
