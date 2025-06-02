import React from 'react';
import { WebBasedIcon, CrossPlatformIcon, PayrollIcon, ReportingIcon } from './svg/FaceItIllustrations';
import { CheckIcon, XIcon } from 'lucide-react';
export function FaceItComparison() {
  return <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Face It! Advanced Recognition System
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our web-based facial recognition system revolutionizes attendance
            management with advanced AI capabilities, group recognition, and
            seamless integration - all accessible from any device, anywhere.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <WebBasedIcon className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">Web-Based</h3>
            </div>
            <p className="text-gray-300">
              Access from any device, anywhere - no installation required
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CrossPlatformIcon className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">
                Cross-Platform
              </h3>
            </div>
            <p className="text-gray-300">
              Works on Windows, Mac, Linux, and mobile devices
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <PayrollIcon className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">HR & Payroll</h3>
            </div>
            <p className="text-gray-300">
              Optional integrated HR & payroll system (₹1,000/month)
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ReportingIcon className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold text-white">Free Reports</h3>
            </div>
            <p className="text-gray-300">
              Lifetime free Excel reports and basic attendance tracking
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Web-Based Advantages
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">
                    No Installation Required
                  </h4>
                  <p className="text-gray-300">
                    Access directly through any web browser, no software
                    installation or updates needed
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">
                    Updates for Life & Modular Design
                  </h4>
                  <p className="text-gray-300">
                    Get updates till EoL (End of life) and modular design for easy repair and maintenence
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">
                    Class leading connectivity
                  </h4>
                  <p className="text-gray-300">
                     With all the leading connectivity protocols like RS-485, ProfiNet, etc.                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">
                    Real-Time Updates
                  </h4>
                  <p className="text-gray-300">
                    Instant synchronization across all devices and locations
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">
                    Cross-Platform Support
                  </h4>
                  <p className="text-gray-300">
                    Works on any device - Windows, Mac, Linux, mobile devices,
                    and tablets
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Advanced Features
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">
                    Group Recognition
                  </h4>
                  <p className="text-gray-300">
                    Simultaneously recognize multiple faces (3-5 people) in a
                    single scan
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Smart Detection</h4>
                  <p className="text-gray-300">
                    Emotion detection, mask compliance, and safety gear
                    verification
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-green-500 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Voice Feedback</h4>
                  <p className="text-gray-300">
                    Multilingual voice responses for user-friendly interaction
                  </p>
                </div>
              </li>
            </ul>
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
                  <th className="text-center py-4 px-4">Face It!</th>
                  <th className="text-center py-4 px-4">
                    Windows-based Solutions
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Web-Based Access</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Cross-Platform Support</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Free Excel Reports</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Group Recognition</td>
                  <td className="text-center">
                    <CheckIcon className="inline-block text-green-500" size={20} />
                  </td>
                  <td className="text-center">
                    <XIcon className="inline-block text-red-500" size={20} />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Optional HR & Payroll</td>
                  <td className="text-center">₹1,000/month</td>
                  <td className="text-center">Varies (₹5,000+/month)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Basic Attendance</td>
                  <td className="text-center">Free for Life</td>
                  <td className="text-center">Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Free Forever</h4>
                <span className="text-lg font-bold text-green-500">₹0</span>
              </div>
              <p className="text-gray-300 mb-6">
                Perfect for basic attendance tracking needs
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Basic attendance tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Excel report exports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Group face recognition
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Web-based access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Unlimited users and locations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Basic API access
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">HR & Payroll</h4>
                <span className="text-lg font-bold text-orange-500">
                  ₹1,000/month
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Complete HR and payroll automation
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Everything in Free plan
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Full HR management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Payroll processing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Tax calculations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Advanced reporting dashboard
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon size={16} className="text-green-500 mr-2" />
                  Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
}