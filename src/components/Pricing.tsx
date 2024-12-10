import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "Basic QR code menu",
        "Up to 20 menu items",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$29",
      features: [
        "Everything in Starter",
        "Unlimited menu items",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "Multi-language support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Multiple locations",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}