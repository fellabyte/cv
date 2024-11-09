import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Nav from './compos/Nav'
import Welcome from './compos/Welcome'
import Footer from './compos/Footer'
import Skills from './compos/Skills'
import Projects from './compos/Projects'
import Socials from './compos/Socials'
import Edu from './compos/Edu'
import WorkingWith from './compos/WorkingWith'


export default function App() {
  let nigga = useSelector((state) => state.theme.value)
  let langg = useSelector((state) => state.lang.value)
  useEffect(() => {
    if (nigga) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [nigga]);

  return (
    <div className={`dark:bg-gray-800 duration-300 ${langg ? "font-sans" : "font-cascadia"} select-none h-full w-screen`} >
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
