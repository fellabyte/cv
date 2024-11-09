import React from 'react'
import { useSelector } from 'react-redux'
import { lngj } from '../language/language'
import faya from "../images/logo-2.png"

const WorkingWith = () => {
	let langg = useSelector((state) => state.lang.value)
	return (
		<div className={`grid justify-items-center justify-center items-center`} >
			<h1 className={`bg-green-400 px-3 py-2 mx-3 mb-12 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-green-500 dark:text-green-800 rounded-lg font-semibold`} > {langg ? lngj.en.workingWith : lngj.ar.workingWith} </h1>
			<img className={`w-72 mr-5 md:mr-0 lg:w-96`} src={faya} alt="" />
		</div>
	)
}

export default WorkingWith
