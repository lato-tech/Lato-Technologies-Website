import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our products? Reach out to our team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                  <MailIcon size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Email</h4>
                  <a href="mailto:info@getlato.com" className="text-orange-500 hover:text-orange-400">
                    info@getlato.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                  <PhoneIcon size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                  <p className="text-gray-300">
                    Contact us via email for phone details
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500/10 p-3 rounded-full mr-4">
                  <MapPinIcon size={20} className="text-orange-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Website</h4>
                  <a href="https://www.getlato.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
                    www.getlato.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Business Hours
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-gray-300 font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-gray-300 font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-gray-300 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
}