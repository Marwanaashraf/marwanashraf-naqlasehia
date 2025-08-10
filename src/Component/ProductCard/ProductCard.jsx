import React from "react";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="cursor-pointer">
        <img
          className="w-full h-72"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        <div className="p-3 text-center">
          <span className="text-slate-600 dark:text-slate-500 font-semibold">
            {product.category}
          </span>
          <h3 className="text-lg font-bold ">{product.title}</h3>
          <p className="text-slate-600 dark:text-slate-500 text-lg">
            {product.price}EGP
          </p>
        </div>
      </div>
    </>
  );
}
