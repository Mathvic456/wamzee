import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <motion.div 
      className={`text-center mb-12 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-black/70 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}