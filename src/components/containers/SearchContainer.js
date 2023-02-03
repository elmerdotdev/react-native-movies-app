import { useEffect, useState } from 'react'
import { VStack } from "native-base"
import ShowList from '../lists/ShowList'
import SearchForm from '../forms/SearchForm'
import StartSearch from '../layout/StartSearch'

const SearchContainer = ({ navigation }) => {
  const [results, setResults] = useState([])
  const [selection, setSelection] = useState('movie')
  const [searchStatus, setSearchStatus] = useState(false)

  const updateResults = (results, type) => {
    setSearchStatus(true)
    setResults(results)
    setSelection(type)
  }

  return (
    <VStack width="100%" mb={24} pb={24}>
      <SearchForm updateResults={updateResults} />
      {!searchStatus ? <StartSearch /> : <ShowList shows={results} navigation={navigation} mediaType={selection} />}
    </VStack>
  )
}

export default SearchContainer