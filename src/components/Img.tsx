import Image from 'next/image'
import React from 'react'

const Img = ({src, alt, sizes, className}:{src:string, alt:string, sizes:string, className:string}) => {
	return (
		<div className={`${sizes} relative`} >
			<Image className={className} src={src} alt={alt} sizes='100vw' fill />
		</div>
	)
}

export default Img
