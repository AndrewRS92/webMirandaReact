import { createAsyncThunk } from '@reduxjs/toolkit';
import bookings from '../../../asset/BookingsData.json';
import { Booking } from '../../../types';

export const getBookingListThunk = createAsyncThunk<Booking[]>(
  'booking/getBookingList',
  async () => {
    return new Promise<Booking[]>((resolve, reject) => {
      setTimeout(() => {
        if (bookings.length > 0) {
          resolve(bookings);
        } else {
          reject('No bookings found');
        }
      }, 200);
    });
  }
);
