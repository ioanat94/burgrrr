import { createSlice } from '@reduxjs/toolkit';

let order;

(function getStorageValue() {
  if (typeof window !== 'undefined') {
    order = localStorage.getItem('order')
      ? JSON.parse(localStorage.getItem('order'))
      : [];
    return order;
  }
})();

const cartSlice = createSlice({
  name: 'cart',
  initialState: order || {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem('order', JSON.stringify(state));
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      localStorage.setItem('order', JSON.stringify(state));
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
