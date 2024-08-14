import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail.jsx";
import Home from "../pages/Home.jsx";
import MessangersBags from "../pages/MessangersBags.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messangersbags" element={<MessangersBags />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default Routing;
