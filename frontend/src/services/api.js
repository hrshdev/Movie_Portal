const API_KEY = "580c8bbe13beee68d3584601e74e2e91"
const BASE_URL = "https://api.themoviedb.org/3"

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`)
    const data = await response.json()
    return data
}

export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
    const data = await response.json()
    return data
}

export const getMovieDetails = async (movieId) => {
    // append credits to include cast info, release_dates to include certification info
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,release_dates`)
    const data = await response.json()
    return data
}

export const getMovieWatchProviders = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
    const data = await response.json()
    return data
}

export const getGenres = async () => {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    const data = await response.json()
    return data.genres || []
}

export const discoverMoviesByGenre = async (genreIds, page = 1) => {
    const ids = Array.isArray(genreIds) ? genreIds.join(',') : genreIds;
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${ids}&sort_by=popularity.desc&page=${page}`)
    const data = await response.json()
    return data
}
