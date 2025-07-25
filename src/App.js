import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-3xl text-blue-500 font-bold">
        Tailwind работает!
      </div>
    </div>
  );
}

export default App;
// src/App.tsx
import '../src/i18n'; // инициализация языка
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
