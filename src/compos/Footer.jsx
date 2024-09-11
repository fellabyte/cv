import React from 'react';
import { lngj } from '../language/language'
import { useSelector } from 'react-redux'

const Footer = () => {
  let langg = useSelector((state) => state.lang.value)
  return (
    <footer className="dark:bg-gray-800 dark:text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} {langg ? lngj.en.footer : lngj.ar.footer} </p>
      </div>
    </footer>
  );
};

export default Footer;
