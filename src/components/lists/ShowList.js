import { FlatList } from "native-base"
import ShowListItem from "../listItems/ShowListItem"

const ShowList = ({ navigation, shows, mediaType }) => {
  return (
    <FlatList
      data={shows}
      renderItem={({ item }) => (
        <ShowListItem
          image={item.poster_path}
          title={item.title || item.name}
          popularity={item.popularity}
          release_date={item.release_date || ''}
          id={item.id}
          mediaType={item.media_type || mediaType}
          navigation={navigation}
        />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default ShowList