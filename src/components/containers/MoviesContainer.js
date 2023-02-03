import { useEffect, useState } from 'react'
import { VStack } from "native-base"
import { getMovies } from "../services/api"
import MoviesForm from '../forms/MoviesForm'
import ShowList from '../lists/ShowList'
import Loading from '../layout/Loading'

const MoviesContainer = ({ navigation }) => {
  const [movies, setMovies] = useState([])
  const [selection, setSelection] = useState('now_playing')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getMovies(selection).then(
      data => {
        setMovies(data)
        setIsLoading(false)
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
    <VStack width="100%" mb={10} pb={10}>
      <MoviesForm updateSelection={updateSelection} />
      {isLoading ? <Loading /> : <ShowList shows={movies} navigation={navigation} mediaType='movie' />}
    </VStack>
  )
}

export default MoviesContainer