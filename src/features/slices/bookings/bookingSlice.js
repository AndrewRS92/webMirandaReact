import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  booking: null,
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings(state, action) {
      state.bookings = action.payload;
    },
    setBooking(state, action) {
      state.booking = action.payload;
    },
    clearBooking(state) {
      state.booking = null;
    },
  },
});

export const { setBookings, setBooking, clearBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
