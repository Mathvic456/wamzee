import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { FiMail } from 'react-icons/fi';

export default function Waitlist({ onJoinClick }) {
  return (
    <section id="waitlist" className="py-24 px-6 text-center bg-[#f4e4dd]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <SectionHeader
          title="Join Our Community"
          subtitle="Be the first to access new collections, exclusive offers, and early sales."
        />
        
        <Button 
          className="bg-black text-white hover:bg-black/90 px-8 py-4 rounded-full text-lg"
          onClick={onJoinClick}
          icon="mail"
          iconPosition="left"
        >
          Join Waitlist
        </Button>
      </motion.div>
    </section>
  );
}