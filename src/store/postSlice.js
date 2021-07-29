import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loader: true,
  },
  reducers: {
    addPosts: (state, actions) => {
      actions.payload.posts.forEach((post) => state.posts.push(post));
      state.loader = false;
    },
  },
});

export const postSelector = createSelector(
  (store) => store.post,
  (post) => post.posts
);

export const { addPosts } = postSlice.actions;

export default postSlice.reducer;
