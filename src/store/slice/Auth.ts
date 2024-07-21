import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  forgetUser,
  loginUser,
  registerUser,
  resetPasswordUser,
} from '../../services/AuthService';

export const login = createAsyncThunk(
  'api/v1/users/login',
  async (credentials: { email: string; password: string }) => {
    const response = await loginUser(credentials);
    console.log(response);
    const loginData = {
      image: response.data.user.image,
      fullName: response.data.user.username,
      email: response.data.user.email,
      accessToken: response.data.accessToken,
    };

    // Lưu đối tượng loginData vào localStorage
    localStorage.setItem('loginData', JSON.stringify(loginData));
    return response.data;
  }
);

export const RegisterAuth = createAsyncThunk(
  'users/create',
  async (userData: {
    fullName: string;
    email: string;
    password: string;
    password2: string;
  }) => {
    const response = await registerUser(userData);

    return response.data;
  }
);

export const forgetAuth = createAsyncThunk(
  'user/forgot',
  async (email: string) => {
    const response = await forgetUser(email);
    return response.data;
  }
);
export const resetPasswordAuth = createAsyncThunk(
  'users/create',
  async (userData: { token: string; newPassword: string }) => {
    const response = await resetPasswordUser(userData);

    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      // Xóa đối tượng loginData khỏi localStorage
      localStorage.removeItem('loginData');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        console.log(action.payload);
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
