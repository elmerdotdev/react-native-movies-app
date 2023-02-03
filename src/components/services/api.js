import { API_KEY, BASE_URL } from "../config/api_config";

export const getMovies = async (type) => {
  if (type) {
    const res = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`)
    const data = await res.json()

    return data.results
  }
}

export const getTvShows = async (type) => {
  if (type) {
    const res = await fetch(`${BASE_URL}/tv/${type}?api_key=${API_KEY}`)
    const data = await res.json()

    return data.results
  }
}

export const getSearchResults = async (keyword, type) => {
  console.log(`${BASE_URL}/search/${type}?api_key=${API_KEY}`)
  if (keyword) {
    const res = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${keyword}`)
    const data = await res.json()

    return data.results
  }
}