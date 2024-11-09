import React from 'react'
import potter from '/home/myh/Downloads/myh.jpg'
import { lngj } from '../language/language'
import { useSelector } from 'react-redux'


export default function Section() {
  let langg = useSelector((state) => state.lang.value)
  return (
    <div className={`md:mt-36 mt-10 flex justify-center items-center flex-col text-black dark:text-white transition-all duration-300`} >
      <img className='transition-all duration-300 shadow-md h-44 sm:h-52 lg:h-64 xl:h-80 rounded-full m-3' src={potter} alt="" />
      <h1 className={`transition-all duration-300 text-center text-5xl sm:text-4xl lg:text-5xl xl:text-6xl m-3 font-semibold`} > {langg ? lngj.en.welcome : lngj.ar.welcome} </h1>
      <p className={`transition-all duration-300 mx-7 my-2 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:bg-gray-600 bg-slate-200`} > {langg ? lngj.en.p : lngj.ar.p} </p>
      <p className={`transition-all duration-300 mx-7 mt-2 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:bg-gray-600 bg-slate-200`} > {langg ? lngj.en.p2 : lngj.ar.p2} </p>
    </div>
  )
}
