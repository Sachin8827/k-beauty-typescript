import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Cart, UserState, userObject, Product } from "../Types/Types";

const initialState:UserState = {
  user : userObject,
  isLoggedIn : false,
  cartMessage : undefined,
  buyNowProduct : undefined,
  cart : []
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action : {payload:User}) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user = userObject;
      state.isLoggedIn = false;
    },
    // getCart: (state, action) => {
    //   state.cart = state;
    // },
    addToCart: (state, action : {payload:Cart}) => {
      if(!state.user.cart){
        state.user.cart = []
      }

      const existingItem = state.user.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        state.cartMessage = `Item added`;
      } else {
        state.user.cart.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
        state.cartMessage = "Item added";
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; num: number }>) {
    
      if(state.user.cart){
        const item = state.user.cart.find(
          (item) => item.product.id === action.payload.id
        );
        if (item) {
          if (action.payload.num == 0) {
            item.quantity += 1;
          } else if (item.quantity > 1) {
            item.quantity -= 1; // Assuming num is negative for decrement
          }
        }
      }
    },
    removeCartItem: (state, action) => {
      state.user.cart?.splice(action.payload, 1);
    },
    buyNow: (state, action) => {
      state.buyNowProduct = action.payload;
    },
    setNullProduct: (state, action) => {
      state.buyNowProduct = undefined;
    },
    setAddress: (state, action) => {
      console.log(action.payload);
      state.user.street = action.payload.values.street;
      state.user.city = action.payload.values.city;
    },
  },
});
export const {
  setAddress,
  setUser,
  addToCart,
  updateQuantity,
  removeCartItem,
  logOut,
  buyNow,
  setNullProduct,
} = userSlice.actions;
export default userSlice.reducer;
