import './App.css';
import React from 'react';

import Footer from '../components/templates/Footer';
import Logo from '../components/templates/Logo';
import Main from '../components/templates/Main';
import Nav from '../components/templates/Nav';
import Header from '../components/templates/Header';

const App = (props) => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
