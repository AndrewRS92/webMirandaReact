import { createSlice } from "@reduxjs/toolkit";
import { getRoomListThunk, addRoomThunk, deleteRoomThunk } from "./roomThunk";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    status: "idle",
    dataList: [],
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomListThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getRoomListThunk.fulfilled, (state, action) => {
        state.dataList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getRoomListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(addRoomThunk.fulfilled, (state, action) => {
        state.dataList.push(action.payload);
      })
      .addCase(deleteRoomThunk.fulfilled, (state, action) => {
        state.dataList = state.dataList.filter(room => room.id !== action.payload);
      });
  },
});

export const roomDataSelector = (state) => state.room.data;
export const roomDataListSelector = (state) => state.room.dataList;
export const roomStatusSelector = (state) => state.room.status;
export const roomErrorSelector = (state) => state.room.error;

export default roomSlice.reducer;