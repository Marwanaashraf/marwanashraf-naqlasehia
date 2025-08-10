import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Slices/ProductsSlice.js";
import { useTranslation } from "react-i18next";
import ProductCard from "../../Component/ProductCard/ProductCard.jsx";
import { Toaster } from "react-hot-toast";
import Loading from "../../Component/Loading/Loading.jsx";
import { Helmet } from "react-helmet";
export default function Products() {
  //state from productReducer
  let { productsList, isLoading } = useSelector((d) => d.products);
  //translation
  let { t, i18n } = useTranslation();
  let disp = useDispatch();
  useEffect(() => {
    //get product data
    disp(getProducts());
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Toaster position="top-center" />
      </div>
      {/* loading */}
      {isLoading ? (
        <Loading />
      ) : (
        // product page
        <div className="contain py-24">
          <h1 className="text-5xl font-bold text-main">{t("products")}</h1>
          <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 my-12 gap-8">
            {productsList.map((ele) => {
              return <ProductCard key={ele.id} product={ele} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
