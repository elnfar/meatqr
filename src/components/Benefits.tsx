import Image from 'next/image';
import React from 'react';

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Transform Your Restaurant Experience</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black mt-1"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
                  <p className="text-gray-600">Let your staff focus on what matters most – attention to Guests</p>
                </div>
              </div>




              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black mt-1"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Implementation & Integration</h3>
                  <p className="text-gray-600">Smooth and reliable integration with your POS system.</p>
                </div>
              </div>

      
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black mt-1"></div>
                <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Bye to complexity</h3>
                <p className="text-gray-600">No additional apps on your phone. No extra equipment, no</p>
                </div>
              </div>


              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black mt-1"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Enhanced Customer Experience</h3>
                  <p className="text-gray-600">Let the customers choose their food, make the payment, and leave the tip without wasting time or effort!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}