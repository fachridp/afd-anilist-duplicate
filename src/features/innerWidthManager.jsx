import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 width: 0,
}

export const innerWidthManagerSlice = createSlice({
 name: "innerWidthManagerReducer",
 initialState,
 reducers: {
  setInnerWidth: (state, action) => {
   state.width = action.payload;
  }
 }
});

export const { setInnerWidth } = innerWidthManagerSlice.actions;
export default innerWidthManagerSlice.reducer;