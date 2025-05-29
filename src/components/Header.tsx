
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/social', label: 'Social Network' },
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/causes', label: 'Causes' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/donate', label: 'Donate' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/35592194-787a-4331-9848-3f5692075b8f.png" 
            alt="Gurukulam" 
            className="h-10 w-10"
          />
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`
                      inline-block px-4 py-1.5 rounded-full text-xs font-medium 
                      transition-all duration-300 ease-in-out
                      border-2 border-transparent
                      ${isActive 
                        ? 'bg-white text-blue-800 shadow-lg transform scale-105' 
                        : 'bg-blue-700/50 text-white hover:bg-white hover:text-blue-800 hover:shadow-md hover:scale-105 backdrop-blur-sm'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
