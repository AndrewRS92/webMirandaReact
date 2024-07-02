import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
  room: null,
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms(state, action) {
      state.rooms = action.payload;
    },
    setRoom(state, action) {
      state.room = action.payload;
    },
    clearRoom(state) {
      state.room = null;
    },
  },
});

export const { setRooms, setRoom, clearRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
