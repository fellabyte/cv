import React from 'react'
import tailwind from '/home/myh/Downloads/tailwind.svg'
import react from '/home/myh/Downloads/react.svg'
import redux from '/home/myh/Downloads/redux.svg'
import git from '/home/myh/Downloads/git.svg'
import typescript from '/home/myh/Downloads/typescript.svg'
import javascript from '/home/myh/Downloads/javascript.svg'
import html from '/home/myh/Downloads/html.svg'
import css from '/home/myh/Downloads/css.svg'


import { lngj } from '../language/language'
import { useSelector } from 'react-redux'


export default function Skills() {
  let langg = useSelector((state) => state.lang.value)
  return (
    <div className={`justify-center items-start mt-10 sm:mt-10 grid justify-items-center`} >
        <h1 className={`bg-purple-400 px-3 py-2 mx-3 mt-2 mb-10 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-purple-700 dark:text-purple-400 rounded-lg font-semibold`} > {langg ? lngj.en.skills : lngj.ar.skills} </h1>
        <div className={`grid justify-items-center align-middle grid-cols-2 xl:flex my-5 blur-md hover:blur-none transition-all duration-300 xl:justify-center xl:items-center`} >
          <img className={`h-[4.5rem] md:h-20 rounded-lg lg:h-28 mx-5 my-4`} src={javascript} alt="" />
          <img className={`h-[4.5rem] md:h-20 lg:h-28 mx-5 my-4`} src={typescript} alt="" />
          <div className={`flex justify-center items-center`} >
            <img className={`h-[3.5rem] md:h-20 lg:h-[6rem] mx-5 my-4`} src={tailwind} alt="" />
          </div>
          <img className={`h-20 md:h-24 lg:h-32 mx-5 my-4`} src={git} alt="" />
          <img className={`h-[4.5rem] md:h-20 lg:h-[7rem] mx-5 my-4 animate-very-slow-spin`} src={react} alt="" />
          <img className={`h-[4.5rem] md:h-20 lg:h-[6.5rem] mx-5 my-4`} src={redux} alt="" />
          <img className={`h-[4.5rem] md:h-20 lg:h-28 mx-5 my-4`} src={html} alt="" />
          <img className={`h-[4.5rem] md:h-20 lg:h-28 mx-5 my-4`} src={css} alt="" />
        </div>
      </div>
  )
}
