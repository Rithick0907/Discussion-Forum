import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    questionId: null,
    questionName: null,
  },
  reducers: {
    setQuestionInfo: (state, action) => {
      state.questionId = action.payload.questionId;
      state.questionName = action.payload.questionName;
    },
  },
});

export const { setQuestionInfo } = questionSlice.actions;

export const selectQuestionId = createSelector(
  (state) => state.question,
  (question) => question.questionId
);
export const selectQuestionName = createSelector(
  (state) => state.question,
  (question) => question.questionName
);

export default questionSlice.reducer;
