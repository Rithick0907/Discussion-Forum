import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loader: true,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, actions) => {
      actions.payload.posts.forEach((post) => state.posts.push(post));
      state.loader = false;
    },
    updatePosts: (state, actions) => {
      state.posts.unshift(actions.payload);
      state.loader = false;
    },
    resetPosts: (state, action) => initialState,
  },
});

export const postSelector = createSelector(
  (store) => store.post,
  (post) => post.posts
);

export const { addPosts, updatePosts, resetPosts } = postSlice.actions;

export default postSlice.reducer;
