import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import FAQ from './components/FAQ';
import PRICEBARS from './components/AgentPricing';
import PRICEBARS2 from './components/UnlimitedPricing';
import MoreProducts from './components/MoreProducts';
import Bottom from './components/Bottom';

const Layout = ({ children }) => (
  <div>
    <Home />
    {children}
    <Table />
    <FAQ />
    <MoreProducts />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><PRICEBARS /></Layout>} />
        <Route path="/unlimited-pricing" element={<Layout><PRICEBARS2 /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
