
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import AuthButton from './AuthButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        {/* First Line: Logo on left, Auth & Language on right */}
        <div className="flex justify-between items-center">
          {/* Logo Section with Dropdown - Top Left */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/35592194-787a-4331-9848-3f5692075b8f.png" 
                    alt="Gurukulam" 
                    className="h-20 w-20 rounded-full border-2 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <ChevronDown className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-56 bg-white border border-gray-200 shadow-lg"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-800 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth and Language Controls - Top Right */}
          <div className="flex items-center gap-2">
            <AuthButton />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
