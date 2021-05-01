import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./auth";
import questionReducer from "./questionSlice";
import postReducer from "./postSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  post: postReducer,
});

export default persistReducer(persistConfig, rootReducer);
