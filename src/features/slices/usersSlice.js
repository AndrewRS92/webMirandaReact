import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loadRoomsFromLocalStorage = () => {
  const rooms = localStorage.getItem('rooms');
  return rooms ? JSON.parse(rooms) : [];
};

const saveRoomsToLocalStorage = (rooms) => {
  localStorage.setItem('rooms', JSON.stringify(rooms));
};

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
  return loadRoomsFromLocalStorage();
});

export const addRoom = createAsyncThunk('rooms/addRoom', async (newRoom) => {
  const rooms = loadRoomsFromLocalStorage();
  const updatedRooms = [...rooms, newRoom];
  saveRoomsToLocalStorage(updatedRooms);
  return newRoom;
});

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default roomSlice.reducer;
