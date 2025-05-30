import { motion } from 'framer-motion';
import SectionHeader from '../../common/SectionHeader';
import ClothingGrid from './ClothingGrid';
import PerfumeGrid from './PerfumeGrid';
import { staggerContainer } from '../../../utils/animations';

export default function Collection() {
  return (
    <section id="collections" className="py-24 px-6 bg-[#f4e4dd]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Collections"
          subtitle="Discover our carefully curated selection for the season"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Clothing Collection */}
          <motion.div className="mb-20">
            <h3 className="text-2xl font-medium mb-8">Signature Apparel</h3>
            <ClothingGrid />
          </motion.div>
          
          {/* Perfume Collection */}
          <motion.div>
            <h3 className="text-2xl font-medium mb-8">Essence Collection</h3>
            <PerfumeGrid />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}