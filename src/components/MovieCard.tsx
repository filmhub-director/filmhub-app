import Image from 'next/image';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: number;
}

export default function MovieCard({ title, poster, rating }: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <Image
        src={`/posters/${poster}`}
        alt={`Постер фильма ${title}`}
        width={300}
        height={450}
        className="rounded-t-2xl object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-yellow-400">⭐ {rating.toFixed(1)}</p>
      </div>
    </div>
  );
}
