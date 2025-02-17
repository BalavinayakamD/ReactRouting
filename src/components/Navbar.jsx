import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <nav>
        <ul>
            <li><a onClick={() => navigate("/")}>Home</a></li>
            <li><a onClick={() => navigate("/main")}>MainPage</a></li>
            <li><a onClick={() => navigate("/about")}>About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
