'use client';

import { motion } from 'framer-motion';

interface PageContentProps {
  title: string;
  description: string;
  isActive: boolean;
}

export function PageContent({ title, description, isActive }: PageContentProps) {
  return (
    <motion.div
      initial={false}
      animate={{ 
        opacity: isActive ? 1 : 0.2,
        scale: isActive ? 1 : 0.95,
        filter: `blur(${isActive ? 0 : 2}px)`,
      }}
      transition={{ 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="max-w-4xl"
    >
      <h1 className="text-7xl font-bold leading-tight text-gray-900">
        {title.split('\n').map((line, i) => (
          <motion.span
            key={i}
            initial={false}
            animate={{ 
              y: isActive ? 0 : 10,
              opacity: isActive ? 1 : 0.2,
            }}
            transition={{ 
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h1>
      <motion.p 
        className="mt-6 text-xl text-gray-600"
        initial={false}
        animate={{ 
          y: isActive ? 0 : 10,
          opacity: isActive ? 1 : 0.2,
        }}
        transition={{ 
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}