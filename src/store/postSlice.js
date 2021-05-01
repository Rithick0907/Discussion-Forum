import { createSlice } from "@reduxjs/toolkit";

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

export const postSelector = (store) => store.post.posts;

export const loaderSelector = (store) => store.post.loader;

export const { addPosts } = postSlice.actions;

export default postSlice.reducer;
