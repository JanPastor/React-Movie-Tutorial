import "../frontend/src/css/MovieCard.css"
import { useMovieContext } from "../frontend/src/contexts/MovieContext"

function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext() // Get the functions from the MovieContext
    const favorite = isFavorite(movie.id) // Check if the movie is favorited

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    
    return <div className = "movie-card">
        <div className = "movie-poster">
            <img src = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt = {movie.title} />
            <div className = "movie-overlay">
                <button className = {`favorite-btn ${favorite ? "active" : ""}`} onClick = {onFavoriteClick}> 
                    ♥
                </button>
            </div>
        </div>
        <div className = "movie-info">
            <h3>{movie.title}</h3>  {/*Display the movie title using movie.title property*/}
            <p>{movie.release_date?.split("-")[0]}</p> {/*Display the movie release date using movie.release_date property*/}
        </div>
    </div>
}
// Export the MovieCard component so that it can be used in other parts of the application
export default MovieCard