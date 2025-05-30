import { motion } from 'framer-motion';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { fadeInUp } from '../../utils/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-black text-white/70">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-medium text-white mb-4">Wamzé</h3>
          <p className="mb-4">The feel good brand.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <FiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {[
          {
            title: "Shop",
            items: ["Apparel", "Perfumes", "Collections", "Accessories", "Gift Cards"]
          },
          {
            title: "About",
            items: ["Our Story", "Sustainability", "Journal", "Careers", "Press"]
          },
          {
            title: "Customer Care",
            items: ["Contact Us", "Shipping", "Returns", "FAQ", "Size Guide"]
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto pt-12 mt-8 border-t border-white/10 text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>© {currentYear} Wamzé. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}