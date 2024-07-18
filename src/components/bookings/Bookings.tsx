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
  BookingStatus,
  Pagination,
  PaginationButton,
  PaginationInfo
} from './BookingTableStyles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../features/store';
import { getBookingListThunk } from '../../features/slices/bookings/bookingThunk';
import {
  bookingDataListSelector,
  bookingStatusSelector,
  bookingErrorSelector
} from '../../features/slices/bookings/bookingSlice';
import { Booking } from '../../types';

const Bookings: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bookingDataList = useSelector(bookingDataListSelector);
  const bookingStatus = useSelector(bookingStatusSelector);
  const bookingError = useSelector(bookingErrorSelector);

  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<Booking[]>([]);
  const [pages, setPages] = useState<Booking[][]>([]);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 10;

  const createPagination = (data: Booking[], itemsPerPage: number): Booking[][] => {
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      pages.push(data.slice(i, i + itemsPerPage));
    }
    return pages;
  };

  useEffect(() => {
    if (bookingStatus === 'idle') {
      dispatch(getBookingListThunk());
    } else if (bookingStatus === 'pending') {
      setIsLoading(true);
    } else if (bookingStatus === 'fulfilled') {
      setList(bookingDataList);
      setPages(createPagination(bookingDataList, itemsPerPage));
      setIsLoading(false);
    } else if (bookingStatus === 'rejected') {
      setError(bookingError);
      setIsLoading(false);
    }
  }, [bookingStatus, bookingDataList, dispatch, bookingError]);

  const handleFilterChange = (newFilter: string): void => {
    setFilter(newFilter);
    setCurrentPage(1);
    const filteredData = bookingDataList.filter((row: Booking) => {
      if (newFilter === 'all') return true;
      return row.status.toLowerCase() === newFilter.toLowerCase();
    });
    setList(filteredData);
    setPages(createPagination(filteredData, itemsPerPage));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pages[currentPage - 1] || [];

  const totalPages = pages.length;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
          {currentItems.map((row, index) => (
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
    </TableContainer>
  );
};

export default Bookings;
