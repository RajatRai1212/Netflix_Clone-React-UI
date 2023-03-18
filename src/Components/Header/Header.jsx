import React from 'react'
import logo from "./Logonetflix.png"
import '../Home/Home.scss'
import{ImSearch} from "react-icons/im"

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="logo" />
        <div className="navbar">
            <Link to ="/tvshows" > TV Shows</Link>
            <Link to ="/movies" > Movies</Link>
            <Link to ="/recently_added" > Recently Added</Link>
            <Link to ="/my_list" > My List </Link>
        </div>
        <ImSearch color='white' cursor='pointer' size = "1rem"/>
    </nav>
  )
}

export default Header