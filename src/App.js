import React from 'react';

import './App.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Art from './sections/Art/Art';
import Reviews from './sections/Reviews/Reviews';
import Features from './sections/Features/Features';

function App() {

  return (
    <div className="App">
      <Header />
      <Art />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
