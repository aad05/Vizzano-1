import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { RequireAuth } from "react-auth-kit";
import { paths } from "../utils/paths";

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
        {paths.map(({ id, Component, path }) => (
          <Route path={path} element={<Component />} key={id} />
        ))}
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
