import { Box, Heading, HStack, Text, VStack, Image, Button, Divider } from "native-base"

const ShowListItem = props => {
  const { image, title, popularity, release_date, id, mediaType, navigation } = props

  return (
    <Box>
      <HStack my={2} pl={3} pr={6} alignItems="center">
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w300/${image}`
        }} alt="Alternate Text" size="xl" />
        <VStack px={2} width="100%" flex={1}>
          <Heading fontSize="md">{title}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release date: {release_date}</Text>
          <Button
            onPress={() => {
              navigation.navigate('Show', {
                title,
                mediaType,
                showId: id
              })
            }}
          >View</Button>
        </VStack>
      </HStack>
      <Divider my={1} />
    </Box>
  )
}

export default ShowListItem