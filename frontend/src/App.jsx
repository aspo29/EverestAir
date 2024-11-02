import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home.jsx';
import WhereToFly from './component/WhereToFly.jsx';
import Packages from './component/Packages.jsx';
import About from './component/About.jsx';
import Layout from './component/Layout.jsx';
import CheckBooking from './component/CheckBooking.jsx';
import EditData from './component/EditData.jsx';
import Login from './component/Login.jsx';
import SignupPage from './component/Signup.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/WhereToFly' element={<WhereToFly />} />
          <Route path='/Packages' element={<Packages />} />
          <Route path='/CheckBooking' element={<CheckBooking />} />
          <Route path='/About' element={<About />} />
          <Route path='/Edit/:id' element={<EditData />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<SignupPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
