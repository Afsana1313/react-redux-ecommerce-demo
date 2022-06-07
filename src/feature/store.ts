import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
export type cartType = {
  name: string;
  price: string;
  image_link: string;
  id: number;
  quantity: number;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [] as cartType[],
    totalPrice: 0 as number,
    totalItem: 0 as number
  },
  reducers: {
    addToCart(state, action: PayloadAction<cartType>) {
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
      var value = state.totalPrice + parseFloat(newItem.price as string);
      value = parseFloat(value.toPrecision(4));
      state.totalPrice += value;
      state.totalItem += 1;
    }
  }
});

export const actions = cartSlice.actions;
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});
export const selectTotalPrice = () => (state: RootState) =>
  state.cart.totalPrice;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
