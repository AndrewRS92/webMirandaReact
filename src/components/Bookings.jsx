
import React, { useState, useEffect } from 'react';
import {
    Table,
    Td,
    Th,
    NotesButton,
    StatusLabel
  } from './styleComponents/BookingTableStyles';


const Bookings = () => {
    const [tableData, setTableData] = useState([]);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
      fetch('/BookingsData.json')
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const getStatusLabel = (status) => {
      switch (status) {
        case 0:
          return "Pending";
        case 1:
          return "Booked";
        case 2:
          return "Cancelled";
        case 3:
          return "Refunded";
        default:
          return "";
      }
    };
  
    const getStatusClass = (status) => {
      switch (status) {
        case 0:
          return "status-pending";
        case 1:
          return "status-booked";
        case 2:
          return "status-cancelled";
        case 3:
          return "status-refunded";
        default:
          return "";
      }
    };
  
    return (
      <Table>
        <thead>
          <tr>
            <Th>Guest</Th>
            <Th>Order Date</Th>
            <Th>Check In</Th>
            <Th>Check Out</Th>
            <Th>Special Request</Th>
            <Th>Room Type</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
                 <Td>{`${row.first_name} ${row.last_name}`}</Td>
            <Td>{row.order_date}</Td>
            <Td>{row.checkin_date}</Td>
            <Td>{row.checkout_date}</Td>
            <Td><NotesButton>View Notes</NotesButton></Td>
            <Td>{row.room_type}</Td>
            <Td><StatusLabel className={getStatusClass(row.status)}>{getStatusLabel(row.status)}</StatusLabel></Td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  
  export default Bookings;