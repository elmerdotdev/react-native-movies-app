import { useState } from 'react'
import { FormControl, Center, Select } from 'native-base'

const MoviesForm = ({ updateSelection }) => {
  const [selection, setSelection] = useState(null)

  return (
    <Center>
      <FormControl>
      <Select selectedValue={selection} defaultValue="now_playing" minWidth="200" mt={1} onValueChange={itemValue => updateSelection(itemValue)}>
          <Select.Item label="Now Playing" value="now_playing" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
          <Select.Item label="Upcoming" value="upcoming" />
        </Select>
      </FormControl>
    </Center>
  )
}

export default MoviesForm