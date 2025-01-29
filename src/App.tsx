import { useEffect, useState } from 'react';
import Header from './components/header'
import './App.css'
import './bulmaComplements.css'
import image from '/3.png';
import Game from './components/game';
import Footer from './components/footer';
import { fetchGamesFromJSON, GameList } from './scripts/jsonReader';

function App() {
  //binds them and initialiszes them as empty lists
  const [games, getGames] = useState<GameList[]>([]);

  //getGames gets the gamedata and updates it into games
  useEffect(() => {
    const gamesData = fetchGamesFromJSON();
    getGames(gamesData);
  }, []);

  return (
    <>
      <div id="wrapper">
      <Header title='Game Collection' image={image} imageAlt='Kedjeregeln'/>
        <main className="">
          <section className="columns is-multiline is-centered is-8 m-4">
              {games.map((game) => (
                <Game title={game.title} description={game.description} releaseDate={game.releaseDate} 
                genre={game.genre} rating={game.rating} good={game.good} />
              ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
