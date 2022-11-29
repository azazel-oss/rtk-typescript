import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TItem } from "../../data/cartItems";

type TCartState = {
  cartItems: TItem[];
  amount: number;
  total: number;
  isLoading: boolean;
};

const initialState: TCartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

console.log(cartSlice);

export default cartSlice.reducer;
