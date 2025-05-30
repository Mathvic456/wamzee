import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';
import { staggerContainer } from '../../utils/animations';

const testimonials = [
  {
    quote: "The most comfortable yet stylish pieces I own. Wamzé has become my daily uniform.",
    author: "Sarah J.",
    role: "Fashion Editor"
  },
  {
    quote: "The perfumes have incredible longevity and the scents are truly unique. I'm obsessed!",
    author: "Michael T.",
    role: "Creative Director"
  },
  {
    quote: "Finally a brand that understands effortless elegance. The quality is unmatched!",
    author: "Priya K.",
    role: "Influencer"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader 
        title="What People Are Saying"
        subtitle="Don't just take our word for it"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial} 
          />
        ))}
      </motion.div>
    </section>
  );
}