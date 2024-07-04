import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../../asset/RoomData.json';

export const getRoomListThunk = createAsyncThunk('room/getRoomList', async () => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms')) || rooms;
    if (storedRooms.length > 0) {
      return storedRooms;
    } else {
      localStorage.setItem('rooms', JSON.stringify(rooms));
      return rooms;
    }
  });
  
  export const addRoomThunk = createAsyncThunk('room/addRoom', async (newRoom) => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms')) || rooms;
    const updatedRooms = [...storedRooms, newRoom];
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return newRoom;
  });
  
  export const deleteRoomThunk = createAsyncThunk('room/deleteRoom', async (roomId) => {
    const storedRooms = JSON.parse(localStorage.getItem('rooms')) || rooms;
    const updatedRooms = storedRooms.filter(room => room.id !== roomId);
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    return roomId;
  });