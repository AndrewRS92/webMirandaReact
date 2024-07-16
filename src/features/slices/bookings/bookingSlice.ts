import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Booking type
interface Booking {
  id: number;
  roomNumber: string;
  customerName: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}

// Define the initial state type
interface BookingsState {
  bookings: Booking[];
  booking: Booking | null;
}

// Initial state
const initialState: BookingsState = {
  bookings: [],
  booking: null,
};

// Bookings slice
const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings(state, action: PayloadAction<Booking[]>) {
      state.bookings = action.payload;
    },
    setBooking(state, action: PayloadAction<Booking | null>) {
      state.booking = action.payload;
    },
    clearBooking(state) {
      state.booking = null;
    },
  },
});

export const { setBookings, setBooking, clearBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
