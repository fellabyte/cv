import React from 'react'
import { lngj } from '../language/language'
import { useSelector } from 'react-redux'
import elrayan from "../images/elrayanBlue.svg"
import elrayan2 from "../images/elrayanLogo.svg"
import fayaMenu from "../images/fayaMenu.webp"
import fayaMenu2 from "../images/fayaMenu2.png"
import env from "../images/logoWhite.png"
import env2 from "../images/logo.svg"

export default function Projects() {
  let langg = useSelector((state) => state.lang.value)
  let nigga = useSelector((state) => state.theme.value)
  return (
    <div className={`justify-center items-start my-14 grid justify-items-center`} >
        <h1 className={`bg-yellow-400 px-3 py-2 mx-3 mb-12 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-yellow-500 dark:text-yellow-800 rounded-lg font-semibold`} > {langg ? lngj.en.projects : lngj.ar.projects} </h1>
        <div className={`md:flex grid items-center transition-all duration-300`} >
          <a className={`mx-5`} href="https://1myh.github.io/elrayan"><img className={`w-44 sm:w-52 my-5 lg:w-72`} src={nigga ? elrayan2 : elrayan} alt="" /></a>
          <a className={`mx-5`} href="https://emenu.faya.dev/mado"><img className={`w-36 sm:w-44 md:ml-0 ml-4 lg:w-40 max-h-32 lg:max-h-28 object-cover filter saturate-150`} src={fayaMenu2} alt="" /></a>
          <a className={`mx-5`} href="https://emenu.faya.dev/mado"><img className={`w-44 sm:w-52 my-5 lg:w-60 lg:mr-10`} src={nigga ? env : env2} alt="" /></a>
        </div>
      </div>
  )
}