import 'react'
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';
import Banner from '../Components/Banner.jsx';
import Text from '../Components/Text.jsx';
import Description from '../Components/DescriptionBox.jsx';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Text/>
        <Cards/>  
        <Description/>
    </>
  )
}

export default Home
