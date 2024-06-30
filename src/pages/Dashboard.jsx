import React, { useEffect, useState } from 'react';
import { IoBedOutline, IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { DashboardGrid, KPI, KPIpicture, KPItext } from '../components/DashboardStyles';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/BookingsData.json');
        const allbookings = await response.json();
        setBookings(allbookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    const fetchRooms = async () => {
      try {
        const response = await fetch('/RoomData.json');
        const rooms = await response.json();
        setRooms(rooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchBookings();
    fetchRooms();
  }, []);

  const allBookingsCount = bookings.length;
  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter(room => !room.available).length;
  const occupationRate = ((occupiedRooms / totalRooms) * 100).toFixed(2) + "%";
  const checkInCount = bookings.filter(booking => booking.status === "Check In").length;
  const checkOutCount = bookings.filter(booking => booking.status === "Check Out").length;

  return (
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
  );
};

export default Dashboard;
