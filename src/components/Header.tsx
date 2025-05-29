

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButton from './AuthButton';

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const navItems = [
    { path: '/social', label: t('nav.social') },
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/causes', label: t('nav.causes') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/transparency', label: t('nav.transparency') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-5">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Link to="/" className="group transition-all duration-300 hover:scale-105">
            <div className="relative">
              <img 
                src="/lovable-uploads/35592194-787a-4331-9848-3f5692075b8f.png" 
                alt="Gurukulam" 
                className="h-20 w-20 rounded-full border-2 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Auth and Language Controls */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <AuthButton />
          <LanguageSwitcher />
        </div>

        {/* Navigation */}
        <nav className="flex justify-center">
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

