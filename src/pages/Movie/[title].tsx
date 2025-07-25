import { useRouter } from "next/router";

export default function MovieDetail() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Фильм: {title}</h1>
      <p className="text-zinc-400">Здесь будут подробности фильма: постер, описание, трейлер, рейтинг и т.д.</p>
    </div>
  );
}
