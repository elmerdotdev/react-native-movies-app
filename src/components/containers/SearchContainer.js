import { useEffect, useState } from 'react'
import { VStack } from "native-base"
import ShowList from '../lists/ShowList'
import SearchForm from '../forms/SearchForm'

const SearchContainer = ({ navigation }) => {
  const [results, setResults] = useState([])
  const [selection, setSelection] = useState('movie')

  const updateResults = (results, type) => {
    setResults(results)
    setSelection(type)
  }

  return (
    <VStack width="100%" mb={24} pb={24}>
      <SearchForm updateResults={updateResults} />
      <ShowList shows={results} navigation={navigation} mediaType={selection} />
    </VStack>
  )
}

export default SearchContainer