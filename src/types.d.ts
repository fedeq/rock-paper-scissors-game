export type ShapeName = "rock" | "paper" | "scissors" | "lizard" | "cyan";

export interface Shape {
  name: ShapeName;
  beats: ShapeName[];
  image: string;
  gradient: string;
}
