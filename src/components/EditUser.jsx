import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import {
  EditUserContainer,
  EditUserForm,
  EditUserInput,
  EditUserButton
} from './styleComponents/EditUserStyles';

const EditUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  return (
    <EditUserContainer>
      <h2>Edit User Information</h2>
      <EditUserForm onSubmit={handleSubmit}>
        <EditUserInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <EditUserInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
 
        <EditUserButton type="submit">Save Changes</EditUserButton>
      </EditUserForm>
    </EditUserContainer>
  );
};

export default EditUser;