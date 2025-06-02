import React from 'react';
import { CheckIcon } from 'lucide-react';
export function ProductsSection() {
  return <section id="products" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology solutions for modern businesses
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Facial Recognition Attendance System */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-blue-600 flex items-center justify-center p-4">
              <img src="https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Facial Recognition Attendance Machine" className="h-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Facial Recognition Attendance System
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced 10" model powered by Raspberry Pi 5 and RPi Camera
                Module 3
              </p>
              <div className="mb-4 space-y-2">
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">High-speed facial recognition</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">10" touchscreen display</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Powered by Raspberry Pi 5</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    RPi Camera Module 3 for superior image quality
                  </p>
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-blue-600">
                  ₹25,000
                </span>
                <span className="text-gray-500 ml-1">/unit</span>
              </div>
              <a href="#contact" className="mt-6 block text-center bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Inquire Now
              </a>
            </div>
          </div>
          {/* RPi-based PLC and HMI */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-blue-600 flex items-center justify-center p-4">
              <img src="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Raspberry Pi-based PLC and HMI" className="h-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Raspberry Pi-based PLC and HMI
              </h3>
              <p className="text-gray-600 mb-4">
                Versatile automation solutions with intuitive human-machine
                interface
              </p>
              <div className="mb-4 space-y-2">
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Multiple models available</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    Customizable I/O configurations
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Touch-screen interface</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Industrial-grade reliability</p>
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-blue-600">
                  ₹10,000 - ₹30,000
                </span>
              </div>
              <a href="#contact" className="mt-6 block text-center bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}