import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'pay the bill',
  'place an order',
  'leave a tip',
  'view the menu',
  'leave a review'
];

const textVariants = {
  enter: {
    y: 30,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -30,
    opacity: 0
  }
};

export function AnimatedText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="text-orange-500 font-bold"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
