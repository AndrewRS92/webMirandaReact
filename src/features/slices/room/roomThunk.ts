import { createAsyncThunk } from "@reduxjs/toolkit";
import { Room } from "./roomSlice";
import rooms from '../../../asset/RoomData.json';

export const getRoomListThunk = createAsyncThunk<Room[]>(
  'room/getRoomList',
  async () => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms') || '[]') as Room[];
    if (storedRooms.length > 0) {
      return storedRooms;
    } else {
      localStorage.setItem('rooms', JSON.stringify(rooms));
      return rooms as Room[];
    }
  }
);

export const addRoomThunk = createAsyncThunk<Room, Room>(
  'room/addRoom',
  async (newRoom) => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms') || '[]') as Room[];
    const updatedRooms = [...storedRooms, newRoom];
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return newRoom;
  }
);

export const deleteRoomThunk = createAsyncThunk<number, number>(
  'room/deleteRoom',
  async (roomId) => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms') || '[]') as Room[];
    const updatedRooms = storedRooms.filter((room) => room.id !== roomId);
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return roomId;
  }
);
