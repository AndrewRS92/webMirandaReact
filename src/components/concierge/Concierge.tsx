import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';
import { AppDispatch } from '../../features/store';
import { getUserListThunk } from '../../features/slices/user/userThunk';
import { userDataListSelector, userDataSelector, userErrorSelector, userStatusSelector, removeUser } from '../../features/slices/user/usersSlice';
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
  EmployeeStatus
} from './ConciergeStyles';

const Concierge: React.FC = () => {
  const pageSize: number = 10;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userStatus = useSelector(userStatusSelector);
  const userDataList = useSelector(userDataListSelector);
  const userError = useSelector(userErrorSelector);

  const createPagination = (array: User[], size: number): User[][] => {
    const aux = [];
    for (let i = 0; i < array.length; i += size) {
      aux.push(array.slice(i, i + size));
    }
    return aux;
  };

  const [option, setOption] = useState<number>(0);
  const [list, setList] = useState<User[]>([]);
  const [userPages, setUserPages] = useState<User[][]>(createPagination(list, pageSize));
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(getUserListThunk());
    } else if (userStatus === 'pending') {
      setIsLoading(true);
    } else if (userStatus === 'fulfilled') {
      setList(userDataList);
      setUserPages(createPagination(userDataList, pageSize));
      setIsLoading(false);
    } else if (userStatus === 'rejected') {
      alert(userError);
    }
  }, [userStatus, userDataList, dispatch, userError]);

  const allUsers = () => {
    setOption(0);
    setPage(0);
    setList(userDataList);
    setUserPages(createPagination(userDataList, pageSize));
  };

  const activeUsers = () => {
    const aux = userDataList.filter((user) => user.state);
    setOption(1);
    setPage(0);
    setList(aux);
    setUserPages(createPagination(aux, pageSize));
  };

  const inactiveUsers = () => {
    const aux = userDataList.filter((user) => !user.state);
    setOption(2);
    setPage(0);
    setList(aux);
    setUserPages(createPagination(aux, pageSize));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer>
      <FilterBar>
        <FilterOption className={option === 0 ? 'active' : ''} onClick={allUsers}>All Employees</FilterOption>
        <FilterOption className={option === 1 ? 'active' : ''} onClick={activeUsers}>Active Employees</FilterOption>
        <FilterOption className={option === 2 ? 'active' : ''} onClick={inactiveUsers}>Inactive Employees</FilterOption>
      </FilterBar>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Job Desk</TableHeader>
            <TableHeader>Schedule</TableHeader>
            <TableHeader>Contact</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </TableHead>
        <TableBody>
          {userPages[page]?.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={row.photo} alt="Employee" style={{ width: '5rem', height: '5rem', borderRadius: '50%', marginRight: '1rem' }} />
                  <div>
                    <div>{row.name}</div>
                    <div>#{row.id}</div>
                    <div>Joined on {new Date(row.start_date).toLocaleDateString()}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.workstation}</TableCell>
              <TableCell>{row.number_phone}</TableCell>
              <TableCell>
                <EmployeeStatus status={row.state ? 'active' : 'inactive'}>
                  {row.state ? 'ACTIVE' : 'INACTIVE'}
                </EmployeeStatus>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <button onClick={() => setPage(Math.max(page - 1, 0))} disabled={page === 0}>Previous</button>
        <button onClick={() => setPage(Math.min(page + 1, userPages.length - 1))} disabled={page === userPages.length - 1}>Next</button>
      </div>
    </TableContainer>
  );
};

export default Concierge;
