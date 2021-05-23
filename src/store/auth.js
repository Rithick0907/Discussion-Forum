import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

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

export const userSelector = createSelector(
  (store) => store.user,
  (user) => user.currentUser
);

export const { login, logout } = user.actions;
export default user.reducer;
