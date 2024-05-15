// Navbar.js
import React from 'react';


const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white w-full">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">My Awesome App</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-200">Home</a></li>
                    <li><a href="#" className="hover:text-gray-200">About</a></li>
                    <li><a href="#" className="hover:text-gray-200">Services</a></li>
                    <li><a href="#" className="hover:text-gray-200">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

