import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomListThunk, addRoomThunk } from '../../store/slices/room/roomThunk';
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
  RoomStatus,
  Pagination,
  PaginationButton,
  PaginationInfo,
  NewRoomButtonContainer,
  NewRoomButton
} from './RoomTableStyles';
import NewRoomPopup from './NewRoomPopup';

const Room = () => {
  const dispatch = useDispatch();
  const { dataList: tableData, status, error } = useSelector((state) => state.room);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getRoomListThunk());
  }, [dispatch]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const filteredData = tableData.filter(row => {
    if (filter === 'all') return true;
    return filter === 'available' ? row.available : !row.available;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNewRoomClick = () => {
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  const handleSaveRoom = (newRoom) => {
    // Ensure the correct boolean value is set for the availability status
    newRoom.available = newRoom.status === 'available';
    dispatch(addRoomThunk(newRoom));
    setShowPopup(false); 
  };

  return (
    <TableContainer>
      <FilterBar>
        <FilterOption className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All Rooms</FilterOption>
        <FilterOption className={filter === 'available' ? 'active' : ''} onClick={() => handleFilterChange('available')}>Available</FilterOption>
        <FilterOption className={filter === 'booked' ? 'active' : ''} onClick={() => handleFilterChange('booked')}>Booked</FilterOption>

        <NewRoomButtonContainer>
          <NewRoomButton onClick={handleNewRoomClick}>+ New Room</NewRoomButton>
        </NewRoomButtonContainer>

      </FilterBar>
      <Table>
        <TableHead>
          <tr>
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
          {currentItems.map((row, index) => (
            <TableRow key={index}>
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
      <Pagination>
        <PaginationButton onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <PaginationInfo>
          Page {currentPage} of {totalPages}
        </PaginationInfo>
        <PaginationButton onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </PaginationButton>
      </Pagination>
      {showPopup && <NewRoomPopup onClose={handleClosePopup} onSave={handleSaveRoom} />}
    </TableContainer>
  );
};

export default Room;
