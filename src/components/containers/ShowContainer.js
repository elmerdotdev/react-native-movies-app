import { useEffect, useState } from 'react'
import { Center, Text, View, VStack } from "native-base"
import { getMovie, getTvShow, getPerson } from "../services/api"

const ShowContainer = ({ navigation, route }) => {
  const { showId, mediaType } = route.params
  const [data, setData] = useState({})

  if (mediaType === 'movie') {
      getMovie(showId).then(result => setData(result))
  } else if (mediaType === 'tv') {
      getTvShow(showId).then(result => setData(result))
  } else if (mediaType === 'person') {
    getPerson(showId).then(result => setData(result))
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Center>
      <VStack>

      </VStack>
    </Center>
  )
}

export default ShowContainer