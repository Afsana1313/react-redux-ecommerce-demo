import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartProduct: [] },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.cartProduct.push({
        name: newItem.name,
        price: newItem.price,
        quantity: 1
      });
    }
  }
});

export const actions = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer
});
