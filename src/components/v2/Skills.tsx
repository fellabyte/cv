"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
import Marquee from 'react-fast-marquee'
import { skills } from '@/utils/skills'

export default function Skills() {
  const t = useTranslations("translation")
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="bg-purple-400 px-3 py-2 mx-3 mt-2 mb-5 sm:mb-10 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-purple-700 dark:text-purple-400 rounded-lg font-semibold">
        {t("skills")}
      </h1>
      <div dir='ltr' className="w-full overflow-hidden relative">
        <Marquee speed={100}>
          <div className="flex w-max space-x-10 justify-center items-center lg:gap-x-5 py-7 shadow-sm">
            {skills.map((icon, index) => (
              <icon.Icon key={index} style={{ color: icon.color }} className={`${index === 0 ? "pl-10" : ""} w-auto h-14 sm:h-20 lg:h-36`} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}
