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
  EmployeeStatus
} from '../styleComponents/EmployeeTableStyle';

const Concierge = () => {
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/users.json')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = tableData.filter(row => {
    if (filter === 'all') return true;
    return filter === 'active' ? row.state : !row.state;
  });

  return (
    <TableContainer>
      <FilterBar>
        <FilterOption className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All Employees</FilterOption>
        <FilterOption className={filter === 'active' ? 'active' : ''} onClick={() => handleFilterChange('active')}>Active Employees</FilterOption>
        <FilterOption className={filter === 'inactive' ? 'active' : ''} onClick={() => handleFilterChange('inactive')}>Inactive Employees</FilterOption>
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
          {filteredData.map((row, index) => (
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
    </TableContainer>
  );
};

export default Concierge;
