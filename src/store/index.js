import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/bookingsSlice';
import roomsReducer from './slices/roomsSlice';
import usersReducer from './slices/usersSlice';
import contactReducer from './slices/contactSlice';

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contact: contactReducer,
  },
});

export default store;
