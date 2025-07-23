import TechStack from "@/components/v3/TechStack"
import LanguageToggle from "@/utils/LanguageToggle"
import { projects } from "@/utils/projects"
import { skills } from "@/utils/skills"
import { socials } from "@/utils/socials"
import ThemeToggle from "@/utils/ThemeToggle"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import React from "react"

const Home = async () => {
	const t = await getTranslations("v3")
	return(
		<main className={`dark:bg-black grid justify-items-center items-center ltr:font-mono py-10 xl:gap-16`}>
			<div className={`md:flex md:justify-center grid justify-items-center items-center w-full xl:w-[70rem] px-5 xl:px-0`}>
				<section className={`border-x-2 border-t-2 md:border-y-2 md:border-l-2 border-stone-600 grid justify-items-start items-center md:w-1/2 w-full p-5 md:p-10 md:h-[35vh]`}>
				<div className={`md:h-4/5 grid justify-items-start items-center w-full`}>
					<div className={`w-full flex justify-between items-center`}>
						<Image src={`/images/logo.png`} alt="logo" width={1080} height={1080} className={`size-24 dark:invert`} />
						<div className={`flex justify-center items-center`}>
							<LanguageToggle />
							<ThemeToggle />
						</div>
					</div>
					<h1 className={`text-4xl sm:text-5xl font-semibold my-2 lg:my-0`}>{t("hello")}</h1>
					<p className={`text-sm sm:text-lg`}>{t("desc")}</p>
				</div>
				</section>
				<section className={`border-2 border-stone-600 grid justify-items-start items-center md:w-1/2 w-full p-5 md:p-10 md:h-[35vh]`}>
					<div className={`grid justify-items-center items-center grid-cols-4 w-full text-3xl sm:text-4xl gap-y-10 dark:text-stone-400 text-black/70 py-4 sm:py-7`}>
						{socials.map(({ Icon, link }, index) => (
							<a href={link} key={index} target='_blank' rel='noreferrer noopener'>
								<Icon />
							</a>
						))}
					</div>
				</section>
			</div>
			<section className={`grid justify-items-center items-center w-full xl:w-[70rem] px-5 xl:px-0`}>
				<h1 className={`my-5 text-2xl font-semibold xl:hidden`}>{t("techStack")}</h1>
				<div className={`grid justify-items-center border-[1px] border-stone-600 items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full`}>
					{skills.map((skill, index) => (
						<TechStack Icon={skill.Icon} key={index} className={`h-10 sm:h-14 dark:text-stone-400 text-black/70`} variant="card" />
					))}
				</div>
			</section>
			<section className={`grid justify-items-center items-center w-full xl:w-[70rem] px-5 xl:px-0`}>
				<h1 className={`my-5 text-2xl font-semibold xl:hidden`}>{t("projects")}</h1>
				<div className={`grid justify-items-center border-[1px] border-stone-600 items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full`}>
					{projects.map((skill, index) => (
						<TechStack key={index} image={skill.image} link={skill.link} className={`${skill.big ? "w-20 sm:w-20" : "w-28 sm:w-44"} ${skill.invert ? "dark:invert" : ""} grayscale `} variant="link" />
					))}
				</div>
			</section>
		</main>
	)
}

export default Home


export const generateMetadata = async () : Promise<Metadata> => {
	const t = await getTranslations("seo")
	return {
		title: t("title"),
		description: t("desc"),
		keywords: ["محمد", "محمد يحيى", "محمد يحيى حسن", "محمد الفريجي", "محمد يحيى الفريجي", "محمد يحيى حسن الفريجي", "mohamad", "mohamad yahea", "mohamad yahea hassan"]
	}
}