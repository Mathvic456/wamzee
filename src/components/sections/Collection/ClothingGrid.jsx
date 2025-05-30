import { motion } from 'framer-motion';
import ProductCard from '../../ui/ProductCard';
import { staggerContainer } from '../../../utils/animations';

// Import clothing images (assuming they're in your assets folder)
import ClassicTee from '../../../assets/Wamzee/One.jpg';
import LinenPants from '../../../assets/Wamzee/Two.jpg';
import Overshirt from '../../../assets/Wamzee/Three.jpg';

const clothingItems = [
  { 
    name: "The Classic Tee", 
    category: "Tops",
    image: ClassicTee,
    description: "100% organic cotton crewneck tee"
  },
  { 
    name: "Linen Wide Leg", 
    category: "Bottoms",
    image: LinenPants,
    description: "Breathable linen pants with elastic waist"
  },
  { 
    name: "Overshirt Jacket", 
    category: "Outerwear",
    image: Overshirt,
    description: "Versatile cotton overshirt with chest pockets"
  },
];

export default function ClothingGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {clothingItems.map((item, index) => (
        <ProductCard 
          key={index} 
          product={item} 
          type="clothing" 
        />
      ))}
    </motion.div>
  );
}