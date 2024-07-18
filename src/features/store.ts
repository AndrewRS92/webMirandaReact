import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/slices/room/roomSlice";
import bookingReducer from "../features/slices/bookings/bookingSlice";
import contactReducer from "../features/slices/contact/contactSlice";
import userReducer from "../features/slices/user/usersSlice";

export const store = configureStore({
    reducer: {
        room: roomReducer,
        booking: bookingReducer,
        contact: contactReducer,
        user: userReducer,
    }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
