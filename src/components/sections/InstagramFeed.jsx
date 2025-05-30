import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { FiInstagram } from 'react-icons/fi';
import { staggerContainer } from '../../utils/animations';

export default function InstagramFeed() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="#WamzeLife"
          subtitle="Follow us on Instagram for daily inspiration and behind-the-scenes"
        />
        
        <a 
          href="#" 
          className="inline-flex items-center text-black/70 hover:text-black transition-colors mb-12"
        >
          <FiInstagram className="mr-2 h-5 w-5" />
          @wamze.official
        </a>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square bg-black/10"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}