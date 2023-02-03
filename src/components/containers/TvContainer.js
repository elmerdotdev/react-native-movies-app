import { useEffect, useState } from 'react'
import { VStack } from "native-base"
import { getTvShows } from "../services/api"
import TvShowsForm from '../forms/TvShowsForm'
import ShowList from '../lists/ShowList'

const TvContainer = ({ navigation }) => {
  const [tvShows, setTvShows] = useState([])
  const [selection, setSelection] = useState('airing_today')

  useEffect(() => {
    getTvShows(selection).then(
      data => {
        setTvShows(data)
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
      <TvShowsForm updateSelection={updateSelection} />
      <ShowList shows={tvShows} navigation={navigation} mediaType='tv' />
    </VStack>
  )
}

export default TvContainer