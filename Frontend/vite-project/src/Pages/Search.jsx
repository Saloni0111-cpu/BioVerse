import 'react'
import Navbar from '../Components/Navbar.jsx'
import Banner from '../Components/Banner.jsx'
import SearchInput from '../Components/SearchInput.jsx'
import SearchCards from '../Components/SearchCards.jsx'
import Footer from '../Components/Footer.jsx'
const Search = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <SearchInput/>
        <SearchCards/>
        <Footer/>
    </>
  )
}

export default Search
