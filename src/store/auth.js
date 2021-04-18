import { createSelector, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const selectUser = createSelector((state) => state.currentUser);

export const { login, logout } = user.actions;
export default user.reducer;
