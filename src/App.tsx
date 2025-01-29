import Header from './components/header'
import './App.css'
import './bulmaComplements.css'
import image from '/3.png';


function App() {
  return (
    <>
      <Header title='Testing' image={image} imageAlt='Kedjeregeln'/>
    </>
  )
}

export default App
