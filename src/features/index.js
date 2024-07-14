import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './slices/room/roomSlice';

const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

export default store;
