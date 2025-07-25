// src/pages/top.tsx
import React from "react";

const topMovies = [
  {
    id: 1,
    title: "Опенгеймер",
    year: 2023,
    rating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/fb5ZYWMLP8fzjcPsm3B6B0gslN3.jpg",
  },
  {
    id: 2,
    title: "Начало",
    year: 2010,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 3,
    title: "Интерстеллар",
    year: 2014,
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/nCbkOyOMTePnpkWnYh2H0EqnWgd.jpg",
  },
];

export default function TopPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🏆 Топ рейтинг</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topMovies.map((movie) => (
          <div key={movie.id} className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-zinc-400">{movie.year}</p>
              <p className="text-yellow-400 font-bold mt-2">⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
