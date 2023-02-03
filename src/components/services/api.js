import { API_KEY, BASE_URL } from "../config/api_config";

// get movies
export const getMovies = async (type) => {
  if (type) {
    const res = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`)
    const data = await res.json()

    return data.results
  }
}

// get movie by id
export const getMovie = async (id) => {
  if (type) {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await res.json()

    return data
  }
}

// get tv shows
export const getTvShows = async (type) => {
  if (type) {
    const res = await fetch(`${BASE_URL}/tv/${type}?api_key=${API_KEY}`)
    const data = await res.json()

    return data.results
  }
}

// get tv show by id
export const getTvShow = async (id) => {
  if (type) {
    const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
    const data = await res.json()

    return data
  }
}

// get search results
export const getSearchResults = async (keyword, type) => {
  if (keyword) {
    const res = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${keyword}`)
    const data = await res.json()

    return data.results
  }
}