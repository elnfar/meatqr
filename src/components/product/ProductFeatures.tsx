import React from 'react';
import { motion } from 'framer-motion';



interface Feature {
    text: string;
  }

interface ProductFeaturesProps {
  features: Feature[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-3"
        >
          {/* <feature.icon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" /> */}
          <p className="text-gray-300">{feature.text}</p>
        </motion.div>
      ))}
    </div>
  );
}