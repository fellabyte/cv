"use client"
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const Experiance = () => {
  const t = useTranslations("translation");
  const [experienceDuration, setExperienceDuration] = useState("");
	const language = useLocale() === "ar"
  useEffect(() => {
    const startDate = new Date("2023-01-01");
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    const days = currentDate.getDate() - startDate.getDate();
    const formattedDuration = `${years} ${language ? "سنوات" : "years"}, ${months} ${language ? "شهور" : "months"}, ${days} ${language ? "يوم" : "days"}`;
    setExperienceDuration(formattedDuration);
  }, []);

  return (
    <div dir={language ? "rtl" : "ltr"} className="justify-center items-start my-7 sm:my-14 grid justify-items-center">
      <h1 className="bg-orange-400 px-3 py-2 mx-3 my-2 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-orange-500 dark:text-orange-200 rounded-lg font-semibold">
        {t("experiance")}
      </h1>
      <p className="mt-10 transition-all duration-300 my-3 mx-7 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:text-white dark:bg-gray-600 bg-slate-200">
        {experienceDuration}
      </p>
    </div>
  );
};

export default Experiance;
