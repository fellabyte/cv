"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

const skills = [
  { image: `/images/javascript.svg`, big: false, invert: false }, { image: `/images/typescript.svg`, big: false, invert: false }, { image: `/images/tailwind.svg`, big: null, invert: false }, { image: `/images/git.svg`, big: false, invert: false }, { image: `/images/next.svg`, big: true, invert: true }, { image: `/images/react.svg`, big: false, invert: false }, { image: `/images/redux.svg`, big: false, invert: false }, { image: `/images/zustand.svg`, big: false, invert: false }, { image: `/images/html.svg`, big: false, invert: false }, { image: `/images/css.svg`, big: false, invert: false }, { image: `/images/jotai.svg`, big: true, invert: true }
]

export default function Skills() {
  const t = useTranslations("translation")
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-10">
      <h1 className="bg-purple-400 px-3 py-2 mx-3 mt-2 mb-5 sm:mb-10 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-purple-700 dark:text-purple-400 rounded-lg font-semibold">
        {t("skills")}
      </h1>
      <div className="w-full overflow-hidden relative">
        <div className="flex w-max animate-marquee space-x-10 justify-center items-center lg:gap-x-5 py-7">
          {skills.concat(skills).map((icon, index) => (
            <img key={index} src={icon.image} alt="skill-icon" className={`mx-5 rounded-sm sm:rounded-lg ${icon.invert ? 'dark:invert' : ''} ${icon.big === true ? "lg:h-14 h-5 sm:h-10 md:h-12" : icon.big === false ? "lg:h-28 h-10 sm:h-20 md:h-24" : "lg:h-20 h-7 sm:h-14 md:h-16"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
