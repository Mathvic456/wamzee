import { FaHeart } from 'react-icons/fa'

export default function Gallery() {
  return (
    <section className="mb-32 dark:text-white">
      <h2 className="text-3xl font-display font-bold mb-10 text-center px-6">SNEAK PEEK</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/10 dark:bg-white/10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-feelgood aspect-square flex items-center justify-center dark:bg-feelgood-dark">
            <FaHeart size={24} className="opacity-30 dark:opacity-20" />
          </div>
        ))}
      </div>
    </section>
  )
}