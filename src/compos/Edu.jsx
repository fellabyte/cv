import React from 'react'
import { lngj } from '../language/language'
import { useSelector } from 'react-redux'

export default function Edu() {
  let langg = useSelector((state) => state.lang.value)
  return (
    <div className={`justify-center items-start mt-20 sm:mt-40 grid justify-items-center`} >
      <h1 className={`bg-red-400 px-3 py-2 mx-3 my-2 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-red-500 dark:text-red-200 rounded-lg font-semibold`} > {langg ? lngj.en.edu : lngj.ar.edu} </h1>
      <p className={`blur-md mt-10 hover:blur-none transition-all duration-300 m-3 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:text-white dark:bg-gray-600 bg-slate-200`} > {langg ? lngj.en.edup : lngj.ar.edup} </p>
    </div>
  )
}
