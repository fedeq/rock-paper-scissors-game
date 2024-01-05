export type ShapeName = "rock" | "paper" | "scissors" | "lizard" | "spock";

export interface Shape {
  name: ShapeName;
  beats: ShapeName[];
  image: string;
}
