import { Text, View } from "native-base"

const ShowContainer = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.mediaType} {route.params.showId}</Text>
    </View>
  )
}

export default ShowContainer