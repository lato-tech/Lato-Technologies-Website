import React from 'react';
import { ComparisonChart, ModularityIcon, OpenSourceIcon } from './svg/ProductIllustrations';
import { CheckIcon, XIcon } from 'lucide-react';
export function ProductComparison() {
  return <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Why Choose LatPi?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Compare our open-source, modular solution with traditional PLCs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ModularityIcon className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">
                Modular Design
              </h3>
            </div>
            <p className="text-gray-300">
              Easily expand and customize with plug-and-play modules for I/O,
              networking, and more
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <OpenSourceIcon className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">Open Source</h3>
            </div>
            <p className="text-gray-300">
              Full control over your automation with open-source hardware and
              software
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ComparisonChart className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">
                Cost-Effective
              </h3>
            </div>
            <p className="text-gray-300">
              Superior value compared to traditional PLCs without compromising
              on features
            </p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">LatPi</th>
                  <th className="text-center py-4 px-4">Siemens</th>
                  <th className="text-center py-4 px-4">Delta</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Open Source</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Modular Design</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Custom Programming</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Cost-Effective</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Third-party Integration</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>;
}