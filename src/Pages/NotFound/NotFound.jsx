import React from "react";
import notFound from "../../assets/images/error.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function NotFound() {
  let navigate = useNavigate();
  function navigteToMain() {
    navigate("/");
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="h-[100vh] flex flex-col space-y-3 justify-center items-center">
        <img src={notFound} alt="notFound" />
        <button onClick={navigteToMain} className="btn">
          <i className="fa-solid fa-house"></i> Back To Main
        </button>
      </div>
    </>
  );
}
