import React, { useEffect, useState } from 'react';
import { IoBedOutline, IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { DashboardGrid, KPI, KPIpicture, KPItext } from './DashboardStyles';
import CommentsSlider from '../commentSlider/commentsSlider'; 

interface Booking {
  id: number;
  guest: string;
  orderdate: string;
  checkin: string;
  checkout: string;
  specialRequest: string;
  roomtype: string;
  status: 'Check In' | 'Check Out' | 'In Progress';
}

interface Room {
  id: number;
  name: string;
  available: boolean;
  bedType: string;
  facilities: string[];
  price: number;
  offerPrice: number;
  images: string[];
}

const Dashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [bookingStatus, setBookingStatus] = useState<string>('idle');
  const [roomStatus, setRoomStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async () => {
    setBookingStatus('pending');
    try {
      const response = await fetch('/BookingsData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Booking[] = await response.json();
      setBookings(data);
      setBookingStatus('fulfilled');
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Error fetching bookings');
      setBookingStatus('rejected');
    }
  };

  const fetchRooms = async () => {
    setRoomStatus('pending');
    try {
      const response = await fetch('/RoomData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Room[] = await response.json();
      setRooms(data);
      setRoomStatus('fulfilled');
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setError('Error fetching rooms');
      setRoomStatus('rejected');
    }
  };

  useEffect(() => {
    if (bookingStatus === 'idle') {
      fetchBookings();
    }
    if (roomStatus === 'idle') {
      fetchRooms();
    }
  }, [bookingStatus, roomStatus]);

  useEffect(() => {
    if (bookingStatus === 'pending' || roomStatus === 'pending') {
      // Handle loading state if needed
    } else if (bookingStatus === 'fulfilled' && roomStatus === 'fulfilled') {
      // Handle both data being loaded
    } else if (bookingStatus === 'rejected') {
      alert(error);
    } else if (roomStatus === 'rejected') {
      alert(error);
    }
  }, [bookingStatus, roomStatus, error]);

  const allBookingsCount = bookings.length;
  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter(room => !room.available).length;
  const occupationRate = ((occupiedRooms / totalRooms) * 100).toFixed(2) + "%";
  const checkInCount = bookings.filter(booking => booking.status === "Check In").length;
  const checkOutCount = bookings.filter(booking => booking.status === "Check Out").length;

  return (
    <div>
      <DashboardGrid>
        <KPI>
          <KPIpicture type="regular">
            <IoBedOutline />
          </KPIpicture>
          <KPItext>
            <h3>{allBookingsCount}</h3>
            <h4>New Booking</h4>
          </KPItext>
        </KPI>
        <KPI>
          <KPIpicture type="red">
            <LuCalendarCheck2 />
          </KPIpicture>
          <KPItext>
            <h3>{occupationRate}</h3>
            <h4>Scheduled Room</h4>
          </KPItext>
        </KPI>
        <KPI>
          <KPIpicture type="regular">
            <IoLogInOutline />
          </KPIpicture>
          <KPItext>
            <h3>{checkInCount}</h3>
            <h4>Check In</h4>
          </KPItext>
        </KPI>
        <KPI>
          <KPIpicture type="regular">
          <IoLogOutOutline />
          </KPIpicture>
          <KPItext>
            <h3>{checkOutCount}</h3>
            <h4>Check Out</h4>
          </KPItext>
        </KPI>
      </DashboardGrid>
      <CommentsSlider />
    </div>
  );
};

export default Dashboard;
