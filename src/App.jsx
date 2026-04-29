import React, { useContext } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './component/Home'
import Bollywood from './component/Bollywood'
import Hollywood from './component/Hollywood'
import Food from './component/Food'
import Fitness from './component/Fitness'
import Technology from './component/Technology'
import Navbar from './component/Navbar'
import './App.css'
import { ThemeContext } from './Context/ThemeContext'


const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className = {theme}>
      <BrowserRouter>

      <Navbar/>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/hollywood" element={<Hollywood/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/fitness" element={<Fitness/>}/>
        <Route path="/technology" element={<Technology/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




