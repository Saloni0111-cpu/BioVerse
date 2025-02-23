import 'react'
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';
import Banner from '../Components/Banner.jsx';
import Text from '../Components/Text.jsx';
import Description from '../Components/DescriptionBox.jsx';
import  Map  from '../Components/Map.jsx';
import Footer from '../Components/Footer.jsx';
import Tooltip from '../Components/Tooltip.jsx';;
const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Text/>
        <Cards/>  
        <Description/>
        <Map/>
        <Footer/>
        <Tooltip/>
    </>
  )
}

export default Home
