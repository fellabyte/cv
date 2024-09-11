import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faInstagram, faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'
import { lngj } from '../language/language'

export default function Socials() {
  let langg = useSelector((state) => state.lang.value)
  return (
    <div className={`justify-center items-start mt-14 mb-6 grid justify-items-center`} >
      <h1 className={`bg-blue-400 px-3 py-2 mx-3 my-2 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-blue-500 dark:text-blue-200 rounded-lg font-semibold`} > {langg ? lngj.en.socials : lngj.ar.socials} </h1>
      <div className={`mt-10`} >
        {/* telegram */}
        <a className={`mx-2 text-blue-400 dark:text-blue-400 hover:text-gray-600 dark:hover:text-slate-400`} href="https://t.me/myh_js"><FontAwesomeIcon size='2x' icon={faTelegram} /></a>
        {/* twitter */}
        <a className="mx-2 dark:text-white hover:text-gray-600 dark:hover:text-slate-400" href="https://x.com/ilovieraq" ><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
        {/* instagram */}
        <a className={`mx-2 text-red-400 dark:text-red-400 hover:text-gray-600 dark:hover:text-slate-400`}  href="https://instagram.com/iloviraq/"><FontAwesomeIcon size='2x' icon={faInstagram} /></a>
        {/* github */}
        <a className="mx-2 dark:text-white hover:text-gray-600 dark:hover:text-slate-400" href="https://github.com/1myh"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
        {/* linkedin */}
        <a className={`mx-2 text-blue-400 dark:text-blue-400 hover:text-gray-600 dark:hover:text-slate-400`} href=''><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
      </div>
    </div>
  )
}
