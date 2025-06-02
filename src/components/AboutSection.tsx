import React from 'react';
import { ShieldCheckIcon, CpuIcon, UsersIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            About Lato Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering innovative solutions in facial recognition and automation
            technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              At Lato Technologies, we specialize in developing cutting-edge
              facial recognition systems and Raspberry Pi-based automation
              solutions tailored for businesses of all sizes.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of experts combines deep technical knowledge with
              practical business insights to create products that enhance
              productivity, security, and operational efficiency.
            </p>
            <p className="text-gray-700">
              Founded on principles of innovation and accessibility, we're
              committed to making advanced technology available at competitive
              price points without compromising on quality or performance.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ShieldCheckIcon size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Reliable & Secure
                </h3>
                <p className="text-gray-600">
                  Our systems are built with security and reliability as top
                  priorities
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <CpuIcon size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  Leveraging the latest in Raspberry Pi and machine learning
                  technologies
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <UsersIcon size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Customer Support
                </h3>
                <p className="text-gray-600">
                  Dedicated support team to ensure smooth implementation and
                  operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}