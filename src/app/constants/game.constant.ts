export const games: Game[] = [
  {
    title: "5 seconds game",
    link: "5-second-game",
    description: "Give 3 answers to the question within 5 seconds, otherwise take a shot."
  },
  {
    title: "Test game",
    link: "",
    description: ""
  }
]

export interface Game {
  title: string;
  link: string;
  description: string;
}