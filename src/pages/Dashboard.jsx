import React, { useEffect, useState } from 'react';
import { IoBedOutline, IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { DashboardGrid, KPI, KPIpicture, KPItext } from '../components/DashboardStyles';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch('/BookingsData.json');
      const allbookings = await response.json();
      setBookings(allbookings);
    };

    const fetchRooms = async () => {
      const response = await fetch('/RoomData.json');
      const rooms = await response.json();
      setRooms(rooms);
    };

    fetchBookings();
    fetchRooms();
  }, []);

  const allbookings = bookings.length;
  const numroom = rooms.length;
  const occupied = rooms.filter(room => !room.available).length;
  const occupation = ((occupied / numroom) * 100).toFixed(2) + "%";
  const checkin = bookings.filter(booking => booking.status === "check in").length;
  const checkout = bookings.filter(booking => booking.status === "check out").length;

  return (
    <DashboardGrid>
      <KPI>
        <KPIpicture type="regular">
          <IoBedOutline />
        </KPIpicture>
        <KPItext>
          <h3>{allbookings}</h3>
          <h4>New Bookung</h4>
        </KPItext>
      </KPI>
      <KPI>
        <KPIpicture type="red">
          <LuCalendarCheck2 />
        </KPIpicture>
        <KPItext>
          <h3>{occupation}</h3>
          <h4>Scheduled Room</h4>
        </KPItext>
      </KPI>
      <KPI>
        <KPIpicture type="regular">
          <IoLogOutOutline />
        </KPIpicture>
        <KPItext>
          <h3>{checkin}</h3>
          <h4>Check In</h4>
        </KPItext>
      </KPI>
      <KPI>
        <KPIpicture type="regular">
          <IoLogInOutline />
        </KPIpicture>
        <KPItext>
          <h3>{checkout}</h3>
          <h4>Check Out</h4>
        </KPItext>
      </KPI>
    </DashboardGrid>
  );
};

export default Dashboard;
