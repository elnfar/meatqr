import React from 'react';
import { motion } from 'framer-motion';



interface Feature {
    text: string;
  }
interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    features: Feature[];
  }

interface ProductImageProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  products: Product[];
  selectedProduct: string;
  onSelectProduct: (id: string) => void;
}

export function ProductImage({ 
  src, 
  alt, 
  name, 
  description, 
  products, 
  selectedProduct, 
  onSelectProduct 
}: ProductImageProps) {
  return (
    <div className="relative aspect-[21/9] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.7 }}
      />
      
      <motion.img
        src={src}
        alt={alt}
        className=" object-cover w-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Menu Navigation */}
      <div className="absolute inset-y-0 left-0 z-30 w-1/4 bg-gradient-to-r from-black to-transparent p-6">
        <div className="flex flex-col space-y-3 h-full justify-center">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-all
                ${selectedProduct === product.id 
                  ? 'bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/30' 
                  : 'hover:bg-white/10'}`}
              onClick={() => onSelectProduct(product.id)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {product.name}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="absolute inset-0 z-20 p-12 flex flex-col justify-end pl-[33%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h3 
          className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {name}
        </motion.h3>
        
        <motion.p 
          className="text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-lg"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}