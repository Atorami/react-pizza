import { configureStore } from "@reduxjs/toolkit";
import { pizzaAPI } from "./services/pizzas";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pizzaAPI.reducerPath]: pizzaAPI.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaAPI.middleware),
});
