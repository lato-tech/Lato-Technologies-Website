import React from 'react';
export function HeroSection() {
  return <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Advanced Facial Recognition & PLC Solutions
            </h2>
            <p className="text-xl mb-6 text-gray-300">
              Streamline your attendance management with our cutting-edge facial
              recognition technology
            </p>
            <div className="flex space-x-4">
              <a href="#products" className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors">
                Explore Products
              </a>
              <a href="#contact" className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-orange-500 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-800 rounded-lg shadow-xl p-4">
              <img src="/RevPi-S-and-SE-series-timeline.jpg" alt="Revolution Pi industrial automation modules in real-world installation" className="rounded-md w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}