import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Authentication/Auth';
import Homepage from './Homepage/Homepage';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
};

export default Root;
