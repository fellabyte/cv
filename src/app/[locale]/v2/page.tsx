import Edu from '@/components/v2/Edu'
import Footer from '@/components/v2/Footer'
import Nav from '@/components/v2/Nav'
import Projects from '@/components/v2/Projects'
import Skills from '@/components/v2/Skills'
import Socials from '@/components/v2/Socials'
import WorkingWith from '@/components/v2/WorkingWith'
import Welcome from '@/components/v2/Welcome'
import React from 'react'
import Experiance from '@/components/v2/Experiance'

const Home = () => {
  return (
    <div className={`duration-300 bg-gradient-to-tr from-gray-400 to-white dark:from-radixPurple dark:to-gray-800 select-none h-full w-screen`} >
      <Nav />
      <Welcome />
      <Edu />
      <Skills />
      <Experiance />
      <Projects />
      <WorkingWith />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home
