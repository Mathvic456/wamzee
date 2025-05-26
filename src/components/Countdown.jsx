import { FaClock } from 'react-icons/fa'

export default function Countdown() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32 text-center dark:text-white">
      <div className="inline-flex items-center gap-2 bg-feelgood px-6 py-3 rounded-full mb-6 dark:bg-feelgood-dark">
        <FaClock size={16} />
        <span>LAUNCHING SOON</span>
      </div>
      <h2 className="text-3xl font-display font-bold mb-6">GOOD THINGS COME TO THOSE WHO <span className="italic">WAIT</span>...</h2>
      <div className="h-1 bg-black/10 w-full max-w-md mx-auto mb-4 dark:bg-white/10">
        <div className="h-1 bg-black w-1/3 dark:bg-white"></div>
      </div>
      <p className="opacity-70">But not too long.</p>
    </section>
  )
}