import React, { useState, useEffect } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  NotesButton,
  StatusLabel,
  FilterBar,
  FilterOption
} from '../components/styleComponents/BookingTableStyles';

const Bookings = () => {
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState('all');

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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = tableData.filter(row => {
    if (filter === 'all') return true;
    return getStatusLabel(row.status).toLowerCase() === filter;
  });

  return (
    <TableContainer>
      <FilterBar>
        <FilterOption className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All Guest</FilterOption>
        <FilterOption className={filter === 'pending' ? 'active' : ''} onClick={() => handleFilterChange('pending')}>Pending</FilterOption>
        <FilterOption className={filter === 'booked' ? 'active' : ''} onClick={() => handleFilterChange('booked')}>Booked</FilterOption>
        <FilterOption className={filter === 'cancelled' ? 'active' : ''} onClick={() => handleFilterChange('cancelled')}>Cancelled</FilterOption>
        <FilterOption className={filter === 'refunded' ? 'active' : ''} onClick={() => handleFilterChange('refunded')}>Refunded</FilterOption>
      </FilterBar>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>Guest</TableHeader>
            <TableHeader>Order Date</TableHeader>
            <TableHeader>Check In</TableHeader>
            <TableHeader>Check Out</TableHeader>
            <TableHeader>Special Request</TableHeader>
            <TableHeader>Room Type</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{`${row.first_name} ${row.last_name}`}</TableCell>
              <TableCell>{row.order_date}</TableCell>
              <TableCell>{row.checkin_date}</TableCell>
              <TableCell>{row.checkout_date}</TableCell>
              <TableCell><NotesButton>View Notes</NotesButton></TableCell>
              <TableCell>{row.room_type}</TableCell>
              <TableCell>
                <StatusLabel className={getStatusClass(row.status)}>
                  {getStatusLabel(row.status)}
                </StatusLabel>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Bookings;
