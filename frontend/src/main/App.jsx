import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";

import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
