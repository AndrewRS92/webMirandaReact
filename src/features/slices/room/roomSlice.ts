import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRoomListThunk, addRoomThunk, deleteRoomThunk } from "./roomThunk";
import { RootState } from "../../store";

 export interface Room {
  id: number;
  name: string;
  images: string[];
  bedType: string;
  price: number;
  offerPrice: number;
  facilities: string[];
  available: boolean;
  status?: string;
}

interface RoomState {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  dataList: Room[];
  data: Room | null;
  error: string | null;
  editRoom: Room | null;
}

const initialState: RoomState = {
  status: "idle",
  dataList: [],
  data: null,
  error: null,
  editRoom: null,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setEditRoom: (state, action: PayloadAction<Room | null>) => {
      state.editRoom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoomListThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getRoomListThunk.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.dataList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getRoomListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || null;
      })
      .addCase(addRoomThunk.fulfilled, (state, action: PayloadAction<Room>) => {
        state.dataList.push(action.payload);
      })
      .addCase(deleteRoomThunk.fulfilled, (state, action: PayloadAction<number>) => {
        state.dataList = state.dataList.filter((room) => room.id !== action.payload);
      });
  },
});

export const { setEditRoom } = roomSlice.actions;

export const roomDataSelector = (state: RootState) => state.room.data;
export const roomDataListSelector = (state: RootState) => state.room.dataList;
export const roomStatusSelector = (state: RootState) => state.room.status;
export const roomErrorSelector = (state: RootState) => state.room.error;
export const roomEditSelector = (state: RootState) => state.room.editRoom;

export default roomSlice.reducer;
