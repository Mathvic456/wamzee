import { useState, useEffect } from 'react'
import { FaInstagram, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setScrolled(scrollPosition > 10)
  }, [scrollPosition])

  const navItems = [
    { name: 'Story', href: '#story' },
    { name: 'Collection', href: '#collection' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journal', href: '#journal' }
  ]

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* WAMZE Logo - Bold and Eye-catching */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <a 
              href="#" 
              className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300"
            >
              WAMZE
            </a>
            <span className="ml-2 text-xs font-medium bg-black text-white px-2 py-1 rounded-full dark:bg-white dark:text-black">
              THE FEEL GOOD BRAND
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-lg font-medium group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 bg-black dark:bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            <div className="flex items-center space-x-4 ml-6">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
              </motion.button>

              <motion.a
                href="#"
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                whileHover={{ y: -2 }}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-8 space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-2xl font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex space-x-6 pt-4">
                  <button
                    onClick={toggleTheme}
                    className="p-2"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                  </button>
                  <a
                    href="#"
                    className="p-2"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}