import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers, registerUser } from '../../services/AuthService';

export const fetchAllUsers = createAsyncThunk('users/fetchAll', async () => {
  const response = await getAllUsers();
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  'users/create',
  async (
    userData: {
      fullName: string;
      email: string;
      password: string;
      password2: string;
    },
    { dispatch }
  ) => {
    const response = await registerUser(userData);
    if (response) {
      dispatch(fetchAllUsers());
    }
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // .addCase(createUserAsync.fulfilled, (state, action) => {
    //   state.data.push(action.payload);
    // })
    // .addCase(updateUserAsync.fulfilled, (state, action) => {
    //   const updatedUser = action.payload;
    //   const index = state.data.findIndex(
    //     (user) => user.id === updatedUser.id
    //   );
    //       if (index !== -1) {
    //         state.data[index] = updatedUser;
    //       }
    //     })
    //     .addCase(deleteUserAsync.fulfilled, (state, action) => {
    //       const deletedUserId = action.payload;
    //       state.data = state.data.filter((user) => user.id !== deletedUserId);
    //     });
  },
});

export default usersSlice.reducer;
