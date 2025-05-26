import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FaArrowRight, FaChevronDown, FaTimes, FaHeart, FaRegHeart } from "react-icons/fa";

const feelGoodCards = [
  {
    id: 1,
    title: "Comfort First",
    shortDesc: "Clothes that hug your soul",
    fullDesc:
      "We design each piece with premium natural fabrics that move with you. No stiff seams, no restrictive fits—just cloud-like comfort that lasts all day.",
    bgColor: "bg-[#E8DAD1]", // base page color
    hoverBgColor: "bg-[#D9CFC7]", // slightly darker on hover
    emoji: "☁️",
  },
  {
    id: 2,
    title: "Wear Your Mood",
    shortDesc: "Dress to feel, not to impress",
    fullDesc:
      "Our color palettes and silhouettes are mood-boosting by design. Feeling bold? Try our sunset hues. Need calm? Our earth tones have you covered.",
    bgColor: "bg-[#E8DAD1]",
    hoverBgColor: "bg-[#D9CFC7]",
    emoji: "🎨",
  },
  {
    id: 3,
    title: "Sustainable Joy",
    shortDesc: "Look good, feel good, do good",
    fullDesc:
      "From organic cotton to recycled packaging, every choice reduces our footprint. Because feeling good shouldn’t cost the Earth.",
    bgColor: "bg-[#E8DAD1]",
    hoverBgColor: "bg-[#D9CFC7]",
    emoji: "🌱",
  },
  {
    id: 4,
    title: "Effortless Style",
    shortDesc: "Simple looks, big impact",
    fullDesc:
      "Our pieces are designed to be effortlessly stylish, making your daily wardrobe choices easy and confident.",
    bgColor: "bg-[#E8DAD1]",
    hoverBgColor: "bg-[#D9CFC7]",
    emoji: "✨",
  },
];

export default function Hero() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [liked, setLiked] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-auto min-h-screen overflow-hidden bg-[#E8DAD1]">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          y: yBg,
          background: "linear-gradient(45deg, #E8DAD1, #F5ECE6, #D4C4B8)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-6xl font-bold leading-tight md:text-7xl lg:text-8xl"
        >
          <span className="block">WANNA FEEL GOOD?</span>
          <span className="block bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            WEAR THE VIBE.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 max-w-2xl text-xl"
        >
          Tap into happiness with clothes designed for how you want to feel today.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >{feelGoodCards.map((card) => (
  <motion.div
    key={card.id}
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`rounded-3xl p-8 shadow-lg cursor-pointer transition-colors duration-300
      ${expandedCard === card.id ? "bg-[#D9CFC7]" : "bg-[#E8DAD1]"}
      hover:bg-[#D9CFC7]
      relative
      `}
    onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
  >
    {expandedCard !== card.id ? (
      <>
        <motion.span
          whileHover={{ y: -5, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl block"
        >
          {card.emoji}
        </motion.span>
        <h3 className="mt-4 text-2xl font-bold text-gray-900">{card.title}</h3>
        <p className="mt-2 text-sm text-gray-700">{card.shortDesc}</p>
        <div className="absolute bottom-6 right-6 flex items-center gap-1 text-sm text-gray-900">
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
          aria-label="Close expanded card"
        >
          <FaTimes />
        </button>
        <span className="text-4xl">{card.emoji}</span>
        <h3 className="mt-6 text-3xl font-bold text-gray-900">{card.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">{card.fullDesc}</p>
        <button
          className="mt-8 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-transform duration-200 hover:scale-105"
        >
          Shop this vibe <FaArrowRight />
        </button>
      </>
    )}
    


              <AnimatePresence>
                {expandedCard === card.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`${card.bgColor} absolute inset-0 z-10 rounded-3xl p-8 shadow-2xl`}
                  >
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="absolute right-6 top-6 text-gray-800 hover:text-black"
                    >
                      <FaTimes />
                    </button>
                    <div className="h-full">
                      <span className="text-4xl">{card.emoji}</span>
                      <h3 className="mt-6 text-3xl font-bold text-gray-900">{card.title}</h3>
                      <p className="mt-4 text-lg leading-relaxed text-gray-800">{card.fullDesc}</p>
                      <button
                        className="mt-8 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-transform duration-200 hover:scale-105"
                      >
                        Shop this vibe <FaArrowRight />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.button
            onClick={() => setLiked(!liked)}
            className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 transition-all duration-300 ${
              liked ? "bg-pink-100 text-pink-600" : "bg-black text-white"
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0,0,0,0.3)",
              backgroundColor: liked ? "#FBCFE8" : "#333333",
              color: liked ? "#9D174D" : "#FFFFFF",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {liked ? (
              <>
                <FaHeart /> You'll love this brand!
              </>
            ) : (
              <>
                <FaRegHeart /> Like what you see?
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
