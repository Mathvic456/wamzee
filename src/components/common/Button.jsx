import { motion } from 'framer-motion';
import { FiChevronRight, FiArrowRight, FiMail, FiShoppingBag } from 'react-icons/fi';
import { MdAutoAwesome } from 'react-icons/md';

const iconComponents = {
  arrow: FiArrowRight,
  chevron: FiChevronRight,
  mail: FiMail,
  bag: FiShoppingBag,
  sparkles: MdAutoAwesome
};

export default function Button({ 
  children, 
  icon, 
  iconPosition = 'right', 
  className = '', 
  ...props 
}) {
  const Icon = icon ? iconComponents[icon] : null;
  
  return (
    <motion.button
      className={`flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {icon && iconPosition === 'left' && <Icon className="mr-2 h-4 w-4" />}
      {children}
      {icon && iconPosition === 'right' && <Icon className="ml-2 h-4 w-4" />}
    </motion.button>
  );
}