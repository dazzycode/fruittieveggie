
// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BioPage from "../pages/BioPage";
import WorkPage from "../pages/WorkPage";
import ServicePage from "../pages/ServicePage";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
              <Route path="/bio" element={<BioPage/>} />
                   <Route path="/work" element={<WorkPage/>} />
                   <Route path="/services" element={<ServicePage/>} />


    </Routes>
  );
};

export default AllRoutes;
