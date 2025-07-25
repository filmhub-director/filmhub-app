import Layout from '@/components/Layout/Layout';
import MovieCard from '@/components/MovieCard';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Фильмы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <MovieCard title="Начало" poster="inception.jpg" rating={8.8} />
        <MovieCard title="Интерстеллар" poster="interstellar.jpg" rating={8.6} />
        <MovieCard title="Тёмный рыцарь" poster="dark-knight.jpg" rating={9.0} />
      </div>
    </Layout>
  );
}
