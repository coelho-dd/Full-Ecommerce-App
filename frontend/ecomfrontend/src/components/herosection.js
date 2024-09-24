import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen p-6 bg-gray-100">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-2">Nome da Empresa</h1>
        <h2 className="text-xl mb-4">Seu subtítulo aqui</h2>
        <Link to="/products" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-56 text-center">
          Conhecer os Produtos
        </Link>
      </div>
      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem da empresa"
          className="w-3/4 h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;