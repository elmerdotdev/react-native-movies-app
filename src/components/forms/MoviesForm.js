import { useEffect, useState } from 'react'
import { FormControl, Center, Select, Box, Icon, CheckIcon } from 'native-base'

const MoviesForm = ({ updateSelection }) => {
  const [selection, setSelection] = useState('now_playing')

  useEffect(() => {
    updateSelection(selection)
  }, [selection])

  return (
    <Center>
      <Box maxW="300">
        <Select selectedValue={selection} defaultValue="now_playing" minWidth="200" bg='#ffffff' _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" color="#ffffff" />
        }} my={5} onValueChange={itemValue => setSelection(itemValue)}>
          <Select.Item label="Now Playing" value="now_playing" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
          <Select.Item label="Upcoming" value="upcoming" />
        </Select>
      </Box>
    </Center>
  )
}

export default MoviesForm