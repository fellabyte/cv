"use client"
import { projects } from '@/utils/projects'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Projects() {
  const t = useTranslations("translation")
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) return null

  return (
    <div className={`justify-center items-start mt-10 grid justify-items-center`} >
      <h1 className={`bg-yellow-400 px-3 py-2 mx-3 mb-12 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-yellow-500 dark:text-yellow-800 rounded-lg font-semibold`} > {t("projects")} </h1>
      <div dir='ltr' className="w-full overflow-hidden relative">
        <Marquee direction='right' speed={100}>
          <div className="flex w-max space-x-10 justify-center items-center lg:gap-x-5 shadow-sm">
            {projects.concat(projects).map((icon, index) => (
              <Link href={icon.link} key={index} className={`h-fit`}>
                <Image src={icon.image} alt='image' width={1080} height={1080} className={`${index === 0 ? "ml-10" : ""} ${icon.big ? "w-20 sm:w-28" : "w-40 sm:w-64"} ${icon.invert ? "dark:invert" : ""}`} />
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}