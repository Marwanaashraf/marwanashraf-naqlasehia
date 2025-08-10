import React, { useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../Redux/Slices/LanguageSlice.js";
//website's layout 
export default function Layout() {
  //language from reducer
  let { language } = useSelector((d) => d.lang);
  //Translation
  let { t, i18n } = useTranslation();
  let disp = useDispatch();
  useEffect(() => {
    //refresh case=> set translation with the last value before refresh
    if (localStorage.getItem("language") != null) {
      //english
      if (localStorage.getItem("language") == "en") {
        i18n.changeLanguage("en");
        disp(changeLang("en"));
      }
      //arabic
      else if (localStorage.getItem("language") == "ar") {
        i18n.changeLanguage("ar");
        disp(changeLang("ar"));
      }
    }
  }, []);
  return (
    //change direction
    <div
      className={language == "en" ? "text-left" : "text-right"}
      dir={language == "en" ? "ltr" : "rtl"}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
