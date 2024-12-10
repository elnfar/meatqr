import { AnimatedText } from "./AnimatedText";

export function Hero() {
  return (
    <section className="min-h-screen py-56 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 flex flex-wrap items-center gap-x-3">
              <p>Easiest way to </p>
                <AnimatedText />
              <p>in your restaurant</p>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Simplify your venue operations with Meat digital solutions.
              Enhance customer satisfaction and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Get Started
              </button>
              <button className="border border-black text-black px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                See Demo
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/6 flex justify-center relative">
            <div className="relative w-full h-96">
              {/* Image 1 */}
              <img
                src="1.png"
                alt="Hero image 1"
                className="absolute -bottom-28 left-0 w-64 h-64 transform rotate-3"
              />
              {/* Image 2 */}
              <img
                src="2.png"
                alt="Hero image 2"
                className="absolute top-0 left-40 w-56 h-56 transform -rotate-6"
              />
              {/* Image 3 */}
              <img
                src="3.png"
                alt="Hero image 3"
                className="absolute -top-20 -left-16 w-72 h-128 transform rotate-2"
              />
              {/* Image 4 */}
              <img
                src="4.png"
                alt="Hero image 4"
                className="absolute bottom-0 left-64 w-56
                 h-64 transform -rotate-2 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
