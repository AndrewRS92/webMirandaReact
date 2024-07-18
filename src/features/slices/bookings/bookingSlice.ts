import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBookingListThunk } from "./bookingThunk";
import { RootState } from "../../store";
import { Booking } from "../../../types";

interface BookingState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  dataList: Booking[];
  data: Booking | null;
  error: string | null;
}

const initialState: BookingState = {
  status: 'idle',
  dataList: [],
  data: null,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    removeBooking: (state, action: PayloadAction<number>) => {
      state.dataList = state.dataList.filter(booking => booking.id !== action.payload);
    },
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.dataList.push(action.payload);
    },
    editBooking: (state, action: PayloadAction<Booking>) => {
      const index = state.dataList.findIndex(booking => booking.id === action.payload.id);
      if (index !== -1) {
        state.dataList[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingListThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBookingListThunk.fulfilled, (state, action: PayloadAction<Booking[]>) => {
        state.dataList = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(getBookingListThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message || 'Unexpected Error';
      });
  }
});

export const { removeBooking, addBooking, editBooking } = bookingSlice.actions;
export const bookingDataSelector = (state: RootState) => state.booking.data;
export const bookingDataListSelector = (state: RootState) => state.booking.dataList;
export const bookingStatusSelector = (state: RootState) => state.booking.status;
export const bookingErrorSelector = (state: RootState) => state.booking.error;

export default bookingSlice.reducer;
