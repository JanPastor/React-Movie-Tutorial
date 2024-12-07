import MovieCard from "../../../components/MovieCard"
import {useState, useEffect} from "react" // This is called a hook and it allows us to use state in a functional component
import { searchMovies, getPoplularMovies } from "../services/api";
import "../css/Home.css"  // from pages to css

{/*This home page will display a list of movies 
  The home page will also have a search bar that will allow the user to search for a movie  
*/}

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // This is for storing the search query
    const [movies, setMovies] = useState([]); // This is for storing the movies
    const [error, setError] = useState(null); // This is for error handling
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const loadPoplularMovies = async () => {
            try {
                const popularMovies = await getPoplularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError("Failed to load popular movies...");
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };
        loadPoplularMovies();
    }, []) 

    const handleSearch = async (e) => {
        e.preventDefault(); // prevents the button from update the page so that past search queries are not overwritten or lost (their state is retained)
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        try {
          const searchResults = await searchMovies(searchQuery);
          setMovies(searchResults);
          setError(null);
        } catch (error) {
            setError("Failed to search for movies...");
            console.log(error);
        } finally {
            setLoading(false);
        }
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
       
        {error && <div className="error-message">{error}</div>}

        {loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        )}
    </div>
  );
}

export default Home
