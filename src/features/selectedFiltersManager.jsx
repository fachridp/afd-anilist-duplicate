import { createSlice } from "@reduxjs/toolkit";

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants";

const initialState = {
 browse: 'Anime',
 checkboxDropdownFilters: {
  genres: [],
  format: [],
  streamingOn: [],
  mergedCheckboxFilters: [],
 },
 radioDropdownFilters: {
  year: '',
  season: '',
  sort: '',
  airingStatus: '',
  countryOfOrigin: '',
  sourceMaterial: '',
  mergedRadioFilters: [],
 },
 sliderFilters: {
  year: SLIDERS_VALUES.year.defaultValue,
  yearChange: SLIDERS_VALUES.year.defaultValue,
  episodes: SLIDERS_VALUES.episodes.defaultValue,
  episodesChange: SLIDERS_VALUES.episodes.defaultValue,
  duration: SLIDERS_VALUES.duration.defaultValue,
  durationChange: SLIDERS_VALUES.duration.defaultValue,
  minimumTagPercentage: SLIDERS_VALUES.minimumTagPercentage.defaultValue,
  minimumTagPercentageChange: SLIDERS_VALUES.minimumTagPercentage.defaultValue,
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
   state.checkboxDropdownFilters.mergedCheckboxFilters = state.checkboxDropdownFilters.genres.concat(state.checkboxDropdownFilters.format, state.checkboxDropdownFilters.streamingOn).filter(item => item != []);
  },
  setFilterRadio: (state, action) => {
   state.radioDropdownFilters[action.payload.keyFilter] = action.payload.valueFilter;
   state.radioDropdownFilters.mergedRadioFilters = Object.keys(state.radioDropdownFilters).map(key => key !== 'mergedRadioFilters' && state.radioDropdownFilters[key]).filter(item => item !== "" && item !== false);
  },
  setFilterSlider: (state, action) => {
   state.sliderFilters[action.payload.keyFilter] = action.payload.valueFilter;
  },
  resetFilter: (state, action) => {
   state[action.payload.dropdownType][action.payload.keyFilter] = action.payload.typeOfDropdown === 'checkbox' ? [] : '';
   state[action.payload.mergedDropdownType][action.payload.mergedFilterKey] = action.payload.mergedFilterValue;
  },
  resetAllFilters: (state) => {
   state.checkboxDropdownFilters = {
    genres: [],
    format: [],
    streamingOn: [],
    mergedCheckboxFilters: [],
   }

   state.radioDropdownFilters = {
    year: '',
    season: '',
    sort: '',
    airingStatus: '',
    countryOfOrigin: '',
    sourceMaterial: '',
    mergedRadioFilters: [],
   }

   state.sliderFilters = {
    year: SLIDERS_VALUES.year.defaultValue,
    yearChange: SLIDERS_VALUES.year.defaultValue,
    episodes: SLIDERS_VALUES.episodes.defaultValue,
    episodesChange: SLIDERS_VALUES.episodes.defaultValue,
    duration: SLIDERS_VALUES.duration.defaultValue,
    durationChange: SLIDERS_VALUES.duration.defaultValue,
    minimumTagPercentage: SLIDERS_VALUES.minimumTagPercentage.defaultValue,
    minimumTagPercentageChange: SLIDERS_VALUES.minimumTagPercentage.defaultValue,
   }
  }
 }
});

export const { setFilterBrowse, setFilterCheckbox, setFilterRadio, setFilterSlider, resetFilter, resetAllFilters } = selectedFilterManagerSlice.actions;
export default selectedFilterManagerSlice.reducer;