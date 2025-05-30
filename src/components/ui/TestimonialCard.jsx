import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-sm"
      variants={cardHover}
      whileHover="hover"
    >
      <div className="text-4xl leading-none mb-4 opacity-20">"</div>
      <p className="text-lg mb-6">{testimonial.quote}</p>
      <div>
        <div className="font-medium">{testimonial.author}</div>
        <div className="text-sm text-black/60">{testimonial.role}</div>
      </div>
    </motion.div>
  );
}