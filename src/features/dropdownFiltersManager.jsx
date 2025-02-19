import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 browse: false,
 extraFilterButtons: {
  medium: false,
  large: false,
 },
 mobileNav: false,
 mainFilters: {
  genres: {
   medium: false,
   large: false,
  },
  year: {
   medium: false,
   large: false,
  },
  season: {
   medium: false,
   large: false,
  },
  format: {
   medium: false,
   large: false,
  },
  sort: {
   medium: false,
   large: false,
  },
  airingStatus: {
   medium: false,
   large: false,
  },
  streamingOn: {
   medium: false,
   large: false,
  },
  countryOfOrigin: {
   medium: false,
   large: false,
  },
  sourceMaterial: {
   medium: false,
   large: false,
  },
  publishingStatus: {
   medium: false,
   large: false,
  },
  readableOn: {
   medium: false,
   large: false,
  },
 },
 overlay: false,
 advancedGenresTag: false,
}

export const dropdownFiltersManagerSlice = createSlice({
 name: "dropdownFiltersManagerReducer",
 initialState,
 reducers: {
  toggleDropdownBrowse: (state) => {
   state.browse = !state.browse;
  },
  setExtraFilterButton: (state, action) => {
   state.extraFilterButtons[action.payload.screenSize] = !state.extraFilterButtons[action.payload.screenSize];
  },
  setMobileNav: (state, action) => {
   state.mobileNav = action.payload;
  },
  setMainFilters: (state, action) => {
   state.mainFilters[action.payload.filterName][action.payload.screenSize] = action.payload.valueFilter;
  },
  openOverlay: (state, action) => {
   state.overlay = action.payload.screenSize < 1024 && true;
  },
  resetOverlay: (state) => {
   state.overlay = false;
  },
  toggleAdvancedGenresTag: (state) => {
   state.advancedGenresTag = !state.advancedGenresTag;
  }
 }
});

export const { toggleDropdownBrowse, setExtraFilterButton, setMobileNav, setMainFilters, openOverlay, resetOverlay, toggleAdvancedGenresTag } = dropdownFiltersManagerSlice.actions;
export default dropdownFiltersManagerSlice.reducer;