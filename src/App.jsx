import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import FAQ from './components/FAQ';
import PRICEBARS from './components/PriceBars';
import Footer from './components/Footer';
import MoreProducts from './components/MoreProducts';
import Bottom from './components/Bottom';

function App() {
  // useEffect(() => {
  //   const link = document.createElement('link');
  //   link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';
  //   link.rel = 'stylesheet';
  //   document.head.appendChild(link);
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <div >
            <Home />
            <PRICEBARS />
            <Table />
            <FAQ />
            <MoreProducts />
            <Footer />
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
