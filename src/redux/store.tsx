import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

