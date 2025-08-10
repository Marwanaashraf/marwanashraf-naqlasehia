import { createSlice } from "@reduxjs/toolkit";

let languageSlice = createSlice({
  name: "language",
  initialState: { language: "en" },
  reducers: {
    //change language
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});
export let LanguageReducer = languageSlice.reducer;
export let { changeLang } = languageSlice.actions;
