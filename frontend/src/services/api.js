const API_KEY = "57c694a98a8c75dbbdbd3e3f0cc89435"
const BASE_URL = "https://api.themoviedb.org/3"

/**
 * Fetches popular movies from TMDB API
 * Uses the /movie/popular endpoint to get a list of currently popular movies
 * @returns {Promise<Array>} Array of movie objects containing details like title, release date, etc.
 */
export const getPoplularMovies = async () => {
    // Make API request to TMDB's popular movies endpoint
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`) 
    // Parse the JSON response - this is asynchronous hence the await
    const data = await response.json()
    // Return just the results array which contains the movie data
    return data.results
}

/**
 * Searches for movies based on a query string using TMDB API
 * @param {string} query - The search term to find movies (e.g., "Star Wars", "Bill & Ted")
 * @returns {Promise<Array>} Array of movie objects that match the search query
 */
export const searchMovies = async (query) => {
    // URL encode the query to handle spaces, special characters, and non-English characters safely
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(query)}`) 
    // Parse the JSON response into JavaScript object
    const data = await response.json()
    // Return the array of movies that match the search query
    return data.results
}