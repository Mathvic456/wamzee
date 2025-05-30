import { motion } from 'framer-motion';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { MdAutoAwesome } from 'react-icons/md';

const iconComponents = {
  Heart: FiHeart,
  ShoppingBag: FiShoppingBag,
  Sparkles: MdAutoAwesome
};

export default function ValueProp({ icon, title, description }) {
  const Icon = iconComponents[icon];
  
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-[#f4e4dd] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-black/70">{description}</p>
    </motion.div>
  );
}