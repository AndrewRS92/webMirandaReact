import React, { useEffect, useState } from 'react';
import { IoBedOutline, IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { DashboardGrid, KPI, KPIpicture, KPItext } from './DashboardStyles';
import CommentsSlider from '../commentSlider/commentsSlider';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../features/store';
import { getBookingListThunk } from '../../features/slices/bookings/bookingThunk';
import { getRoomListThunk } from '../../features/slices/room/roomThunk';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const bookingStatus = useSelector((state: RootState) => state.booking.status);
  const bookingDataList = useSelector((state: RootState) => state.booking.dataList);
  const bookingError = useSelector((state: RootState) => state.booking.error);

  const roomStatus = useSelector((state: RootState) => state.room.status);
  const roomDataList = useSelector((state: RootState) => state.room.dataList);
  const roomError = useSelector((state: RootState) => state.room.error);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (bookingStatus === 'idle') {
      dispatch(getBookingListThunk());
    } else if (bookingStatus === 'pending') {
      setIsLoading(true);
    } else if (bookingStatus === 'fulfilled') {
      setIsLoading(false);
    } else if (bookingStatus === 'rejected') {
      setError(bookingError);
      alert(bookingError);
    }
  }, [bookingStatus, bookingDataList, dispatch, bookingError]);

  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(getRoomListThunk());
    } else if (roomStatus === 'pending') {
      setIsLoading(true);
    } else if (roomStatus === 'fulfilled') {
      setIsLoading(false);
    } else if (roomStatus === 'rejected') {
      setError(roomError);
      alert(roomError);
    }
  }, [roomStatus, roomDataList, dispatch, roomError]);

  const allBookingsCount = bookingDataList.length;
  const totalRooms = roomDataList.length;
  const occupiedRooms = roomDataList.filter(room => !room.available).length;
  const occupationRate = ((occupiedRooms / totalRooms) * 100).toFixed(2) + "%";
  const checkInCount = bookingDataList.filter(booking => booking.status === "Check In").length;
  const checkOutCount = bookingDataList.filter(booking => booking.status === "Check Out").length;

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
