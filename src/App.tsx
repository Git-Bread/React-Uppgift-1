import Header from './components/header'
import './App.css'
import './bulmaComplements.css'
import image from '/3.png';
import Game from './components/game';

const games = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description: "An open-world action-adventure game developed and published by Nintendo.",
    releaseDate: "March 3, 2017",
    genre: "Action-adventure",
  },
  {
    title: "Super Mario Odyssey",
    description: "A platform game developed and published by Nintendo for the Nintendo Switch.",
    releaseDate: "October 27, 2017",
    genre: "Platform",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description: "An action role-playing game developed and published by CD Projekt.",
    releaseDate: "May 19, 2015",
    genre: "Action RPG",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description: "An open-world action-adventure game developed and published by Nintendo.",
    releaseDate: "March 3, 2017",
    genre: "Action-adventure",
  },
  {
    title: "Super Mario Odyssey",
    description: "A platform game developed and published by Nintendo for the Nintendo Switch.",
    releaseDate: "October 27, 2017",
    genre: "Platform",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    description: "An action role-playing game developed and published by CD Projekt.",
    releaseDate: "May 19, 2015",
    genre: "Action RPG",
  },
  // List made with ai, couldent be arsked
];

function App() {
  return (
    <>
      <Header title='Game Collection' image={image} imageAlt='Kedjeregeln'/>
      <main className="">
        <section className="columns is-multiline is-centered is-8 m-4">
            {games.map((game) => (
              <Game title={game.title} description={game.description} releaseDate={game.releaseDate} genre={game.genre} />
            ))}
        </section>
      </main>
    </>
  )
}

export default App
