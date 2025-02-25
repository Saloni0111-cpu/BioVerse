import 'react'
import Navbar from '../Components/Navbar.jsx'
import Banner from '../Components/Banner.jsx'
import SearchInput from '../Components/SearchInput.jsx'
import SearchCards from '../Components/SearchCards.jsx'
import SearchDescription from '../Components/SearchDescription.jsx'

const Search = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <SearchInput/>
        <SearchCards/>
        <SearchDescription/>
    </>
  )
}

export default Search
