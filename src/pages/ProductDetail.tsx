import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../components/cart/CartContext';
import { ArrowUpRightIcon } from 'lucide-react';
const products = [{
  id: 'face-it-v1',
  name: 'Face It! v1.0',
  price: 45000,
  description: 'Next-generation facial recognition attendance system with advanced AI capabilities and multi-lingual support',
  image: "/FaceScribe-Plus-1.png",
  learnMoreLink: 'https://medium.com/the-modern-scientist/advanced-face-recognition-system-a392787cfe6c',
  features: ['Face-to-Task Mapping with ERP Integration', 'Group Face Recognition (3-5 people)', 'Multilingual Voice AI Feedback', 'Emotion/Mood Detection', 'QR + Face Hybrid Punch', 'Remote Face Punch via Secure Tunnel'],
  detailImages: ["/1_avgD2irbAad4DmbTmxBGlA.webp", "/biometric-face-recognition-system-1000x1000.webp"],
  categories: {
    'Educational Features': ['Auto class attendance with group scan', 'Parent alerts for absenteeism', 'Roll call + homework sync', 'Dashboard for class monitoring', 'Mood/health trend reports'],
    'Healthcare Features': ['Shift + patient assignment linking', 'Ward/ICU-specific attendance', 'Mask compliance detection', 'Doctor/nurse facial terminal access', 'Visitor-patient mapping'],
    'Government Features': ['Biometric + paperless backup', 'Integrated door control', 'Offline operation support', 'Geo-fenced outdoor attendance', 'Audit-friendly exports'],
    'Industrial Features': ['Helmet/gear detection', 'Auto shift logging', 'GPS verification', 'Double-punch prevention', 'Automated payroll calculation']
  }
}, {
  id: 'latoplc-s-series',
  name: 'LatoPiLC S-Series',
  price: 25000,
  description: 'Advanced industrial automation controller with modular design and comprehensive I/O support',
  image: "/difference-S-and-SE-Series-1.png",
  features: ['Compatible with base module', 'Supports I/O modules (LatoPiLC DIO)', 'Gateway modules support (LatoPiLC Gateway PROFINET)', 'Industrial-grade reliability'],
  detailImages: ["/RevPi-S-and-SE-series-timeline.jpg"],
  technicalDetails: ['Base module compatibility', 'Multiple I/O module support', 'Gateway module integration', 'Industrial certification', 'Expandable architecture']
}, {
  id: 'latoplc-compact',
  name: 'LatoPiLC Compact',
  price: 30000,
  description: 'Compact industrial controller with integrated I/O and powerful processing capabilities',
  image: "/revpi-compact-aufbau-1ffa72a9c3923b914bddb474650c67f7.png",
  features: ['Analog Inputs and Outputs', 'Digital I/O support', 'Power Supply integration', 'Raspberry Pi powered computing'],
  technicalDetails: ['12-24 VDC power supply', 'Multiple I/O configurations', 'Integrated processing unit', 'Industrial temperature range', 'DIN rail mounting']
}, {
  id: 'latoplc-connect',
  name: 'LatoPiLC Connect',
  price: 35000,
  description: 'Advanced connectivity solution with multiple interface options and robust industrial design',
  image: "/revpi-connect-5-aufbau-9211abd934081a3fa772298d8b783037.png",
  features: ['Multiple ethernet ports', 'RS485 communication support', 'Industrial-grade construction', 'Extended connectivity options'],
  detailImages: ["/revpi-connect-rs485-pinout-34eadf90cfb5242f98e73f739c6f9a6b.png"],
  technicalDetails: ['Dual Ethernet interfaces', 'RS485 serial communication', 'Industrial protocols support', 'Extended temperature range', 'Modular expansion options']
}];
export function ProductDetail() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const {
    addItem,
    setIsOpen
  } = useCart();
  const product = products.find(p => p.id === id);
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => navigate('/')} className="text-orange-500 hover:text-orange-600">
          Return to home
        </button>
      </div>;
  }
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    setIsOpen(true);
  };
  return <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-96 object-contain p-4" />
          </div>
          {product.detailImages && <div className="grid grid-cols-2 gap-4">
              {product.detailImages.map((img, index) => <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src={img} alt={`${product.name} detail ${index + 1}`} className="w-full h-48 object-contain p-4" />
                </div>)}
            </div>}
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {product.learnMoreLink && <a href={product.learnMoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-400">
                Learn More <ArrowUpRightIcon className="ml-1" size={16} />
              </a>}
          </div>
          <p className="text-xl text-orange-400">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="text-gray-300">{product.description}</p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  {feature}
                </li>)}
            </ul>
          </div>
          {product.categories && <div className="space-y-6">
              {Object.entries(product.categories).map(([category, features]) => <div key={category}>
                    <h3 className="text-xl font-semibold mb-4 text-orange-500">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => <li key={index} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {feature}
                        </li>)}
                    </ul>
                  </div>)}
            </div>}
          {product.technicalDetails && <div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Specifications
              </h3>
              <ul className="space-y-2">
                {product.technicalDetails.map((detail, index) => <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {detail}
                  </li>)}
              </ul>
            </div>}
          <button onClick={handleAddToCart} className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>;
}