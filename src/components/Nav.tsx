"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaGlobe } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { FaCircleHalfStroke } from 'react-icons/fa6'
import Link from 'next/link'

export default function Nav() {
  const language = usePathname().includes('/ar')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure theme is loaded before rendering UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent SSR mismatch

  return (
    <div className="fixed flex justify-center items-center z-50">
      <abbr title={
        language
          ? (theme === "light" ? "تبديل للوضع الليلي" : "تبديل للوضع العادي")
          : (theme === "dark" ? "switch to light mode" : "switch to dark mode")
      }>
        <button
          className="shadow-md size-9 flex justify-center items-center m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <FaCircleHalfStroke />
        </button>
      </abbr>

      <Link href={language ? pathname.replace("/ar", "/en") : pathname.replace("/en", "/ar")}>
        <abbr title={language ? "switch to english" : "تبديل للغة العربية"}>
          <button className="shadow-md size-9 flex justify-center items-center m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all">
            <FaGlobe />
          </button>
        </abbr>
      </Link>
    </div>
  )
}
