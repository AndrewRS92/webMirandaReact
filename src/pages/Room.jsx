import React, { useState, useEffect } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  FilterBar,
  FilterOption,
  RoomStatus
} from '../components/styleComponents/RoomTableStyles';

const Room = () => {
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/RoomData.json')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = tableData.filter(row => {
    if (filter === 'all') return true;
    return filter === 'available' ? row.available : !row.available;
  });

  return (
    <TableContainer>
      <FilterBar>
        <FilterOption className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All Rooms</FilterOption>
        <FilterOption className={filter === 'available' ? 'active' : ''} onClick={() => handleFilterChange('available')}>Available</FilterOption>
        <FilterOption className={filter === 'booked' ? 'active' : ''} onClick={() => handleFilterChange('booked')}>Booked</FilterOption>
      </FilterBar>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>Photo</TableHeader>
            <TableHeader>Room Number</TableHeader>
            <TableHeader>Room ID</TableHeader>
            <TableHeader>Room Type</TableHeader>
            <TableHeader>Amenities</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Offer Price</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell><img src={row.images[0]} alt="Room" style={{ width: '5rem', height: '5rem' }} /></TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.bedType}</TableCell>
              <TableCell>{row.facilities.join(', ')}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell>${row.offerPrice}</TableCell>
              <TableCell>
                <RoomStatus status={row.available ? 'available' : 'booked'}>
                  {row.available ? 'Available' : 'Booked'}
                </RoomStatus>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Room;
