import MovieCard from "../../../components/MovieCard"
import {useState} from "react" // This is called a hook and it allows us to use state in a functional component
import "../css/Home.css"  // from pages to css

{/*This home page will display a list of movies 
  The home page will also have a search bar that will allow the user to search for a movie  
*/}

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    {/*This variable will hold a list of movie cards that will be displayed*/}
    const movies = [
        {id:1, title: "John Wick", release_date: "2014-10-24"},
        {id:2, title: "The Matrix", release_date: "1999-03-31"},
        {id:3, title: "The Dark Knight", release_date: "2008-07-18"},
        {id:4, title: "The Lord of the Rings", release_date: "2001-12-19"},
        {id:5, title: "Star Wars", release_date: "1977-05-25"}, 
        {id:6, title: "The Avengers", release_date: "2012-04-25"},
        {id:7, title: "The Silence of the Lambs", release_date: "1991-02-14"},
    ] 
    const handleSearch = (e) => {
        e.preventDefault(); // prevents the button from update the page so that past search queries are not overwritten or lost (their state is retained)
        alert(`You searched for ${searchQuery}`)
    };

    return (
    <div className = "home">
        <form onSubmit={handleSearch} className = "search-form">
            <input 
            type = "text" 
            placeholder = "Search for movies..." 
            className="search-input"
            value = {searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit" className = "search-button"> Search </button>
        </form>
      <div className = "movie-grid">
        {movies.map(
            (movie) => (
                <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home
