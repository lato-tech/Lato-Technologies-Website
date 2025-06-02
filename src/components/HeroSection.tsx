import React from 'react';
export function HeroSection() {
  return <section id="home" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced Facial Recognition Solutions
            </h2>
            <p className="text-xl mb-6">
              Streamline your attendance management with our cutting-edge facial
              recognition technology
            </p>
            <div className="flex space-x-4">
              <a href="#products" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Explore Products
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-4">
              <img src="https://images.unsplash.com/photo-1587614298171-a01653308936?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Facial recognition technology illustration" className="rounded-md w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}