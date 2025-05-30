import { motion } from 'framer-motion';
import ProductCard from '../../ui/ProductCard';
import { staggerContainer } from '../../../utils/animations';

import NoirEssence from '../../../assets/Wamzee/Four.jpg';
import Lumiere from '../../../assets/Wamzee/Five.jpg';
import AquaTerra from '../../../assets/Wamzee/Six.jpg';

const perfumeItems = [
  { 
    name: "Noir Essence", 
    category: "Woody",
    image: NoirEssence,
    description: "A deep, mysterious blend of oud and vanilla"
  },
  { 
    name: "Lumière", 
    category: "Floral",
    image: Lumiere,
    description: "Bright floral notes with a hint of citrus"
  },
  { 
    name: "Aqua Terra", 
    category: "Fresh",
    image: AquaTerra,
    description: "Crisp aquatic notes with marine accords"
  },
];

export default function PerfumeGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {perfumeItems.map((item, index) => (
        <ProductCard 
          key={index} 
          product={item} 
          type="perfume" 
        />
      ))}
    </motion.div>
  );
}