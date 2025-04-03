import React from 'react'
import logo from "../assets/ABSOLUTE CINEMA.png"
import "./Navbar.css"
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='header-navbar'>
        <img src={logo} alt="App logo"/>
        <nav className='navlink-container'>
          <NavLink className="link" to={'/'}>Home</NavLink>
        </nav>
    </div>
  )
}
