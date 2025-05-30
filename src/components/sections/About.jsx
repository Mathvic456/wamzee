import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ValueProp from '../ui/ValueProp';
import { staggerContainer } from '../../utils/animations';
import { VALUE_PROPS } from '../../utils/constants';

export default function About() {
  return (
    <section className="py-24 px-6 text-center max-w-5xl mx-auto">
      <SectionHeader 
        title="Embrace the Wamzé Lifestyle"
        subtitle="Wamzé is more than just a brand — it's a movement towards effortless elegance and unshakable confidence. Each piece is crafted with intention, blending premium comfort with timeless design."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {VALUE_PROPS.map((item, index) => (
          <ValueProp
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </motion.div>
    </section>
  );
}