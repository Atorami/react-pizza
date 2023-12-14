import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const pizzaCounterSlice = createSlice({
  name: "pizza_counter",
  initialState: initialState,
  reducers: {},
});

export const { increment, decrement } = pizzaCounterSlice.actions;

export default pizzaCounterSlice.reducer;
