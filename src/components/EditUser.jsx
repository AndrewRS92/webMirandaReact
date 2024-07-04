import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import {
  EditUserContainer,
  EditUserForm,
  EditUserInput,
  EditUserButton,
  EditUserLabel
} from './styleComponents/EditUserStyle';

const EditUser = () => {
  const { user, updateUser, isEditing, setIsEditing } = useContext(UserContext);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setIsEditing(false); 
  };

  if (!isEditing) {
    return null; 
  }

  return (
    <EditUserContainer>
      <h2>Edit User Information</h2>
      <EditUserForm onSubmit={handleSubmit}>
        <EditUserLabel htmlFor="name">Name</EditUserLabel>
        <EditUserInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <EditUserLabel htmlFor="email">Email</EditUserLabel>
        <EditUserInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <EditUserLabel htmlFor="password">Password</EditUserLabel>
        <EditUserInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <EditUserButton type="submit">Save Changes</EditUserButton>
      </EditUserForm>
    </EditUserContainer>
  );
};

export default EditUser;
