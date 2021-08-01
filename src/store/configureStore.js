import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";
import reducer from "./rootReducer";

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);

export default store;
