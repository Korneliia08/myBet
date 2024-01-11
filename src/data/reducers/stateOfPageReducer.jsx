import { createSlice } from "@reduxjs/toolkit";

const stateOfPageReducer = createSlice({
  name: "stateOfPage",
  initialState: {
    stateOfPage: [],
  },
  reducers: {
    setState(state, action) {
      return { ...state, stateOfPage: [action.payload] };
    },
  },
});

export const { setState } = stateOfPageReducer.actions;
export default stateOfPageReducer.reducer;
