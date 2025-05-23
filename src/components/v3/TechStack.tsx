import Image from "next/image"
import React from "react"

const TechStack = ({ image, className, link, variant }:{ image:string, className?:string, link?:string, variant: "link" | "card" }) => {
	return(
		<>
			<div className={`border-[1px] ${variant === "card" ? "" : "hidden"} border-stone-600 grid justify-items-center items-center p-10 h-full w-full`}>
				<Image className={`w-auto ${className}`} src={image} alt="techStack" width={1080} height={1080} />
			</div>

			<a href={link ? link : ""} className={`${variant === "link" ? "" : "hidden"} border-[1px] border-stone-600 grid justify-items-center items-center p-10 h-full w-full`}>
				<Image className={`w-auto ${className}`} src={image} alt="techStack" width={1080} height={1080} />
			</a>
		</>
	)
}

export default TechStack