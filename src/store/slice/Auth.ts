import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';

interface AuthState {
  user: {
    id: string | null;
    email: string | null;
    // ... other user properties
  } | null;
  token: string | null;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

// Action bất đồng bộ cho đăng ký
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const response = await AuthService.registerUser(userData);
    return response;
  }
);

// Action bất đồng bộ cho đăng nhập
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: { email: string; password: string }) => {
    const response = await AuthService.loginUser(userData);
    return response;
  }
);

// Action bất đồng bộ cho quên mật khẩu
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string) => {
    const response = await AuthService.forgotPassword(email);
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.ok) {
          state.user = {
            id: action.payload.data.id,
            email: action.payload.data.email,
          };
          state.isLoggedIn = true;
          state.error = null;
        } else {
          state.error = action.payload.error;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.error('Lỗi đăng ký:', action.error);
        state.error = 'Lỗi đăng ký';
      })
      .addCase(loginUser.pending, (state) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.ok) {
          state.token = action.payload.data.token;
          state.user = action.payload.data.user;
          state.isLoggedIn = true;
          state.error = null;
        } else {
          state.error = action.payload.error;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error('Lỗi đăng nhập:', action.error);
        state.error = 'Lỗi đăng nhập';
      })
      .addCase(forgotPassword.pending, (state) => {
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        if (action.payload.ok) {
          // Xử lý phản hồi thành công
          state.error = null;
        } else {
          state.error = action.payload.error;
        }
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        console.error('Lỗi quên mật khẩu:', action.error);
        state.error = 'Lỗi quên mật khẩu';
      });
  },
});

export const { logout, setError } = authSlice.actions;

export default authSlice.reducer;
