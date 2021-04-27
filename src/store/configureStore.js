import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import reducer from "./rootReducer";

const store = configureStore({
  reducer,
});

export const persistor = persistStore(store);

export default store;
