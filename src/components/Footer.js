// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white w-full mt-auto">
            <div className="container mx-auto flex justify-center py-4">
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-gray-200">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-gray-200">Cookie Policy</a></li>
                    <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
