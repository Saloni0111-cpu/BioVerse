import 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import Search from './Pages/Search.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/search" element={<Search/>}/>
      {/* <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/> */}

    </Routes>
      
    </BrowserRouter>
  )
}

export default App; 

