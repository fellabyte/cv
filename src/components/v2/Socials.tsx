"use client"
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

export default function Socials() {
  const t = useTranslations("translation")
  return (
    <div className={`mt-14 mb-6 grid justify-items-center items-center w-full`} >
      <h1 className={`bg-blue-400 px-3 py-2 mx-3 my-2 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-blue-500 dark:text-blue-200 rounded-lg font-semibold`} > {t("socials")} </h1>
      <div className={`mt-10 flex justify-center items-center w-full`} >
        {/* telegram */}
        <a className={`mx-2 text-blue-400 dark:text-blue-400 hover:text-gray-600 dark:hover:text-slate-400`} href="https://t.me/fellabyte"> <FaTelegram className={`text-3xl`} /> </a>
        {/* twitter */}
        <a className="mx-2 dark:text-white hover:text-gray-600 dark:hover:text-slate-400" href="https://x.com/fellabyte" > <FaXTwitter className={`text-3xl`} /> </a>
        {/* instagram */}
        <a className={`mx-2 text-red-400 dark:text-red-400 hover:text-gray-600 dark:hover:text-slate-400`} href="https://instagram.com/fellabyte"> <FaInstagram className={`text-3xl`} /> </a>
        {/* github */}
        <a className="mx-2 dark:text-white hover:text-gray-600 dark:hover:text-slate-400" href="https://github.com/fellabyte"> <FaGithub className={`text-3xl`} /> </a>
        {/* linkedin */}
        <a className={`mx-2 text-blue-400 dark:text-blue-400 hover:text-gray-600 dark:hover:text-slate-400`} href='https://www.linkedin.com/in/fellabyte'> <FaLinkedin className={`text-3xl`} /> </a>
      </div>
    </div>
  )
}
