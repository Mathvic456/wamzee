import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaChevronDown, FaTimes, FaArrowRight } from "react-icons/fa";

export default function BrandStory() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('philosophy');

  const storyCards = [
    {
      id: 1,
      tab: 'philosophy',
      title: "Our Why",
      shortDesc: "Why feeling good matters",
      fullDesc: "We reject the idea that fashion should be uncomfortable. Our designs start with how you want to feel, not just how you want to look.",
      emoji: "💭",
      bgColor: "bg-[#E8DAD1]",
      hoverBgColor: "bg-[#D9CFC7]"
    },
    {
      id: 2,
      tab: 'materials',
      title: "CloudWeave™",
      shortDesc: "Fabric technology",
      fullDesc: "92% organic cotton, 8% elastane - engineered for all-day comfort that gets softer with every wash.",
      emoji: "☁️",
      bgColor: "bg-[#E8DAD1]",
      hoverBgColor: "bg-[#D9CFC7]"
    },
    {
      id: 3,
      tab: 'journey',
      title: "Our Roots",
      shortDesc: "From Lagos to the world",
      fullDesc: "What started as a small pop-up in 2020 is now a global movement with 10,000+ Feel Good Fam members.",
      emoji: "🌍",
      bgColor: "bg-[#E8DAD1]",
      hoverBgColor: "bg-[#D9CFC7]"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#E8DAD1] py-28">
      {/* MATCHING GRADIENT BACKGROUND */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          background: "linear-gradient(45deg, #E8DAD1, #F5ECE6, #D4C4B8)"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* SECTION HEADER - CONSISTENT WITH HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl font-bold mb-6 md:text-7xl lg:text-8xl">
            <span className="block">THE FEEL GOOD</span>
            <span className="block bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              PHILOSOPHY
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            More than clothes - it's how you move through the world when you're comfortable in your skin.
          </p>
        </motion.div>

        {/* INTERACTIVE CONTENT CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {storyCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl p-8 shadow-lg cursor-pointer transition-colors duration-300
                ${expandedCard === card.id ? "bg-[#D9CFC7]" : card.bgColor}
                hover:bg-[#D9CFC7] relative`}
              onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
            >
              {expandedCard !== card.id ? (
                <>
                  <motion.span 
                    className="text-4xl block mb-4"
                    whileHover={{ rotate: 5 }}
                  >
                    {card.emoji}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-gray-700">{card.shortDesc}</p>
                  <div className="absolute bottom-6 right-6 flex items-center gap-1 text-sm">
                    Read more <FaChevronDown className="mt-0.5" />
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}
                    className="absolute right-6 top-6 text-gray-800 hover:text-black"
                  >
                    <FaTimes />
                  </button>
                  <span className="text-4xl">{card.emoji}</span>
                  <h3 className="mt-6 text-3xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-800">{card.fullDesc}</p>
                  <button
                    className="mt-8 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-transform duration-200 hover:scale-105"
                  >
                    Learn more <FaArrowRight />
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* FOUNDER QUOTE - SIMILAR TO HERO CARDS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 bg-[#F5ECE6] rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <FaQuoteLeft className="text-4xl mb-6 text-[#D4C4B8]" />
            <blockquote className="text-2xl italic mb-6">
              "We don't make clothes - we make confidence boosters you can wear."
            </blockquote>
            <p className="font-bold">— Adeola, Founder</p>
          </div>
          <motion.div 
            className="absolute -right-20 -bottom-20 text-[200px] opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            🌟
          </motion.div>
        </motion.div>

        {/* SCROLL PROMPT - MATCHING HERO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="mb-2">Keep scrolling to see the collection</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}