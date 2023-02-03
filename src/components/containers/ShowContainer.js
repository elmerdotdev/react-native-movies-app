import { useEffect, useState } from 'react'
import { Center, Heading, Text, View, VStack, Image } from "native-base"
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

  return (
    <Center>
      <VStack width="100%" p="10">
        <Heading mb={5} textAlign="center">{data.title || data.name}</Heading>
        {data.poster_path && <Image source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        }} alt="Alternate text" size="2xl" margin="auto" />}
        <Text my={5}>{data.overview}</Text>
        <Text fontSize="xs">Popularity: {data.popularity} | Release Date: {data.release_date}</Text>
      </VStack>
    </Center>
  )
}

export default ShowContainer