"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
import Marquee from 'react-fast-marquee'
import { skills } from '@/utils/skills'

export default function Skills() {
  const t = useTranslations("translation")
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-10">
      <h1 className="bg-purple-400 px-3 py-2 mx-3 mt-2 mb-5 sm:mb-10 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-purple-700 dark:text-purple-400 rounded-lg font-semibold">
        {t("skills")}
      </h1>
      <div className="w-full overflow-hidden relative">
        <Marquee speed={70}>
          <div className="flex w-max space-x-10 justify-center items-center lg:gap-x-5 py-7">
            {skills.map((icon, index) => (
              <img key={index} src={icon.image} alt="skill-icon" className={`mx-5 ${icon.invert ? 'dark:invert' : ''} ${icon.big === true ? "lg:h-14 h-9 sm:h-10 md:h-12" : icon.big === false ? "lg:h-28 h-[67px] sm:h-20 md:h-24" : "lg:h-20 h-12 sm:h-14 md:h-16"} ${index === 0 ? "pl-10" : ""}`} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}
