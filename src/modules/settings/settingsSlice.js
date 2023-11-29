import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "uz",
  mode: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// export const { increment, decrement } = settingsSlice.actions;
export default settingsSlice.reducer;
