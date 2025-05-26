import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: '#E8DAD1',
          y,
          opacity
        }}
      >
        <div className="container mx-auto h-full flex items-center px-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">THE FEEL GOOD EXPERIENCE</h2>
            <p className="text-xl mb-8">
              More than fabric - it's how you move through the world when you're comfortable in your own skin.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black px-8 py-3 rounded-full"
            >
              Discover More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}