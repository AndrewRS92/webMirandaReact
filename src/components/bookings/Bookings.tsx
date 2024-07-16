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
  FilterBar,
  FilterOption,
  BookingStatus
} from './BookingTableStyles';

interface Booking {
  guest: string;
  orderdate: string;
  checkin: string;
  checkout: string;
  specialRequest: string;
  roomtype: string;
  status: string;
}

const Bookings: React.FC = () => {
  const [tableData, setTableData] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/BookingsData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Booking[] = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (newFilter: string): void => {
    setFilter(newFilter);
  };

  const filteredData = tableData.filter(row => {
    if (filter === 'all') return true;
    return row.status.toLowerCase() === filter;
  });

  return (
    <TableContainer>
      <FilterBar>
        <FilterOption className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All Guest</FilterOption>
        <FilterOption className={filter === 'check in' ? 'active' : ''} onClick={() => handleFilterChange('check in')}>Check In</FilterOption>
        <FilterOption className={filter === 'check out' ? 'active' : ''} onClick={() => handleFilterChange('check out')}>Check Out</FilterOption>
        <FilterOption className={filter === 'in progress' ? 'active' : ''} onClick={() => handleFilterChange('in progress')}>In Progress</FilterOption>
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
              <TableCell>{row.guest}</TableCell>
              <TableCell>{row.orderdate}</TableCell>
              <TableCell>{row.checkin}</TableCell>
              <TableCell>{row.checkout}</TableCell>
              <TableCell><NotesButton>View Notes</NotesButton></TableCell>
              <TableCell>{row.roomtype}</TableCell>
              <TableCell>
                <BookingStatus status={row.status.toLowerCase()}>
                  {row.status}
                </BookingStatus>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Bookings;
