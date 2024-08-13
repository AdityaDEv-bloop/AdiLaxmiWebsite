import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  );
};

export default Routing;