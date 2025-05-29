
import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-600 text-white py-4">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold">Gurukulam</div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Causes</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Donate</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
