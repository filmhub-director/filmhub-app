import { Home, Film, Star } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 p-6 flex flex-col space-y-6 shadow-xl">
      <div className="text-2xl font-bold text-white">🎬 FilmHub</div>

      <nav className="flex flex-col space-y-4 text-zinc-300">
        <Link
          href="/"
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <Home size={20} />
          Главная
        </Link>

        <Link
          href="/movies"
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <Film size={20} />
          Фильмы
        </Link>

        <Link
          href="/top"
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <Star size={20} />
          Топ рейтинг
        </Link>
      </nav>
    </aside>
  );
}
