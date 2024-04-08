import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addCart(state, action) {
      const { id, name, sizes, color, images, price, amount } = action.payload;

      let existingProd = state.cartData.findIndex((currProd) => {
        if (currProd.id === id) {
          if (currProd.color === color) {
            return -1;
          } else {
            return 1;
          }
        }
      });
      console.log(existingProd);
      if (existingProd != -1) {
        state.cartData[existingProd].amount += amount;
      } else {
        state.cartData.push(action.payload);
      }
    },
    removeCart(state, action) {
      state.cartData = state.cartData.filter(
        (currProd) => currProd.id !== action.payload
      );
    },
    incInCart(state, action) {
      const { id } = action.payload;
      let updatedCart = state.cartData.find((currProd) => currProd.id === id);
      if (updatedCart) {
        updatedCart.amount = updatedCart.amount + 1;
      }
    },
    decInCart(state, action) {
      const { id } = action.payload;
      let updatedCart = state.cartData.find((currProd) => currProd.id === id);
      if (updatedCart && updatedCart.amount > 1) {
        updatedCart.amount = updatedCart.amount - 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addCart, removeCart, incInCart, decInCart } = cartSlice.actions;
