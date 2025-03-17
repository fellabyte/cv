import Edu from '@/components/Edu'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import WorkingWith from '@/components/WorkingWith'
import Welcome from '@/components/Welcome'
import React from 'react'
import Experiance from '@/components/Experiance'

const Home = () => {
  return (
    <div className={`duration-300 bg-gradient-to-tr from-gray-400 to-white dark:from-radixPurple dark:to-gray-800 select-none h-full w-screen`} >
{/*       <Img
                key={index}
                src={icon.image}
                sizes={`mx-5 ${icon.big === true ? "lg:size-40 size-40 md:size-40" : icon.big === false ? "lg:size-28 size-20 md:size-24" : "lg:size-32 size-24 md:size-28"}`}
                className={`rounded-lg ${icon.invert ? 'dark:invert' : ''}`}
                alt='imagelogo'
              /> */}
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
