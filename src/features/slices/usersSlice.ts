import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the Room type
interface Room {
  id: number;
  name: string;
  images: string[];
  bedType: string;
  price: number;
  offerPrice: number;
  facilities: string[];
  available: boolean;
}

// Define the initial state type
interface RoomState {
  data: Room[];
  loading: boolean;
  error: string | null;
}

// Helper functions to load and save rooms to localStorage
const loadRoomsFromLocalStorage = (): Room[] => {
  const rooms = localStorage.getItem('rooms');
  return rooms ? JSON.parse(rooms) : [];
};

const saveRoomsToLocalStorage = (rooms: Room[]): void => {
  localStorage.setItem('rooms', JSON.stringify(rooms));
};

// Async thunk to fetch rooms
export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async (): Promise<Room[]> => {
  return loadRoomsFromLocalStorage();
});

// Async thunk to add a new room
export const addRoom = createAsyncThunk('rooms/addRoom', async (newRoom: Room): Promise<Room> => {
  const rooms = loadRoomsFromLocalStorage();
  const updatedRooms = [...rooms, newRoom];
  saveRoomsToLocalStorage(updatedRooms);
  return newRoom;
});

// Initial state
const initialState: RoomState = {
  data: [],
  loading: false,
  error: null,
};

// Room slice
const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action: PayloadAction<Room[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch rooms';
      })
      .addCase(addRoom.fulfilled, (state, action: PayloadAction<Room>) => {
        state.data.push(action.payload);
      });
  },
});

export default roomSlice.reducer;
