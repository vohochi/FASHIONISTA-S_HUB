import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  orderAll,
  orderByEmail,
  orderCreate,
  orderPayment,
} from '../../services/OrderService';

export const createOrder = createAsyncThunk(
  'orders/create',
  async (credentials) => {
    try {
      const response = await orderCreate(credentials);
      await orderPayment();
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const byEmailOrder = createAsyncThunk(
  'orders/byEmail',
  async (credentials: string) => {
    try {
      const response = await orderByEmail(credentials);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
export const getAllOrder = createAsyncThunk('orders/getAll', async () => {
  try {
    const response = await orderAll();
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(byEmailOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default orderSlice.reducer;
