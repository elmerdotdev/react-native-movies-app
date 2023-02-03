import { useEffect, useState } from 'react'
import { Box, Text, Center, Container, Select, FormControl } from "native-base"
import { getMovies } from "../services/api"
import MoviesForm from '../forms/MoviesForm'

const MoviesContainer = () => {
  const [movies, setMovies] = useState([])
  const [selection, setSelection] = useState('now_playing')

  useEffect(() => {
    getMovies(selection).then(
      data => {
        setMovies(data)
      },
      error => {
        throw error
      }
    )
  }, [selection])

  const updateSelection = (type) => {
    setSelection(type)
  }

  return (
    <Container>
      <MoviesForm updateSelection={updateSelection} />
      {movies.map((movie, i) => {
        return (
          <Box key={i}>
            <Text>{movie.title}</Text>
          </Box>
        )
      })}
    </Container>
  )
}

export default MoviesContainer