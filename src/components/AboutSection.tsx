import React from 'react';
import { ShieldCheckIcon, CpuIcon, UsersIcon } from 'lucide-react';
import { SecurityIllustration, AutomationIllustration, InnovationIllustration } from './svg/Illustrations';
export function AboutSection() {
  return <section id="about" className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            About Lato Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pioneering innovative solutions in facial recognition and industrial
            automation technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-300 mb-4">
              At Lato Technologies, we specialize in developing cutting-edge
              facial recognition systems and Raspberry Pi-based automation
              solutions tailored for businesses of all sizes.
            </p>
            <p className="text-gray-300 mb-4">
              Our team of experts combines deep technical knowledge with
              practical business insights to create products that enhance
              productivity, security, and operational efficiency.
            </p>
            <p className="text-gray-300">
              Founded on principles of innovation and accessibility, we're
              committed to making advanced technology available at competitive
              price points without compromising on quality or performance.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                <SecurityIllustration className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Reliable & Secure
                </h3>
                <p className="text-gray-300">
                  Our systems are built with security and reliability as top
                  priorities
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                <AutomationIllustration className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Advanced Technology
                </h3>
                <p className="text-gray-300">
                  Leveraging the latest in Raspberry Pi and machine learning
                  technologies
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                <InnovationIllustration className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Customer Support
                </h3>
                <p className="text-gray-300">
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