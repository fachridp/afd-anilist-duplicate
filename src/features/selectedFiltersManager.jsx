import { createSlice } from "@reduxjs/toolkit";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

const initialState = {
 browse: 'Anime',
 checkboxDropdownFilters: {
  genres: [],
  format: [],
  streamingOn: [],
 },
 radioDropdownFilters: {
  year: '',
  season: '',
  sort: '',
  airingStatus: '',
  countryOfOrigin: '',
  sourceMaterial: '',
 },
 sliderFilters: {
  year: SLIDERS_VALUES.year.defaulValue,
  episodes: SLIDERS_VALUES.episodes.defaulValue,
  duration: SLIDERS_VALUES.duration.defaulValue,
  minimumTagPercentage: SLIDERS_VALUES.minimumTagPercentage.defaultValue
 }
}

export const selectedFilterManagerSlice = createSlice({
 name: "selectedFilterManagerReducer",
 initialState,
 reducers: {
  setFilterBrowse: (state, action) => {
   state.browse = action.payload;
  },
  setFilterCheckbox: (state, action) => {
   state.checkboxDropdownFilters[action.payload.keyFilter] = action.payload.valueFilter;
  },
  setFilterRadio: (state, action) => {
   state.radioDropdownFilters[action.payload.keyFilter] = action.payload.valueFilter;
  },
  setFilterSlider: (state, action) => {
   state.sliderFilters[action.payload.keyFilter] = action.payload.valueFilter;
  }
 }
});

export const { setFilterBrowse, setFilterCheckbox, setFilterRadio, setFilterSlider } = selectedFilterManagerSlice.actions;
export default selectedFilterManagerSlice.reducer;