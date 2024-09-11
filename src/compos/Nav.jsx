import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../stores/theme'
import { setLang } from '../stores/lang'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
  let nigga = useSelector((state) => state.theme.value)
  let dispatch = useDispatch()
  return (
    <div className={``} >
        <button className={`shadow-md px-3 py-2 m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all`} onClick={() => dispatch(setTheme())} ><FontAwesomeIcon icon={faCircleHalfStroke} color={nigga ? "white" : "black"} /></button>
        <button className={`shadow-md px-3 py-2 m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all`} onClick={() => dispatch(setLang())} ><FontAwesomeIcon icon={faGlobe} color={nigga ? "white" : "black"} /></button>
      </div>
  )
}
