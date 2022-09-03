import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartReducer],
  (cartSlice) =>
    cartSlice.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cartSlice) =>
    cartSlice.cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
