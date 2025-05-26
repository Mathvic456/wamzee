import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 dark:bg-white dark:text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-2xl font-display tracking-tight mb-6">WAMZE</div>
        <p className="mb-10 opacity-80 max-w-md mx-auto">
          Stay soft. Stay bold. Stay <span className="italic">you</span>.
        </p>
        <div className="flex justify-center gap-6 mb-10">
          <a 
            href="#" 
            className="hover:text-feelgood transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-feelgood text-sm dark:text-feelgood-dark">Designed to make you feel good. Always.</p>
      </div>
    </footer>
  )
}