import { useEffect, useState } from 'react'
import { Center, Select, Box, CheckIcon } from 'native-base'

const TvShowsForm = ({ updateSelection }) => {
  const [selection, setSelection] = useState('airing_today')

  useEffect(() => {
    updateSelection(selection)
  }, [selection])

  return (
    <Center>
      <Box maxW="300">
      <Select selectedValue={selection} defaultValue="airing_today" minWidth="200" bg='#ffffff' _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" color="#ffffff" />
      }} my={5} onValueChange={itemValue => setSelection(itemValue)}>
          <Select.Item label="Airing Today" value="airing_today" />
          <Select.Item label="On The Air" value="on_the_air" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top Rated" value="top_rated" />
        </Select>
      </Box>
    </Center>
  )
}

export default TvShowsForm