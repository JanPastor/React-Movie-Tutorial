{/* This will display the favorited movies */}
import "../css/Favorites.css"  // from pages to css

function Favorites() {
    return (
        <div className="favorites-empty">
            <h2> No favorites yet</h2>
            <p> Add some movies to your favorites and they will appear here! </p>
        </div>
    );
}

export default Favorites