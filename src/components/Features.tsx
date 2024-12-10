import React from 'react';
import { Smartphone, Clock, Edit, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Optimized for all devices, ensuring a seamless experience for your customers"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Updates",
      description: "Update your menu instantly, no need to reprint or redistribute QR codes"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Easy Management",
      description: "Intuitive dashboard to manage your menu items, prices, and descriptions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Reach international customers with automatic menu translations"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MeatQR?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="text-black mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}