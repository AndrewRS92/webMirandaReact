import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {
  PopupContainer,
  PopupContent,
  PopupHeader,
  PopupBody,
  PopupFooter,
  CloseButton,
  SaveButton,
  InputGroup,
  InputLabel,
  InputField,
  SelectField
} from './NewRoomPopupStyles';

const facilitiesOptions = [
  { value: 'AC', label: 'AC' },
  { value: 'Shower', label: 'Shower' },
  { value: 'Double bed', label: 'Double bed' },
  { value: 'Towel', label: 'Towel' },
  { value: 'Bathup', label: 'Bathup' },
  { value: 'Coffee Set', label: 'Coffee Set' },
  { value: 'LED TV', label: 'LED TV' },
  { value: 'Wifi', label: 'Wifi' }
];

const NewRoomPopup = ({ onClose, onSave, newRoomId }) => {
  const [formData, setFormData] = useState({
    roomNumber: '',
    roomId: newRoomId, // Use newRoomId prop
    bedType: 'Single Bed', // Default value
    facilities: [],
    price: '',
    offerPrice: '',
    status: 'available'
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      roomId: newRoomId, // Set newRoomId when it changes
    }));
  }, [newRoomId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFacilitiesChange = (selectedOptions) => {
    setFormData({ ...formData, facilities: selectedOptions });
  };

  const handleSave = () => {
    const newRoomData = {
      ...formData,
      facilities: formData.facilities.map(option => option.value) // Convert to array of values
    };
    onSave(newRoomData);
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>
          <h2>Create New Room</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </PopupHeader>
        <PopupBody>
          <InputGroup>
            <InputLabel htmlFor="roomNumber">Room Number</InputLabel>
            <InputField type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="roomId">Room ID</InputLabel>
            <InputField type="text" name="roomId" value={formData.roomId} readOnly /> {/* Read-only field */}
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="bedType">Bed Type</InputLabel>
            <SelectField name="bedType" value={formData.bedType} onChange={handleChange}>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Double Superior">Double Superior</option>
              <option value="Suite">Suite</option>
            </SelectField>
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="facilities">Facilities</InputLabel>
            <Select
              isMulti
              name="facilities"
              options={facilitiesOptions}
              value={formData.facilities}
              onChange={handleFacilitiesChange}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="price">Rate</InputLabel>
            <InputField type="number" name="price" value={formData.price} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="offerPrice">Offer Price</InputLabel>
            <InputField type="number" name="offerPrice" value={formData.offerPrice} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="status">Status</InputLabel>
            <SelectField name="status" value={formData.status} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
            </SelectField>
          </InputGroup>
        </PopupBody>
        <PopupFooter>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  );
};

export default NewRoomPopup;
