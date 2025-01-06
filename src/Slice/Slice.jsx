import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchapi = createAsyncThunk("fetchApi", async () => {
  let response = await axios.get('http://localhost:5000/Data');
  let res = response.data;
  return res;
});

export const cartReducre = createSlice({
  name: "cartReducre",
  initialState: { data: [], loading: true, cart: {} },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.cart[id] = (state.cart[id] || 0) + 1;
    },
    increment: (state, action) => {
      const id = action.payload;
      state.cart[id] += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.cart[id] > 1) {
        state.cart[id] -= 1;
      } else {
        delete state.cart[id];
      }
    }
  },
  extraReducers: (builder => {
    builder.addCase(fetchapi.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(fetchapi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
  })
});

export const { addToCart, increment, decrement } = cartReducre.actions;
export default cartReducre.reducer;