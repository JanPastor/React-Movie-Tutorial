import "../frontend/src/css/MovieCard.css"

function MovieCard({movie}) {
    function onFavoriteClick() {
        alert(`You favorited ${movie.title}`)
    }
    
    return <div className = "movie-card">
        <div className = "movie-poster">
            <img src = {movie.url} alt = {movie.title} />
            <div className = "movie-overlay">
                <button className = "favorite-button" onClick = {onFavoriteClick}> 
                ♥
                </button>
            </div>
        </div>
        <div className = "movie-info">
            <h3>{movie.title}</h3>  {/*Display the movie title using movie.title property*/}
            <p>{movie.release_date}</p> {/*Display the movie release date using movie.release_date property*/}
        </div>
    </div>
}
// Export the MovieCard component so that it can be used in other parts of the application
export default MovieCard