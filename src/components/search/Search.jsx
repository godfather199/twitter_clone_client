import { useEffect, useState } from 'react'
import {SearchBar, SearchResult} from '../'
import { search_User_Service } from '../../services/userService'


function Search() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  
  // Search on every key-stroke
  useEffect(() => {
    if(searchText.trim().length === 0) {
      return setSearchResults([])
    }

    const search_Func = async () => {
      if (searchText.trim().length > 0) {
        const { users } = await search_User_Service(searchText);
        setSearchResults(users);
      }
    };

    search_Func();

  }, [searchText]) 


  return (
    <div className="">
      {/* Search user by name/username */}
      <div className="">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchResults={setSearchResults}
        />
      </div>

      {/* Display results */}
      {searchResults.length > 0 && (
        <div className="relative">
          <SearchResult searchResults={searchResults} />
        </div>
      )}
    </div>
  );
}

export default Search