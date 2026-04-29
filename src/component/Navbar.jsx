import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
      
      <Link to="/">Home</Link>
      <Link to="/bollywood">Bollywood</Link>
      <Link to="/Hollywood">Hollywood</Link>
      <Link to="/food">Food</Link>
      <Link to="/fitness">Fitness</Link>
      <Link to="/technology">Technology</Link>

    </div>
  )
}

export default Navbar
