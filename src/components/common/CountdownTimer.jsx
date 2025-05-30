import { motion } from 'framer-motion';
import useCountdown from '../../hooks/useCountdown';
import useConfetti from '../../hooks/useConfetti';

export default function CountdownTimer() {
  const { timeLeft, isComplete } = useCountdown();
  useConfetti(isComplete);

  if (isComplete) {
    return (
      <motion.div 
        className="text-4xl font-bold text-center py-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        🎉 We're Live! 🎉
      </motion.div>
    );
  }

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {[
        { value: timeLeft.days.toString().padStart(2, '0'), label: "Days" },
        { value: timeLeft.hours.toString().padStart(2, '0'), label: "Hours" },
        { value: timeLeft.minutes.toString().padStart(2, '0'), label: "Minutes" },
        { value: timeLeft.seconds.toString().padStart(2, '0'), label: "Seconds" }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.div 
            className="text-4xl md:text-6xl font-bold mb-2"
            key={item.value}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.value}
          </motion.div>
          <div className="text-sm uppercase tracking-wider opacity-70">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}