import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import { FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { MdAutoAwesome } from 'react-icons/md';
import { BRAND_NAME, TAGLINE } from '../../utils/constants';
import { useRef } from 'react';


export default function Hero({ onNotifyClick }) {
    
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16" ref={ref}>
      <motion.div 
        className="absolute inset-0 bg-[#f4e4dd] z-0"
        style={{ y: backgroundY }}
      />
      
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tight"
          style={{ y: textY }}
        >
          <span className="block">{BRAND_NAME}</span>
          <motion.span 
            className="text-2xl md:text-3xl font-normal block mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {TAGLINE}
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <Button 
            className="bg-black text-white hover:bg-black/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={onNotifyClick}
            icon="sparkles"
            iconPosition="left"
          >
            Get Notified
            <FiChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowRight className="h-5 w-5 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}