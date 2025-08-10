import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../Api/getAllProducts.js";
export let getProducts = createAsyncThunk(
  "products/getProducts",
  getAllProducts
);
let productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    isLoading: true,
  },
  extraReducers: (builder) => {
    //pending
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    //success
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.isLoading = false;
    });
    //failed
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = true;
    });
  },
});
export let ProductsReducer = productsSlice.reducer;
