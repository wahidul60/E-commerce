import React from 'react'
import Navbar from '../Component/Navbar'
import TopBar from '../Layout/TopBar'
import Banner from '../Layout/Banner'
import Information from '../Layout/Information'
import Ads from '../Layout/Ads'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Information/>
      <Ads/>
    </div>
  )
}

export default Home
