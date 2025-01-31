"use client"
import React from 'react'
import { useTranslations } from 'next-intl'


export default function Section() {
  let t = useTranslations("translation")
  return (
    <div className={`md:pt-36 pt-10 flex justify-center items-center flex-col text-black dark:text-white transition-all duration-300`} >
      <img className='transition-all duration-300 shadow-md h-44 sm:h-52 lg:h-64 xl:h-80 rounded-full m-3' src={`/images/myh.jpg`} alt="" />
      <h1 className={`transition-all duration-300 text-center text-5xl sm:text-4xl lg:text-5xl xl:text-6xl m-3 font-semibold`} > {t("welcome")} </h1>
      <p className={`transition-all duration-300 mx-7 my-2 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:bg-gray-600 bg-slate-200`} > {t("p")} </p>
      <p className={`transition-all duration-300 mx-7 mt-2 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:bg-gray-600 bg-slate-200`} > {t("p2")} </p>
    </div>
  )
}
