// import { Button } from "@/components/ui/button";
import Button from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiMail as Mail, FiInstagram as Instagram, FiClock as Clock, FiHeart as Heart, FiShoppingBag as ShoppingBag, FiChevronRight as ChevronRight, FiArrowRight as ArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { MdAutoAwesome as Sparkles } from "react-icons/md";



export default function LandingPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <main className="min-h-screen bg-[#fef9f6] text-black font-sans overflow-x-hidden" ref={ref}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[#f4e4dd] z-0"
          style={{
            y: backgroundY,
          }}
        />
        
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
            style={{
              y: textY,
            }}
          >
            <span className="block">Wamzé</span>
            <motion.span 
              className="text-2xl md:text-3xl font-normal block mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The feel good brand.
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-black text-white hover:bg-black/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get Notified
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-5 w-5 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">Embrace the Wamzé Lifestyle</h2>
          <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Wamzé is more than just a clothing brand — it's a movement towards effortless elegance and unshakable confidence. 
            Each piece is crafted with intention, blending premium comfort with timeless design to create looks that feel as 
            good as they look.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Heart className="h-8 w-8 mx-auto" />,
              title: "Ethically Made",
              description: "Sustainable materials and fair labor practices at every step"
            },
            {
              icon: <ShoppingBag className="h-8 w-8 mx-auto" />,
              title: "Premium Quality",
              description: "Exceptional fabrics that stand the test of time"
            },
            {
              icon: <Sparkles className="h-8 w-8 mx-auto" />,
              title: "Unique Designs",
              description: "Signature styles you won't find anywhere else"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#f4e4dd] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-black/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-24 bg-[#f4e4dd]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Spring Collection</h2>
            <p className="text-black/80 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection for the season
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "The Classic Tee", category: "Tops" },
              { name: "Linen Wide Leg", category: "Bottoms" },
              { name: "Overshirt Jacket", category: "Outerwear" },
              { name: "Silk Slip Dress", category: "Dresses" },
              { name: "Structured Tote", category: "Accessories" },
              { name: "Lounge Set", category: "Sets" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm opacity-70">{item.category}</span>
                  <h3 className="text-xl font-medium">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 px-6 text-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Launching Soon</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto">
            Our flagship store opens in just a few days. Be the first to experience Wamzé in person.
          </p>
          
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: "10", label: "Days" },
              { value: "05", label: "Hours" },
              { value: "22", label: "Minutes" },
              { value: "18", label: "Seconds" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">{item.value}</div>
                <div className="text-sm uppercase tracking-wider opacity-70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">What People Are Saying</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The most comfortable yet stylish pieces I own. Wamzé has become my daily uniform.",
              author: "Sarah J.",
              role: "Fashion Editor"
            },
            {
              quote: "I get compliments every time I wear Wamzé. The quality is unmatched for the price.",
              author: "Michael T.",
              role: "Creative Director"
            },
            {
              quote: "Finally a brand that understands effortless elegance. Obsessed with every piece!",
              author: "Priya K.",
              role: "Influencer"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl leading-none mb-4 opacity-20">"</div>
              <p className="text-lg mb-6">{item.quote}</p>
              <div>
                <div className="font-medium">{item.author}</div>
                <div className="text-sm text-black/60">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 px-6 text-center bg-[#f4e4dd]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-black/80 mb-8 text-lg">
            Be the first to access new collections, exclusive offers, and early sales.
          </p>
          
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full border border-black/20 focus:outline-none focus:ring-2 focus:ring-black w-full text-lg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-black text-white hover:bg-black/90 px-8 py-4 rounded-full text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Join Waitlist
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">#WamzeLife</h2>
          <p className="text-black/80 mb-8 text-lg max-w-2xl mx-auto">
            Follow us on Instagram for daily inspiration and behind-the-scenes
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-black/70 hover:text-black transition-colors mb-12"
          >
            <Instagram className="mr-2 h-5 w-5" />
            @wamze.official
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl aspect-square bg-black/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white/70">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium text-white mb-4">Wamzé</h3>
            <p className="mb-4">The feel good brand.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 mt-8 border-t border-white/10 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>© {new Date().getFullYear()} Wamzé. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}