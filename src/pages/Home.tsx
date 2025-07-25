'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/index'; // правильно, один уровень вверх

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => changeLanguage('ru')}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          {t('lang.ru')}
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
        >
          {t('lang.en')}
        </button>
        <button
          onClick={() => changeLanguage('uz')}
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
        >
          {t('lang.uz')}
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-lg text-gray-300">{t('description')}</p>
    </main>
  );
}
