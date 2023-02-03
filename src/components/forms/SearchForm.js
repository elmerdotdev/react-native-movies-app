import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Box, FormControl, Input, Stack, HStack, Icon, Select, CheckIcon, Button } from "native-base"
import { getSearchResults } from '../services/api'

const SearchForm = ({ updateResults }) => {
  const [formData, setFormData] = useState({
    keyword: null,
    selection: 'movie'
  })
  const [errors, setErrors] = useState({})

  const onSubmit = () => {
    if (validate()) {
      getSearchResults(formData.keyword, formData.selection).then(
        data => {
          updateResults(data, formData.selection)
        },
        error => {
          throw error
        }
      )
    }
  
  }

  const validate = () => {
    if (!formData.keyword || formData.keyword === "") {
      setErrors({...errors,
        name: 'Movie/TV show name is required.'
      })
      return false
    }

    setErrors({})
    return true
  }

  return (
    <Box w="100%" px={8} pt={2} pb={3}>
      <FormControl isRequired isInvalid={'name' in errors}>
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
              setFormData({...formData, keyword: value})
            }}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Choose Search Type:</FormControl.Label>
          <HStack>
            <Select selectedValue={formData.selection} defaultValue="movie" minWidth="200" bg='#ffffff' _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" color="#ffffff" />
            }} mt={2} onValueChange={itemValue => setFormData({...formData, selection: itemValue})}>
              <Select.Item label="Movie" value="movie" />
              <Select.Item label="Multi" value="multi" />
              <Select.Item label="TV" value="tv" />
            </Select>

            <Button ml={5} flex={1} mt={2} onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
              Search
            </Button>
          </HStack>
          {'name' in errors ? <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>Please select a search type</FormControl.HelperText>}
        </Stack>
      </FormControl>
    </Box>
  )
}

export default SearchForm