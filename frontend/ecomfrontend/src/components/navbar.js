import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo ou Imagem à esquerda */}
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Logo"
                        className="w-10 h-10 mr-2"
                    />
                    <span className="text-white text-xl font-bold">Brand</span>
                </div>

                {/* Botão Hamburguer (aparece em telas pequenas) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                {/* Links e botões em telas médias e grandes */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-400">Home</a>
                    <a href="#" className="text-white hover:text-gray-400">About</a>
                    <a href="#" className="text-white hover:text-gray-400">Contact</a>
                </div>

                {/* Botões de login e cadastrar à direita (só visíveis em telas médias e grandes) */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">
                        Login
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Cadastrar
                    </button>
                </div>
            </div>

            {/* Menu Dropdown (aparece em telas pequenas) */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-2 mt-4">
                        <a href="#" className="text-white hover:text-gray-400">Home</a>
                        <a href="#" className="text-white hover:text-gray-400">About</a>
                        <a href="#" className="text-white hover:text-gray-400">Contact</a>
                        <button className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 w-full">
                            Login
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                            Cadastrar
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;