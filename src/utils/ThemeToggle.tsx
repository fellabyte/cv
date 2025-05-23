"use client"
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaCircleHalfStroke } from "react-icons/fa6";

const ThemeToggle = () => {
	const language = useLocale() === "ar"
	const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure theme is loaded before rendering UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent SSR mismatch
  return (
    <abbr
      title={
        language
          ? theme === "light"
            ? "تبديل للوضع الليلي"
            : "تبديل للوضع العادي"
          : theme === "dark"
          ? "switch to light mode"
          : "switch to dark mode"
      }
    >
      <button
        className="shadow-md size-9 flex justify-center items-center m-3 dark:bg-gray-600 hover:dark:bg-gray-500 bg-slate-200 hover:bg-slate-300 rounded-full transition-all"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <FaCircleHalfStroke />
      </button>
    </abbr>
  );
};

export default ThemeToggle;
