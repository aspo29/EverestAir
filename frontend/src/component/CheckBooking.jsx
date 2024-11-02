import React, { useState, useEffect } from 'react';
import { deleteApplicant, getApplicants } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils';
const CheckBooking = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = 'Bookings';
  }, []);

  const [applicationData, setApplicationData] = useState([]);
  useEffect(() => {
    getApplicantsDetails();
  }, []);

  const getApplicantsDetails = async () => {
    const result = await getApplicants();
    console.log(result.data);
    setApplicationData(result.data);
  };

  const deleteRecord = async (id) => {
    setLoading(true);
    // Alert box to confirm whether the user wants to delete the record or not
    if (window.confirm('Are you sure to delete this record?') === true) {
      try {
        await deleteApplicant(id);
        // 1 second timeout before reloading the page
        setTimeout(() => {
          navigate('/CheckBooking', { replace: true });
        }, 1000);
      } catch (error) {
        Alert('Error while deleting the record');
      } finally {
        getApplicantsDetails();
      }
      setLoading(false);
    }
  };

  const updateRecord = (data) => {
    // Assuming 'data' is the record to be edited
    navigate(`/Edit/${data._id}`, { state: { data } });
  };

  return localStorage.getItem('token') ? (
    <div className='container'>
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
            top: '0px',
            left: '0',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>{' '}
          <h4 className='  text-white '>
            {' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Booking
            Details
          </h4>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Passport</th>
                <th scope='col'>Age</th>
                <th scope='col'>Departure Airport</th>
                <th scope='col'>Arrival Airport</th>
                <th scope='col'>Departure Date</th>
                <th scope='col'>Return Date</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {applicationData.map((details) => (
                <tr>
                  <td>{details.firstName}</td>
                  <td>{details.lastName}</td>
                  <td>{details.passport}</td>
                  <td>{details.age}</td>
                  <td>{details.departureAirport}</td>
                  <td>{details.arrivalAirport}</td>
                  <td>{formatDate(details.departureDate)}</td>
                  <td>{formatDate(details.returnDate)}</td>
                  <td>{details.phone}</td>
                  <td>
                    <div className='btn-group'>
                      <button
                        className={`${
                          loading ? 'btn btn-danger disabled' : 'btn btn-danger'
                        }`}
                        onClick={() => deleteRecord(details._id)}
                      >
                        Delete
                      </button>
                      <button
                        className='btn btn-success'
                        onClick={() => updateRecord(details)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className='col-md-2'></div>
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
  );
};

export default CheckBooking;
