import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loader: true,
  },
  reducers: {
    addPosts: (state, actions) => {
      state.posts = actions.payload.posts;
      state.loader = false;
    },
  },
});

export const postSelector = createSelector(
  (store) => store.post,
  (post) => post.posts
);

export const loaderSelector = createSelector(
  (store) => store.post,
  (post) => post.loader
);

export const { addPosts } = postSlice.actions;

export default postSlice.reducer;
