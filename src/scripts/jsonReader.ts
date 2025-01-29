import gamesData from '../assets/games.json';
//separate script to load all the games, makes the structure better


export interface GameList {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  rating: number;
  good: boolean;
}

export const fetchGamesFromJSON = (): GameList[] => {
  return gamesData;
};