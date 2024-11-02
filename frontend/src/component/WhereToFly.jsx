import './MyCSS.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addApplicant } from '../service/api';
import { useNavigate } from 'react-router-dom';

const WhereToFly = () => {
  useEffect(() => {
    document.title = 'Packages Delta';
  }, []);
  const navigate = useNavigate();
  const [applicationData, setApplicationData] = useState({
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

  const handleChange = (e) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const addDetails = async (e) => {
    // console.log(applicationData);
    e.preventDefault();
    //important to add await
    await addApplicant(applicationData);
    setApplicationData({
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
    navigate('/CheckBooking');
  };

  //===================================================================================================

  return (
    //check local storage for token
    localStorage.getItem('token') ? (
      <div className='container text-light'>
        <div>
          <video
            src='src\component\Images\innerview.mp4'
            width='100%'
            height='auto'
            autoPlay
            loop // Add loop attribute to make the video loop continuously
            muted // Mute the video
            style={{
              position: 'absolute',
              zIndex: '-1',
              top: '0',
              left: '0',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <video
            src='src\component\Images\germanWing.mp4'
            width='100%'
            height='auto'
            autoPlay
            loop // Add loop attribute to make the video loop continuously
            muted // Mute the video
            style={{
              position: 'absolute',
              zIndex: '-1',
              top: '710px',
              left: '0',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <br /> <br />
        <div className='row'>
          <div className='col-md text-center '>
            <h4>Details for Ticket Reservation</h4>
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <form
              className='row g-2 text-dark'
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                padding: '50px',
                borderRadius: '30px',
              }}
            >
              <div className='mb-3'>
                <label htmlFor='firstName' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  name='firstName'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.firstName}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='lastName' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='lastName'
                  id='lastName'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.lastName}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='passport' className='form-label'>
                  Passport No.
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='passport'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.passport}
                />
              </div>
              <div className='col-md-3'>
                <label htmlFor='age' className='form-label'>
                  Age
                </label>
                <input
                  type='number'
                  className='form-control'
                  name='age'
                  min='1'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.age}
                />
              </div>
              <div className='col-md-3'>
                <label htmlFor='inputGender' className='form-label'>
                  Gender
                </label>
                <select
                  name='gender'
                  className='form-select'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.gender}
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className='col-md-6'>
                <label htmlFor='departureAirport' className='form-label'>
                  Departure Airport
                </label>
                <select
                  name='departureAirport'
                  className='form-select'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.departureAirport}
                >
                  <option>Choose...</option>
                  <option value='Kathmandu'>Kathmandu</option>
                  <option value='Pokhara'>Pokhara</option>
                  <option value='Bhadrapur'>Bhadrapur</option>
                  <option value='Biratnagar'>Biratnagar</option>
                  <option value='Janakpur'>Janakpur</option>
                  <option value='Nepalgunj'>Nepalgunj</option>
                  <option value='Bhairahawa'>Bhairahawa</option>
                  <option value='Dhangadhi'>Dhangadhi</option>
                  <option value='Jomsom'>Jomsom</option>

                  {/* International options */}
                  <option value='Bangkok'>Bangkok</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='New York'>New York</option>
                  <option value='Tokyo'>Tokyo</option>
                  <option value='Sydney'>Sydney</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label htmlFor='arrivalAirport' className='form-label'>
                  Arrival Airport
                </label>
                <select
                  name='arrivalAirport'
                  className='form-select'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.arrivalAirport}
                >
                  <option>Choose...</option>
                  <option value='Kathmandu'>Kathmandu</option>
                  <option value='Pokhara'>Pokhara</option>
                  <option value='Bhadrapur'>Bhadrapur</option>
                  <option value='Biratnagar'>Biratnagar</option>
                  <option value='Janakpur'>Janakpur</option>
                  <option value='Nepalgunj'>Nepalgunj</option>
                  <option value='Bhairahawa'>Bhairahawa</option>
                  <option value='Dhangadhi'>Dhangadhi</option>
                  <option value='Jomsom'>Jomsom</option>

                  {/* International options */}
                  <option value='Bangkok'>Bangkok</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='New York'>New York</option>
                  <option value='Tokyo'>Tokyo</option>
                  <option value='Sydney'>Sydney</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label htmlFor='departureDate' className='form-label'>
                  Departure Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  name='departureDate'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.departureDate}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='returnDate' className='form-label'>
                  Return Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  name='returnDate'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.returnDate}
                />
              </div>

              <div className='col-md-6'>
                <label htmlFor='inputStatus' className='form-label'>
                  Flight Status
                </label>
                <select
                  id='inputStatus'
                  className='form-select'
                  onChange={(e) => handleChange(e)}
                  // value={applicationData.departureDate}
                >
                  <option>Choose...</option>
                  <option>Domestic</option>
                  <option>International</option>
                </select>
              </div>
              <div className='col-md-12'>
                <label htmlFor='inputAddress' className='form-label'>
                  Address
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='address'
                  placeholder='1234 Main St'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.address}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='inputEmail4' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='example@mail.com'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.email}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='phone' className='form-label'>
                  Phone
                </label>
                <input
                  type='tel'
                  className='form-control'
                  name='phone'
                  onChange={(e) => handleChange(e)}
                  value={applicationData.phone}
                />
              </div>
              <div className='col-12'></div>

              <div className='col-12'> </div>
              <br />
              <button
                type='submit'
                className='btn btn-primary'
                onClick={(e) => addDetails(e)}
              >
                Confirm Ticket
              </button>
            </form>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-6'>
            <br />
            <br />
            <br />
            <br />

            {/* <CheckBooking formData={formData} /> */}
          </div>
        </div>
      </div>
    ) : (
      <div
        className='container 
        align-items-center
        justify-content-center
        text-center
      '
      >
        <h1 className='text-center'>Please Login to Continue</h1>
        <button
          className='btn btn-primary'
          onClick={() => {
            navigate('/Login');
          }}
        >
          Login
        </button>
      </div>
    )
  );
};

export default WhereToFly;
