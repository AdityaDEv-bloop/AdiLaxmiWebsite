import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routing from "./Utils/Routing";

const App = () => {
  return (
    <div>
      <Nav />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
