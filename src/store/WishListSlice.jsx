import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const wishlistProducts = createSlice({
  name: "wishlist",
  initialState: {
    wishlistProds: [],
  },
  reducers: {
    addWishlist(state, action) {
      state.wishlistProds.push(action.payload);
    },
    removeWishlist(state, action) {
      state.wishlistProds = state.wishlistProds.filter((currElem) => {
        return currElem.id !== action.payload;
      });
    },
  },
});

export default wishlistProducts.reducer;
export const { addWishlist, removeWishlist } = wishlistProducts.actions;
