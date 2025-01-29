import gamesData from '../assets/games.json';

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