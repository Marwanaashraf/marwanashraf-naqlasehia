import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import $ from "jquery";
import logo from "../../assets/images/freshcart-logo.svg";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../Redux/Slices/LanguageSlice.js";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  //darkmode
  let [darkMode, setDarkMode] = useState(false);
  //language from reducer
  let { language } = useSelector((d) => d.lang);
  let disp = useDispatch();
  //translation
  let { t, i18n } = useTranslation();
  //change darkmode if click in button
  function changeMode() {
    if (darkMode == true) {
      //set state false
      setDarkMode(false);
      //set local storage
      localStorage.setItem("darkMode", "false");
      //remove dark from document
      document.querySelector("html").classList.remove("dark");
    } else {
      //set state true
      setDarkMode(true);
      //set local storage
      localStorage.setItem("darkMode", "true");
      //add dark from document
      document.querySelector("html").classList.add("dark");
    }
  }
  //change translation if click in button
  function handleLanguage() {
    if (language == "en") {
      //change language to arabic(i18n)
      i18n.changeLanguage("ar");
      //set in localStorage
      localStorage.setItem("language", "ar");
      //change language state in reducer
      disp(changeLang("ar"));
    } else if (language == "ar") {
      //change language to english(i18n)
      i18n.changeLanguage("en");
      //set in localStorage
      localStorage.setItem("language", "en");
      //change language state in reducer
      disp(changeLang("en"));
    }
  }

  useEffect(() => {
    //refresh case=> set darkMode with the last value before refresh
    if (localStorage.getItem("darkMode") != null) {
      //darkMode true
      if (localStorage.getItem("darkMode") == "true") {
        setDarkMode(true);
        document.querySelector("html").classList.add("dark");
      }
      //darkMode false
      else {
        setDarkMode(false);
        document.querySelector("html").classList.remove("dark");
      }
    }
  }, []);
  return (
    <>
      <nav className="bg-slate-100 dark:bg-slate-950 p-4 fixed top-0 left-0 right-0 z-30 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* logo */}
          <div className="logo ">
            <NavLink to="/">
              <img className="w-full" src={logo} alt="logo" />
            </NavLink>
          </div>
          {/* translation + mode */}
          <div className="flex items-center">
            {/* translation */}
            <button
              onClick={handleLanguage}
              className="border border-solid border-green-600  text-green-600 hover:bg-green-600 hover:text-white w-16 h-9  me-3 rounded-lg"
            >
              {language == "en" ? <p>Arabic</p> : <p>انجليزي</p>}
            </button>
            {/* dark mode */}
            <button
              onClick={changeMode}
              className="flex justify-center items-center rounded-lg size-10 shadow-lg bg-slate-300 dark:bg-slate-800 cursor-pointer"
            >
              {darkMode ? (
                <i className="fa-solid fa-lightbulb text-yellow-400"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
