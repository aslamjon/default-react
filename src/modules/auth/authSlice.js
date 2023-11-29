import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isFetched: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isFetched = action.payload;
    },
    setTokens: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isFetched = false;
    },
    logout: (state, action) => {
      state.isFetched = false;
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loading, setTokens, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
