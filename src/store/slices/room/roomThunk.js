import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from '../../../asset/RoomData.json';

export const getRoomListThunk = createAsyncThunk("room/getRoomList", async () => {
  const myRoomListPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rooms.length > 0) {
        localStorage.setItem('rooms', JSON.stringify(rooms));
        resolve(rooms);
      } else {
        reject(`Void Array`);
      }
    }, 200);
  });

  return myRoomListPromise;
});

export const addRoomThunk = createAsyncThunk("room/addRoom", async (newRoom) => {
  const storedRooms = JSON.parse(localStorage.getItem('rooms')) || [];
  const updatedRooms = [...storedRooms, newRoom];
  localStorage.setItem('rooms', JSON.stringify(updatedRooms));
  return newRoom;
});
