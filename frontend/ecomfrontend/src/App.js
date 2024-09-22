import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import ProductList from './pages/productList';
import ProductDetail from './pages/productDetail';
import Purchase from './pages/purchase';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/purchase' element={<Purchase />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
