import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import FAQ from './components/FAQ';
import PRICEBARS from './components/PriceBars';
import PRICEBARS2 from './components/PriceBars2';
import Footer from './components/Footer';
import MoreProducts from './components/MoreProducts';
import Bottom from './components/Bottom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <PRICEBARS/>
            <Table />
            <FAQ />
            <MoreProducts />
          </div>
        } />
        <Route path="/unlimited-pricing" element={
          <div>
            <Home />
            <PRICEBARS2/>
            <Table />
            <FAQ />
            <MoreProducts />
          </div>
      } />
      </Routes>
    </Router>
  );
}

export default App;
