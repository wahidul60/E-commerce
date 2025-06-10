import React from 'react'
import Navbar from '../Component/Navbar'
import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <div>
        <Navbar/>
        <TopBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout
