import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: null,
  reducers: {
    login: (user, action) => {},
    logout: (user, action) => {},
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
