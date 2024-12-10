import React, {  useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '../components/product/ProductCard';


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
  
  export const products: Product[] = [
    {
      id: 'meat-orders',
      name: 'Meat Orders',
      description: 'By scanning the QR code, guests can access a digital menu, place order and pay for it.',
      image: '/order.jpg',
      features: [
        {
          text: 'AI-powered order management with visual recognition'
        },
        {
          text: 'Real-time order tracking with predictive timing'
        },
        {
          text: 'Smart recommendations based on customer preferences'
        }
      ]
    },
    {
      id: 'meat-pay',
      name: 'Meat Pay',
      description: 'In short, the guest can quickly view their tables bill and easily pay it. Also, the guest can pay part of the bill in case if split payment among groups',
      image: '/payment.jpg',
      features: [
        {
          text: 'Contactless payments with biometric verification'
        },
        {
          text: 'Smart bill splitting with AI-powered suggestions'
        },
        {
          text: 'Advanced payment analytics'
        }
      ]
    },
    {
      id: 'meat-menu',
      name: 'Meat Menu',
      description: 'Digital menu accessible via QR code.',
      image: '/menu.jpg',
      features: [
        {
          text: 'AI-enhanced menu visualization'
        },
        {
          text: 'Interactive 3D dish previews'
        },
        {
          text: 'Smart menu optimization based on trends'
        }
      ]
    },
    {
      id: 'Meat Tips',
      name: 'Meat Tips',
      description: 'Your guests can tip the servers, bartenders and kitchen by scanning the QR code.',
      image: '/tips.jpg',
      features: [
        {
          text: 'Smart tip distribution based on service metrics'
        },
        {
          text: 'Performance-based reward system'
        },
        {
          text: 'Real-time service quality analytics'
        }
      ]
    }
  ];

export function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);

  return (
    <>
    <section className="min-h-screen py-20  bg-red-500 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{color:"white"}}
        >
          BUT, HOW THINGS REALLY WORK ?
        </motion.h2>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard 
              product={products.find(p => p.id === selectedProduct)!}
              products={products}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>

    </>
  );
}