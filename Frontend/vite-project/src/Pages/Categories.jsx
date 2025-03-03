import 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import CategoryCard from '../Components/CategoryCard'
import Research from '../Components/Research.jsx'
import Chatbot from '../Components/ChatBot.jsx';


const Categories = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <CategoryCard/>
    <Research/>
    <Chatbot/>
    </>
  )
}

export default Categories