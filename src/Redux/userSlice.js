// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("🚀 ~ file: userSlice.js:13 ~ action:", action.payload);
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, setLoading, setError, removeUser } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
