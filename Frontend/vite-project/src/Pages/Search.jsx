import 'react'
import Navbar from '../Components/Navbar.jsx'
import Banner from '../Components/Banner.jsx'
import SearchInput from '../Components/SearchInput.jsx'
import SearchCards from '../Components/SearchCards.jsx'

const Search = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <SearchInput/>
        <SearchCards/>
    </>
  )
}

export default Search
