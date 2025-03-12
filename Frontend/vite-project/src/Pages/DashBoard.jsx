import 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
// import Dashboard from '../Components/Dashboard.jsx'
// import Chatbot from '../Components/ChatBot.jsx'
import TodoList from '../Components/ToDo.jsx'

const DashBoard = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    {/* <Dashboard/> */}
    {/* <Chatbot/> */}
    <TodoList/>
    </>
  )
}

export default DashBoard;