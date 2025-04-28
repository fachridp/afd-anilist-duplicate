import { configureStore } from "@reduxjs/toolkit";

import selectedFilterManagerSlice from "../features/selectedFiltersManager";
import dropdownFiltersManagerSlice from "../features/dropdownFiltersManager";
import innerWidthManagerSlice from "../features/innerWidthManager";
import layoutManagerSlice from "../features/layoutManager";

const store = configureStore({
 reducer: {
  innerWidthManager: innerWidthManagerSlice,
  selectedFiltersManager: selectedFilterManagerSlice,
  dropdownFiltersManager: dropdownFiltersManagerSlice,
  layoutManager: layoutManagerSlice,
 }
})

export default store;