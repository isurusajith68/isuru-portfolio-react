import React from 'react'
import Navbar from '../components/Navbar'
import HomeT from '../components/HomeT'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'

import Skills from '../components/Skills'
import Project from '../components/MyProject'
import { Form } from '../components/Form'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeT />
        <AboutMe />
        <Skills />
        <Project/>
        <Form/>
        <Footer />
    </div>
  )
}

export default Home