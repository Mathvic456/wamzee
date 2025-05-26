import { FaArrowRight } from 'react-icons/fa'

export default function Waitlist() {
  return (
    <section className="bg-black text-white py-20 mb-20 dark:bg-white dark:text-black">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-display font-bold mb-6">FIRST DIBS? YEAH, WE GOT YOU.</h2>
        <p className="mb-10 opacity-80">Join the waitlist for early access and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email" 
            className="flex-grow px-4 py-3 rounded-full text-black dark:bg-feelgood-light"
            required
          />
          <button 
            type="submit" 
            className="bg-feelgood text-black px-6 py-3 rounded-full hover:bg-feelgood-dark transition flex items-center justify-center gap-2 dark:bg-feelgood-dark"
          >
            I'm In <FaArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  )
}