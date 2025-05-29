
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2">
        <Globe className="w-4 h-4 text-white" />
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-transparent text-white border border-white/30 rounded px-2 py-1 text-sm focus:outline-none focus:border-white"
        >
          <option value="en" className="text-black">English</option>
          <option value="hi" className="text-black">हिंदी</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
