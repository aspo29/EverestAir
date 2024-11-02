import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { updateApplicant } from '../service/api';
// YourComponent.jsx or another relevant file
import {formatDate} from '../utils'; 
const EditData = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    passport: '',
    age: '',
    gender: '',
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    returnDate: '',
    address: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (state && state.data) {
      setFormData(state.data);
    }
  }, [state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      updateApplicant(id, formData);
    } catch (error) {
      console.log(error);
    } finally {
      //timeout 2 seconds & direct to CheckBooking page & reload that page
      setTimeout(() => {
        setLoading(false);
        navigate('/CheckBooking', { replace: true });
      }, 2000);
    }
  };

  return (
    <div className='container text-light'>
      <form
        className='row g-2 text-dark'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '50px',
          borderRadius: '30px',
        }}
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        {/* Last Name */}
        <div className='col-md-6'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        {/* Passport */}
        <div className='col-md-6'>
          <label htmlFor='passport' className='form-label'>
            Passport No.
          </label>
          <input
            type='text'
            className='form-control'
            id='passport'
            name='passport'
            onChange={handleChange}
            value={formData.passport}
          />
        </div>

        {/* Age */}
        <div className='col-md-3'>
          <label htmlFor='age' className='form-label'>
            Age
          </label>
          <input
            type='number'
            className='form-control'
            id='age'
            name='age'
            min='1'
            onChange={handleChange}
            value={formData.age}
          />
        </div>

        {/* Gender */}
        <div className='col-md-3'>
          <label htmlFor='gender' className='form-label'>
            Gender
          </label>
          <select
            id='gender'
            name='gender'
            className='form-select'
            onChange={handleChange}
            value={formData.gender}
          >
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Departure Airport */}
        <div className='col-md-6'>
          <label htmlFor='departureAirport' className='form-label'>
            Departure Airport
          </label>
          <select
            id='departureAirport'
            name='departureAirport'
            className='form-select'
            onChange={handleChange}
            value={formData.departureAirport}
          >
            <option value='Kathmandu'>Kathmandu</option>
            <option value='Pokhara'>Pokhara</option>
            <option value='Bhadrapur'>Bhadrapur</option>
            <option value='Biratnagar'>Biratnagar</option>
            <option value='Janakpur'>Janakpur</option>
            <option value='Nepalgunj'>Nepalgunj</option>
            <option value='Bhairahawa'>Bhairahawa</option>

            {/* International options */}
            <option value='Bangkok'>Bangkok</option>
            <option value='Singapore'>Singapore</option>
            <option value='New York'>New York</option>
            <option value='Tokyo'>Tokyo</option>
            <option value='Sydney'>Sydney</option>
          </select>
        </div>

        {/* Arrival Airport */}
        <div className='col-md-6'>
          <label htmlFor='arrivalAirport' className='form-label'>
            Arrival Airport
          </label>
          <select
            id='arrivalAirport'
            name='arrivalAirport'
            className='form-select'
            onChange={handleChange}
            value={formData.arrivalAirport}
          >
            <option value='Kathmandu'>Kathmandu</option>
            <option value='Pokhara'>Pokhara</option>
            <option value='Bhadrapur'>Bhadrapur</option>
            <option value='Biratnagar'>Biratnagar</option>
            <option value='Janakpur'>Janakpur</option>
            <option value='Nepalgunj'>Nepalgunj</option>
            <option value='Bhairahawa'>Bhairahawa</option>

            {/* International options */}
            <option value='Bangkok'>Bangkok</option>
            <option value='Singapore'>Singapore</option>
            <option value='New York'>New York</option>
            <option value='Tokyo'>Tokyo</option>
            <option value='Sydney'>Sydney</option>
          </select>
        </div>

        {/* Departure Date */}
        <div className='col-md-6'>
          <label htmlFor='departureDate' className='form-label'>
            Departure Date
          </label>
          <input
            type='date'
            className='form-control'
            id='departureDate'
            name='departureDate'
            onChange={handleChange}
            value={formatDate(formData.departureDate)}
          />
        </div>

        {/* Return Date */}
        <div className='col-md-6'>
          <label htmlFor='returnDate' className='form-label'>
            Return Date
          </label>
          <input
            type='date'
            className='form-control'
            id='returnDate'
            name='returnDate'
            onChange={handleChange}
            value={formatDate(formData.returnDate)}
          />
        </div>

        {/* Address */}
        <div className='col-md-12'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <input
            type='text'
            className='form-control'
            id='address'
            name='address'
            placeholder='1234 Main St'
            onChange={handleChange}
            value={formData.address}
          />
        </div>

        {/* Email */}
        <div className='col-md-6'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='example@mail.com'
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* Phone */}
        <div className='col-md-6'>
          <label htmlFor='phone' className='form-label'>
            Phone
          </label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            name='phone'
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        {/* Submit Button */}
        <div className='col-12'>
          <button
            type='submit'
            className={`${loading ? 'btn btn-success' : 'btn btn-primary'}`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditData;
