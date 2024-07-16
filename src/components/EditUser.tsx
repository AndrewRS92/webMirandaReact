import React, { useContext, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { UserContext, User } from '../components/context/UserContext';
import {
  EditUserContainer,
  EditUserForm,
  EditUserInput,
  EditUserButton,
  EditUserLabel
} from '../components/styleComponents/EditUserStyle';

const EditUser: React.FC = () => {
  const { user, updateUser, isEditing, setIsEditing } = useContext(UserContext)!;
  const [formData, setFormData] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
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
