import React, { useState, useEffect } from 'react';
import Select, { MultiValue } from 'react-select';
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

const bedTypeOptions = [
  { value: 'Single Bed', label: 'Single Bed' },
  { value: 'Double Bed', label: 'Double Bed' },
  { value: 'Double Superior', label: 'Double Superior' },
  { value: 'Suite', label: 'Suite' }
];

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

interface NewRoomPopupProps {
  room?: RoomData | null;
  onClose: () => void;
  onSave: (room: RoomData) => void;
}

const NewRoomPopup: React.FC<NewRoomPopupProps> = ({ room, onClose, onSave }) => {
  const [formData, setFormData] = useState<RoomData>({
    id: 0,
    name: '',
    images: [],
    bedType: '',
    facilities: [],
    price: 0,
    offerPrice: 0,
    available: true,
    status: 'available'
  });

  useEffect(() => {
    if (room) {
      setFormData(room);
    } else {
      setFormData({
        id: 0,
        name: '',
        images: [],
        bedType: '',
        facilities: [],
        price: 0,
        offerPrice: 0,
        available: true,
        status: 'available'
      });
    }
  }, [room]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFacilitiesChange = (selectedOptions: MultiValue<{ value: string; label: string }>) => {
    const facilities = selectedOptions.map(option => option.value);
    setFormData({ ...formData, facilities });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>
          <h2>{room ? 'Edit Room' : 'Create New Room'}</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </PopupHeader>
        <PopupBody>
          <InputGroup>
            <InputLabel htmlFor="name">Room Name</InputLabel>
            <InputField type="text" name="name" value={formData.name} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="bedType">Bed Type</InputLabel>
            <SelectField
              name="bedType"
              value={bedTypeOptions.find(option => option.value === formData.bedType)}
              onChange={(option) => setFormData({ ...formData, bedType: option?.value || '' })}
              options={bedTypeOptions}
            />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="facilities">Facilities</InputLabel>
            <Select
              isMulti
              name="facilities"
              value={facilitiesOptions.filter(option => formData.facilities.includes(option.value))}
              onChange={handleFacilitiesChange}
              options={facilitiesOptions}
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
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
            </select>
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
