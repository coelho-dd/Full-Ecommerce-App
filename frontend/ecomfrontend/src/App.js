import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import ProductList from './pages/productList';
import ProductDetail from './pages/productDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/products' element={<ProductList />} />

          <Route exact path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
