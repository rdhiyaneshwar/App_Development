import React, { useState } from 'react';
import '../assets/css/Form.css';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        address: '',
        email: '',
        phone: '',
        emergencyContact: {
          name: '',
          relationship: '',
          contactPhone: '',
          contactAddress: '',
        },
        dropdownValue: '', // Initialize dropdown value
        photo: null, // Store uploaded photo
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          emergencyContact: {
            ...formData.emergencyContact,
            [name]: value,
          },
        });
      };
    
      const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        setFormData({
          ...formData,
          photo: file,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can process or submit the form data here
        console.log(formData);
      };
    
      return (
        <>
        <Navigation/>
        <Social/>
        <div className='body1'>
        <main className='main1'>
          <div>
            <h1>Elderly Care Form</h1>
            <p id="description">Please provide the following information:</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
    <label htmlFor="photo" id="photo-label">
  Upload Photo
</label>
<div id="photo-input">
  <label>
    <input
      type="file"
      id="photo"
      name="photo"
      accept="image/*"
      onChange={handlePhotoUpload}
    />
    Choose File
  </label>
</div>

    
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
    
            <label>Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            />
    
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
    
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
    
            <div>
              <h3 id="description">Emergency Contact</h3>
              <label htmlFor="emergencyContactName">Name</label>
              <input
                type="text"
                id="emergencyContactName"
                name="name"
                value={formData.emergencyContact.name}
                onChange={handleEmergencyContactChange}
                required
              />
    
              <label htmlFor="relationship">Relationship</label>
              <input
                type="text"
                id="relationship"
                name="relationship"
                value={formData.emergencyContact.relationship}
                onChange={handleEmergencyContactChange}
                required
              />
    
              <label htmlFor="contactPhone">Contact Phone</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.emergencyContact.contactPhone}
                onChange={handleEmergencyContactChange}
                required
              />
    
              <label htmlFor="contactAddress">Contact Address</label>
              <input
                type="text"
                id="contactAddress"
                name="contactAddress"
                value={formData.emergencyContact.contactAddress}
                onChange={handleEmergencyContactChange}
                required
              />
            </div>
    
            <label htmlFor="dropdownValue">Choose Service</label>
            <select
              id="dropdownValue"
              name="dropdownValue"
              value={formData.dropdownValue}
              onChange={handleInputChange}
            >
              <option value="option1">Eco-Haven</option>
              <option value="option2">Diet</option>
              <option value="option3">Sanitation</option>
              <option value="option4">Mobilizing</option>
            </select>
    
            <input
  type="submit"
  value="Submit"
  className="button-29"
/>
          </form>
        </main>
        </div>
        <Footer/>
        </>
      );
    }
    
    export default Form;
    