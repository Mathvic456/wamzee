import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

export default function ProductCard({ product, type = 'clothing' }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-white"
      variants={cardHover}
      whileHover="hover"
    >
      {/* Image container with proper sizing */}
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
      </div>
      
      {/* Product info overlay */}
      <div className="absolute bottom-0 left-0 p-6 text-black translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm opacity-70 block">
          {type === 'perfume' ? 'Fragrance' : product.category}
        </span>
        <h3 className="text-xl font-medium">{product.name}</h3>
        {product.description && (
          <p className="text-sm opacity-80 mt-1">{product.description}</p>
        )}
      </div>
    </motion.div>
  );
}