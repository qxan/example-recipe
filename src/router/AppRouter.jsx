import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import About from "../pages/About";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
