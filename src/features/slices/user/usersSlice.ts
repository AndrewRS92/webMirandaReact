import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserListThunk, getUserThunk } from "./userThunk";
import { RootState } from "../../store";
import { User } from "../../../types"

interface UserState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  dataList: User[];
  data: User | null;
  error: string | null;
}

const initialState: UserState = {
  status: 'idle',
  dataList: [],
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: (state, action: PayloadAction<string>) => {
      state.dataList = state.dataList.filter(user => user.id !==  (action.payload));
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.dataList.push(action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const index = state.dataList.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.dataList[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserListThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getUserListThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.dataList = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(getUserListThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message || 'Unexpected Error';
      })
      .addCase(getUserThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message || 'Unexpected Error';
      });
  },
});

export const { removeUser, addUser, editUser } = userSlice.actions;
export const userDataSelector = (state: RootState) => state.user.data;
export const userDataListSelector = (state: RootState) => state.user.dataList;
export const userStatusSelector = (state: RootState) => state.user.status;
export const userErrorSelector = (state: RootState) => state.user.error;

export default userSlice.reducer;