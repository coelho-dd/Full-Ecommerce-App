import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = () => {
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos da API
  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data); // Define os produtos no estado
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
          <Link to={`/products/${product.id}`}>
            <img src={product.image_url} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">R$ {product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;