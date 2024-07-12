import { IProduct } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit";

interface iCartInitialState extends IProduct {
  quantity: number;
  totalPrice: number;
}
const cartInitialState: iCartInitialState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item._id === product._id);
      console.log(action);

      if (existingProduct) {
        if (existingProduct.quantity < product.stockQuantity) {
          existingProduct.quantity += 1;
          existingProduct.totalPrice = existingProduct.quantity * product.price;
        }
      } else {
        state.push({ ...product, quantity: 1, totalPrice: product.price });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
