import React from 'react'
import { lngj } from '../language/language'
import { useSelector } from 'react-redux'

export default function Projects() {
  let langg = useSelector((state) => state.lang.value)
  return (
    <div className={`justify-center items-start my-14 grid justify-items-center`} >
        <h1 className={`bg-red-400 px-3 py-2 mx-3 my-2 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-red-500 dark:text-red-200 rounded-lg font-semibold`} > {langg ? lngj.en.projects : lngj.ar.projects} </h1>
        <p className={`text-xl mt-10 text-red-400 font-semibold blur-sm hover:blur-none transition-all duration-300`} > {langg ? lngj.en.projects2 : lngj.ar.pojects2} </p>
      </div>
  )
}
