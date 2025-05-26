import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
import { AnimatedDiv, scaleUp } from './AnimatedComponents'
import { useInView } from 'react-intersection-observer'
const products = [
  { id: 1, name: 'Cloud Hoodie', price: '$89', color: '#E8DAD1' },
  { id: 2, name: 'Breeze Tee', price: '$49', color: '#D4C4B8' },
  { id: 3, name: 'Dream Pants', price: '$79', color: '#F5ECE6' }
]

export default function ProductShowcase() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <AnimatedDiv variants={scaleUp} className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">WEAR THE VIBE</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Pieces designed for comfort, movement, and pure self-expression
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div 
                className="h-96 w-full"
                style={{ backgroundColor: product.color }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}