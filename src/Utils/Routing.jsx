import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetail from "../components/ProductDetail.jsx";
import Home from "../pages/Home.jsx";
import MessangersBags from "../pages/MessangersBags.jsx";
import TotesPage from "../pages/TotesPage .jsx";
import BackpacksPage from "../pages/BackpacksPage.jsx";
import DuffelBagsPage from "../pages/DuffelBagsPage .jsx";
import DoppKitsPage from "../pages/DoppKitsPage .jsx";
import JournalsPage from "../pages/JournalsPage .jsx";
import Cart from "../pages/Cart.jsx";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messangersbags" element={<MessangersBags />} />

        <Route path="/product/:productId" element={<ProductDetail />} />

        <Route path="/totes" element={<TotesPage />} />
        <Route path="/backpacks" element={<BackpacksPage />} />
        <Route path="/duffel-bags" element={<DuffelBagsPage />} />
        <Route path="/dopp-kits" element={<DoppKitsPage />} />
        <Route path="/journals" element={<JournalsPage />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Routing;
