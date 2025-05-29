
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 text-center">
      <div className="container mx-auto px-5">
        <div className="text-2xl font-bold mb-8">Gurukulam</div>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/causes" className="hover:underline">Causes</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p className="mb-2">Gurukulam Integrated Centre for Children with Special Needs</p>
        <p className="mb-4">Tax exemption under 80G available for all donations</p>
        <p className="text-sm text-slate-300">
          © 2025 Gurukulam Integrated Centre for Children with Special Needs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
