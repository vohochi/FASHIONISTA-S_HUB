import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cart';
import authSlice from './slice/Auth';
import usersSlice from './slice/Users';

// Khởi tạo state từ localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

// Tạo Redux store với reducer của giỏ hàng và state được khởi tạo từ localStorage
const store = configureStore({
  reducer: { cart: cartReducer, auth: authSlice, users: usersSlice },
  preloadedState: persistedState,
});

// Lưu trữ state vào localStorage sau mỗi thay đổi
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
