
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-12 text-center">
      <div className="container mx-auto px-5">
        <div className="text-2xl font-bold mb-8">Gurukulam</div>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Programs</a>
          <a href="#" className="hover:underline">Get Involved</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p className="text-sm text-gray-300">
          © 2025 Gurukulam Integrated Centre for Children with Special Needs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
