'use client';

import Link from 'next/link';
import { Home, Film, Star, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 p-4 flex flex-col space-y-4 fixed">
      <h1 className="text-2xl font-bold mb-6">🎬 FilmHub</h1>

      <Link href="/" className="flex items-center space-x-2 hover:text-blue-500">
        <Home size={20} />
        <span>Главная</span>
      </Link>

      <Link href="/films" className="flex items-center space-x-2 hover:text-blue-500">
        <Film size={20} />
        <span>Фильмы</span>
      </Link>

      <Link href="/series" className="flex items-center space-x-2 hover:text-blue-500">
        <Star size={20} />
        <span>Сериалы</span>
      </Link>

      <Link href="/favorites" className="flex items-center space-x-2 hover:text-blue-500">
        <Heart size={20} />
        <span>Избранное</span>
      </Link>
    </div>
  );
}
