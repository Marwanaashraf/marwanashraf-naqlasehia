import { LanguageReducer } from "../Slices/LanguageSlice.js";
import { ProductsReducer } from "../Slices/ProductsSlice.js";

const { configureStore } = require("@reduxjs/toolkit");

export let ConfigStore = configureStore({
  reducer: {
    products: ProductsReducer,
    lang:LanguageReducer
  },
});
