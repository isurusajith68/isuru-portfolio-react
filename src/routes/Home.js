import React from 'react'
import Navbar from '../components/Navbar'
import HomeT from '../components/HomeT'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeT />
        <AboutMe />
        <Footer />
    </div>
  )
}

export default Home