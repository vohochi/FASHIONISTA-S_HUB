import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import ProductItem from '../../types/Products';

interface CartState {
  cartItems: ProductItem[];
  shippingFee: number;
  discountCode: string | null;
  discountAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  shippingFee: 0,
  discountCode: null,
  discountAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductItem>) => {
      const newItem = action.payload;
      // Kiểm tra _id có tồn tại chưa
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.cartItems.push(newItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    // Tăng số lượng
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    //Giảm số lượng
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item._id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },
    setShippingFee: (state, action: PayloadAction<number>) => {
      state.shippingFee = action.payload;
    },
    setDiscountCode: (state, action: PayloadAction<string | null>) => {
      state.discountCode = action.payload;
      if (action.payload) {
        if (action.payload === 'ANHCHIS') {
          console.log('ok');
          state.discountAmount = calculateDiscount(state.cartItems, 0.1);
        } else if (action.payload === 'SAOKUN') {
          state.discountAmount = calculateDiscount(state.cartItems, 0.2);
        } else {
          state.discountAmount = 0;
        }
      } else {
        state.discountAmount = 0;
      }
    },
  },
});

// Hàm tính toán giảm giá
const calculateDiscount = (cartItems: ProductItem[], discountRate: number) => {
  return (
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) *
    discountRate
  );
};

// Selector tính tổng tiền
export const selectCartTotal = (state: RootState) => {
  const subtotal = state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal + state.cart.shippingFee - state.cart.discountAmount;
  return Math.max(total, 0); // Đảm bảo tổng tiền không âm
};
export const selectShippingFee = (state: RootState) => state.cart.shippingFee;

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  setDiscountCode,
  setShippingFee,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
