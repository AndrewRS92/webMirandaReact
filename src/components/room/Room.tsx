import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { getRoomListThunk, addRoomThunk, deleteRoomThunk } from '../../features/slices/room/roomThunk';
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
import { AppDispatch, RootState } from '../../features/store';
import { UserContext } from '../context/UserContext'; 

interface RoomData {
  id: number;
  name: string;
  images: string[];
  bedType: string;
  facilities: string[];
  price: number;
  offerPrice: number;
  available: boolean;
  status?: 'available' | 'booked';
}

const Room: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tableData = useSelector((state: RootState) => state.room.dataList) as RoomData[];
  const roomStatus = useSelector((state: RootState) => state.room.status);
  const roomError = useSelector((state: RootState) => state.room.error);
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [editRoom, setEditRoom] = useState<RoomData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<RoomData[]>([]);
  const [roomPages, setRoomPages] = useState<RoomData[][]>([]);

  const itemsPerPage = 10;

  const createPagination = (data: RoomData[], itemsPerPage: number): RoomData[][] => {
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      pages.push(data.slice(i, i + itemsPerPage));
    }
    return pages;
  };

  useEffect(() => {
    if (roomStatus === "idle") {
      dispatch(getRoomListThunk());
    } else if (roomStatus === "pending") {
      setIsLoading(true);
    } else if (roomStatus === "fulfilled") {
      setList(tableData);
      setRoomPages(createPagination(tableData, itemsPerPage));
      setIsLoading(false);
    } else if (roomStatus === "rejected") {
      alert(roomError);
    }
  }, [roomStatus, tableData, roomError, dispatch]);

  const handleFilterChange = (newFilter: string): void => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleDeleteRoom = (roomId: number): void => {
    dispatch(deleteRoomThunk(roomId));
  };

  const handleEditRoom = (room: RoomData): void => {
    setEditRoom(room);
    setShowPopup(true);
  };

  const filteredData = tableData.filter(row => {
    if (filter === 'all') return true;
    return filter === 'available' ? row.available : !row.available;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNewRoomClick = (): void => {
    setEditRoom(null);
    setShowPopup(true);
  };
  
  const handleClosePopup = (): void => {
    setShowPopup(false); 
  };

  const handleSaveRoom = (newRoom: RoomData): void => {
    const roomToSave: RoomData = {
      ...newRoom,
      id: newRoom.id ,
      available: newRoom.status === 'available',
      images: newRoom.images || [] 
    };

    dispatch(addRoomThunk(roomToSave));
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
                <FaEdit onClick={() => handleEditRoom(row)} style={{ marginRight: '10px', cursor: 'pointer' }} />
                <FaTrash onClick={() => handleDeleteRoom(row.id)} style={{ marginRight: '10px', cursor: 'pointer' }} />
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
      {showPopup && <NewRoomPopup room={editRoom} onClose={handleClosePopup} onSave={handleSaveRoom} />}
    </TableContainer>
  );
};

export default Room;
