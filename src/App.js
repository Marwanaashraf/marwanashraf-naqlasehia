import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout.jsx";
import { Provider } from "react-redux";
import { ConfigStore } from "./Redux/Store/Store.js";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Products from "./Pages/Products/Products.jsx";

export default function App() {
  let routes = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [{ index: true, element: <Products /> }],
      },
    ],
    { basename: "/marwanashraf-naqlasehia" }
  );
  return (
    <>
      <Provider store={ConfigStore}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}
