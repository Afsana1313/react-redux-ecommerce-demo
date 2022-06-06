import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
    totalPrice: 0,
    totalItem: 0
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(state.cartProduct);
      //  let newCart = [state.cartProduct, newItem]
      // state.cartProduct.push({ name: newItem.name });
      state.cartProduct.push({
        name: newItem.name,
        price: newItem.price,
        image_link: newItem.image_link,
        id: newItem.id,
        quantity: 1
      });
    }
  }
});

export const actions = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer
});
