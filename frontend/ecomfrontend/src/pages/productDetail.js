import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/products/${id}/`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Product not found</div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-2xl p-4 text-center">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <img 
                    src={product.image_url} 
                    alt={product.name} 
                    className="w-full h-auto rounded shadow-lg mb-4" 
                />
                <p className="text-xl font-semibold">Price: ${product.price}</p>
                <p className="mt-2 mb-5 text-gray-700">{product.description}</p>
                <Link to="/purchase" className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">Buy It Now</Link>
            </div>
        </div>
    );
};

export default ProductDetail;
