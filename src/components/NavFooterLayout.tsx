import Navbar from "./Navbar"
import Footer from "./Footer"

import { Outlet } from "react-router-dom"

const NavFooterLayout = () => {
  
  return (
    <>
      <Navbar />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  )
}


export default NavFooterLayout