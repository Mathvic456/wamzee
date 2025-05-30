import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../common/Button';
import { NAV_ITEMS } from '../../utils/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wamzé
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.button
              key={index}
              className="text-black/80 hover:text-black transition-colors text-sm font-medium uppercase tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: NAV_ITEMS.length * 0.1 + 0.3, duration: 0.5 }}
          >
            <Button 
              className="bg-black text-white hover:bg-black/90"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white/95 backdrop-blur-lg w-full absolute top-full left-0 px-6 py-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={index}
                className="text-black/80 hover:text-black transition-colors text-sm font-medium uppercase tracking-wider py-2 text-left"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="bg-black text-white hover:bg-black/90 w-full mt-2"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}