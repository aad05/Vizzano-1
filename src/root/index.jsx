import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { RequireAuth } from 'react-auth-kit';
import Home from '../components/Home';
import Flow from '../components/Flow';

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/flow/:idFlow" element={<Flow />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
