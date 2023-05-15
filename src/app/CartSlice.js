import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false, // useState
  //   cartItems: [],
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // ako item vec postoji onda samo povecaj broj za jedan
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item quantity increased`);
      } else {
        // ako ne postoji onda ga dodaj u korpu
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp); // action.payload - item

        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },
    setIncreaseItemQYT: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // ako item vec postoji onda samo povecaj broj za jedan
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item quantity increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQYT: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        // ako item vec postoji onda samo smanji broj za jedan
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item quantity decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQuantity += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
    },
  },
});

export const {
  setCloseCart,
  setOpenCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setClearCartItems,
  setDecreaseItemQYT,
  setIncreaseItemQYT,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const cartTotalAmount = (state) => state.cart.cartTotalAmount;
export const cartTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
