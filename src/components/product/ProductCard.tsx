import React from 'react';
import { motion } from 'framer-motion';

import { ProductImage } from './ProductImage';




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
interface ProductCardProps {
  product: Product;
  products: Product[];
  selectedProduct: string;
  onSelectProduct: (id: string) => void;
}

export function ProductCard({ product, products, selectedProduct, onSelectProduct }: ProductCardProps) {
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProductImage 
        src={product.image} 
        alt={product.name}
        name={product.name}
        description={product.description}
        products={products}
        selectedProduct={selectedProduct}
        onSelectProduct={onSelectProduct}
      />
{/*       
      <div className="p-8">
        <ProductFeatures features={product.features} />

        <motion.button
          className="mt-8 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-xl 
            font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div> */}
    </motion.div>
  );
}