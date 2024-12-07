import "./css/App.css"  // from src to src/css
import MovieCard from '../../components/MovieCard'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from '../../components/NavBar'
import {Routes, Route} from "react-router-dom"

// This is where the code goes for modifying the UI and other stuff

function App() {
  const movieNumber = 1 //This is a variable


  return (
    <div>
    <NavBar />
    <main className="main content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </main>
    </div>
  );
}

export default App
