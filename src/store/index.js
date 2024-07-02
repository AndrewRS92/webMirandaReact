import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/bookingSlice';
import roomsReducer from './slices/roomSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
  },
});

export default store; 
