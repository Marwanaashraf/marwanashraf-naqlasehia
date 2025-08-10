import React, { useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  let { t, i18n } = useTranslation();
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 p-5 py-8">
      <div className="contain grid grid-cols-2 gap-5">
        <div className="space-y-2">
          <NavLink to="/">
            <img className="w-48" src={logo} alt={logo} />
          </NavLink>
          <p>
            {t("The website displays products with images, categories, titles, and prices.")}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl text-main font-bold">{t("Follow Us")}</h3>
          <div className="flex  p-1">
            <i className="fa-brands me-2 fa-facebook text-xl hover:text-blue-700 cursor-pointer"></i>
            <i className="fa-brands me-2 fa-instagram text-xl hover:text-red-500 cursor-pointer"></i>
            <i className="fa-brands me-2 fa-github text-xl hover:text-blue-600 cursor-pointer"></i>
            <i className="fa-brands me-2 fa-twitter text-xl hover:text-sky-400 cursor-pointer"></i>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-center my-3">
        <h3 className="text-slate-600 dark:text-slate-500">
          {t("Copy Right 2025 © By Naqla Sehia All Rights Reserved")}
        </h3>
      </div>
    </footer>
  );
}
