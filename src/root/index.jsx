import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { redirectPaths } from "../utils/redirectPaths";

const Root = () => {
  const location = useLocation();
  const isAuthed = localStorage.getItem("isAuthed");
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      {Boolean(isAuthed) ? (
        <Route path="/" element={<Navbar />}></Route>
      ) : (
        <>
          {redirectPaths.includes(currentPath) ? (
            <Route path={currentPath} element={<Navigate to={"/login"} />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </>
      )}
    </Routes>
  );
};

export default Root;
