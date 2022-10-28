import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import About from "../pages/About";
import Navbar from "../components/navbar/Navbar";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";
import Home from "../pages/Home";
const AppRouter = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <BrowserRouter>
        {nav && <Navbar />}
        <Routes>
          <Route path="/" element={<Login funcNav={setNav} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About funcNav={setNav} />} />
          <Route path="/home" element={<Home funcNav={setNav} />} />
          <Route path="/Details" element={<Details funcNav={setNav} />} />
          <Route path="*" element={<NotFound funcNav={setNav} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
