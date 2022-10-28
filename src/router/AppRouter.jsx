import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import About from "../pages/About";
import Navbar from "../components/navbar/Navbar";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
