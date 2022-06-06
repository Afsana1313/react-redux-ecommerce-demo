import { configureStore, createSlice } from "@reduxjs/toolkit";
type cartType = {
  name: string;
  price: string;
  image_link: string;
  id: number;
  quantity: number;
}[];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [] as cartType,
    totalPrice: 0 as number,
    totalItem: 0 as number
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
      state.totalPrice += parseFloat(newItem.price);
      state.totalItem += 1;
    }
  }
});

export const actions = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
