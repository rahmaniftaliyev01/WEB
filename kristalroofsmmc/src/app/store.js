import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import contactReducer from "../features/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);
