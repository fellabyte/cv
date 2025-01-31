"use client"
import { useTranslations } from 'next-intl';
import React from 'react';

const Footer = () => {
  let t = useTranslations("translation")
  return (
    <footer className="dark:bg-gray-800 dark:text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} {t("footer")} </p>
      </div>
    </footer>
  );
};

export default Footer;
