import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";

import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Home from "../components/home/Home";

const App = (props) => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
