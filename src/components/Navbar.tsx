import React from "react"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
  
  /*const navLinkStyles = ( { isActive } : { isActive: boolean } ) => {
        return (
          isActive
            ?"text-white pb-2 px-2 text-md font-bold border-b border-b-2"
            :"text-slate-300 text-md"
        )
      }*/
     
  return (
    <header 
    id="navbar"
    className="h-10 bg-gray-900 flex items-center sticky  top-0 py-4 mb-2 "
    >
    <Link
      to="/"
      className="py-2 mb-4 grow text-slate-300 font-bold text-md"
    >
      Farcusmaani.com
    </Link>
    
    {/*<nav className="flex space-x-4 items-baseline">
    <NavLink 
      to="baro"
      className={navLinkStyles}
    >
      Baro
    </NavLink>
    <NavLink 
      to="blogs"
      className={navLinkStyles}
    >
      Blogs
    </NavLink>
       <NavLink 
      to="about"
      className={navLinkStyles}
    >
      About
    </NavLink>
    </nav>*/}
    </header>
  )
}

export default Navbar