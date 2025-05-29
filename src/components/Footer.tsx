
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-slate-800 text-white py-12 text-center">
      <div className="container mx-auto px-5">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/35592194-787a-4331-9848-3f5692075b8f.png" 
            alt="Gurukulam" 
            className="h-12 w-12"
          />
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <Link to="/" className="hover:underline">{t('nav.home')}</Link>
          <Link to="/about" className="hover:underline">{t('nav.about')}</Link>
          <Link to="/causes" className="hover:underline">{t('nav.causes')}</Link>
          <Link to="/gallery" className="hover:underline">{t('nav.gallery')}</Link>
          <Link to="/transparency" className="hover:underline">{t('nav.transparency')}</Link>
          <Link to="/contact" className="hover:underline">{t('nav.contact')}</Link>
          <a href="#" className="hover:underline">{t('footer.privacyPolicy')}</a>
        </div>
        <p className="mb-2">{t('footer.organization')}</p>
        <p className="mb-4">{t('footer.taxExemption')}</p>
        <p className="text-sm text-slate-300">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
