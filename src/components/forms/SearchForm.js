import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Box, FormControl, Input, Stack, HStack, Icon, Select, CheckIcon, Button } from "native-base"
import { getSearchResults } from '../services/api'

const SearchForm = ({ updateResults }) => {
  const [keyword, setKeyword] = useState(null)
  const [selection, setSelection] = useState('movie')

  const onSubmit = () => {
    getSearchResults(keyword, selection).then(
      data => {
        updateResults(data, selection)
      },
      error => {
        throw error
      }
    )
  }

  return (
    <Box w="100%" px={8} py={2}>
      <FormControl isRequired>
        <Stack>
          <FormControl.Label>Search Movie/TV Show Name:</FormControl.Label>
          <Input
            type="text"
            placeholder="i.e. James Bond, CSI"
            bg="#ffffff"
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
            onChangeText={value => {
              setKeyword(value)
            }}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Choose Search Type:</FormControl.Label>
          <HStack>
            <Select selectedValue={selection} defaultValue="movie" minWidth="200" bg='#ffffff' _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" color="#ffffff" />
            }} my={2} onValueChange={itemValue => setSelection(itemValue)}>
              <Select.Item label="Movie" value="movie" />
              <Select.Item label="Multi" value="multi" />
              <Select.Item label="TV" value="tv" />
            </Select>

            <Button ml={5} flex={1} my={2} onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
              Search
            </Button>
          </HStack>
          <FormControl.ErrorMessage>Movie/TV show name is required.</FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default SearchForm