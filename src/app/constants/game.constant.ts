export const games: Game[] = [
  {
    title: "5 seconds game",
    link: "5-second-game",
    description: "Give 3 answers to the question within 5 seconds, otherwise take a shot.",
    icon: "sports_bar"
  },
  {
    title: "Never have I ever",
    link: "never-have-i-ever",
    description: "A set of Never have I ever questions, whoever have done the stated action have to drink.",
    icon: "timer_5"
  },
]

export interface Game {
  title: string;
  link: string;
  description: string;
  icon: string;
}