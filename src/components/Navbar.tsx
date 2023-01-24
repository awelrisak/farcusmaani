import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div 
    id="navbar"
    className="h-10 bg-gray-900 flex  items-baseline sticky space-x-4 top-0 py-2 mb-2 "
    >
    <Link
      to="/"
      className="mb-4 grow text-slate-300 font-bold text-md"
    >
      Far-cusmaani.com
    </Link>
    
    <Link 
      to="baro"
      className="text-white text-md font-bold space-2 underline underline-white"
    >
      Baro
    </Link>
       <Link 
      to="baro"
      className="text-white text-md font-bold space-2 underline underline-white"
    >
      About us
    </Link>
    </div>
  )
}

export default Navbar