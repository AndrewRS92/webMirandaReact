import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  user: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { setUsers, setUser, clearUser, logout } = usersSlice.actions;

export default usersSlice.reducer;
