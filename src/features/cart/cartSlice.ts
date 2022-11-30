import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import cartItems, { TItem } from "../../data/cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
});

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
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.isLoading = false;
    });
  },

  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }: PayloadAction<string>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      if (cartItem) cartItem.amount += 1;
    },
    decrease: (state, { payload }: PayloadAction<string>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      if (cartItem) cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      const { amount, total } = state.cartItems.reduce(
        (acc, curr) => {
          return {
            amount: acc.amount + curr.amount,
            total: acc.total + curr.amount * Number(curr.price),
          };
        },
        { amount: 0, total: 0 }
      );
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, calculateTotals, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
