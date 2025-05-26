import { motion } from 'framer-motion'

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
}

export const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
}

export const AnimatedDiv = ({ children, variants, className }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    className={className}
  >
    {children}
  </motion.div>
)