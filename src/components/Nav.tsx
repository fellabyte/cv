"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaGlobe } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { FaCircleHalfStroke } from 'react-icons/fa6'
import Link from 'next/link'

export default function Nav() {
  let language = usePathname().includes('/ar')
  let pathname = usePathname()
  let { theme, setTheme } = useTheme()
  return (
    <div className={`fixed flex justify-center items-center`} >
      <button className={`shadow-md size-9 flex justify-center items-center m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all`} onClick={() => setTheme(theme === "light" ? "dark" : "light")} > <FaCircleHalfStroke /> </button>
      
      <Link href={language ? pathname.replace("/ar", "/en") : pathname.replace("/en", "/ar")}>
        <button className={`shadow-md size-9 flex justify-center items-center m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all`}  > <FaGlobe /> </button>
      </Link>
    </div>
  )
}
