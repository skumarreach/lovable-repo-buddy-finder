
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-4">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold">Gurukulam</div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-300 transition-colors">About</Link></li>
            <li><Link to="/causes" className="hover:text-cyan-300 transition-colors">Causes</Link></li>
            <li><Link to="/gallery" className="hover:text-cyan-300 transition-colors">Gallery</Link></li>
            <li><Link to="/donate" className="hover:text-cyan-300 transition-colors">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-300 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
