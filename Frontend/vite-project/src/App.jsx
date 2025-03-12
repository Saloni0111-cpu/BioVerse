import 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import Search from './Pages/Search.jsx';
import SearchResults from './Pages/SearchResults.jsx';
import Categories from './Pages/Categories.jsx';
import Shop from './Pages/Shop.jsx';
import Map from './Pages/Map.jsx';
import DashBoard from './Pages/DashBoard.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/map" element={<Map/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      {/* <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/> */}

    </Routes>
      
    </BrowserRouter>
  )
}

export default App; 

