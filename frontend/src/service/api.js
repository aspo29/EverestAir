import axios from 'axios';

const url = 'http://localhost:5001';

const API = axios.create({ baseURL: 'http://localhost:5001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    req.headers.email = `${localStorage.getItem('email')}`;
  }
  return req;
});

export const addApplicant = async (applicationData) =>
  API.post('/WhereToFly', applicationData);
// axios.get();
// axios.post();
export const getApplicants = async () => API.get('/CheckBookings');

export const deleteApplicant = async (id) => API.delete(`/CheckBookings/${id}`);

export const updateApplicant = async (id, applicationData) =>
  API.patch(`/CheckBookings/${id}`, applicationData);

export const createUser = async (userData) => {
  return await axios.post(`${url}/signup`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${url}/login`, userData);
};
