import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleBackToProducts = () => {
        navigate('/products');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Complete Your Purchase</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full p-2 border border-gray-300 rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full p-2 border border-gray-300 rounded" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
                        Finish Purchase
                    </button>
                </form>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md text-center">
                        <h2 className="text-xl font-bold mb-4">Thank You for Your Purchase!</h2>
                        <p>Your order has been completed successfully.</p>
                        <button 
                            onClick={handleBackToProducts} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
                        >
                            Back to Product List
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Purchase;
