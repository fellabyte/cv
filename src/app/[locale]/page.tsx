import Edu from '@/components/Edu'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import WorkingWith from '@/components/WorkingWith'
import Welcome from '@/components/Welcome'
import React from 'react'

const Home = () => {
  return (
    <div className={`dark:bg-gray-800 duration-300 select-none h-full w-screen`} >
      <Nav />
      <Welcome />
      <Edu />
      <Skills />
      <Projects />
      <WorkingWith />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home
