import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 name: 'layout-1'
}

export const layoutManagerSlice = createSlice({
 name: 'layoutManagerReducer',
 initialState,
 reducers: {
  setActiveLayout: (state, action) => {
   state.name = action.payload;
  }
 }
});

export const { setActiveLayout } = layoutManagerSlice.actions;
export default layoutManagerSlice.reducer;