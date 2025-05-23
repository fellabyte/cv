"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { FaGlobe } from "react-icons/fa"

const LanguageToggle = () => {
	const pathname = usePathname()
	return(
		<Link href={pathname.includes("/ar") ? pathname.replace("/ar", "/en") : pathname.replace("/en", "/ar")} className={`text-xl`}>
			<FaGlobe />
		</Link>
	)
}

export default LanguageToggle