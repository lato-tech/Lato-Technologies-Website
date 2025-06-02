import React from 'react';
import { CheckIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './cart/CartContext';
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
  detailImages: ["/RevPi-S-and-SE-series-timeline.jpg"]
}, {
  id: 'latoplc-compact',
  name: 'LatoPiLC Compact',
  price: 30000,
  description: 'Compact industrial controller with integrated I/O and powerful processing capabilities',
  image: "/revpi-compact-aufbau-1ffa72a9c3923b914bddb474650c67f7.png",
  features: ['Analog Inputs and Outputs', 'Digital I/O support', 'Power Supply integration', 'Raspberry Pi powered computing']
}, {
  id: 'latoplc-connect',
  name: 'LatoPiLC Connect',
  price: 35000,
  description: 'Advanced connectivity solution with multiple interface options and robust industrial design',
  image: "/revpi-connect-5-aufbau-9211abd934081a3fa772298d8b783037.png",
  features: ['Multiple ethernet ports', 'RS485 communication support', 'Industrial-grade construction', 'Extended connectivity options'],
  detailImages: ["/revpi-connect-rs485-pinout-34eadf90cfb5242f98e73f739c6f9a6b.png"]
}];
export function ProductsSection() {
  const {
    addItem,
    setIsOpen
  } = useCart();
  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    setIsOpen(true);
  };
  return <section id="products" className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Our Products</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Advanced facial recognition and industrial automation solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map(product => <div key={product.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <div className="h-64 bg-gray-700 flex items-center justify-center p-4">
                <img src={product.image} alt={product.name} className="h-full object-contain" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Link to={`/product/${product.id}`} className="text-xl font-bold text-white hover:text-orange-500">
                    {product.name}
                  </Link>
                  {product.learnMoreLink && <a href={product.learnMoreLink} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 text-sm">
                      Learn More →
                    </a>}
                </div>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="mb-4 space-y-2">
                  {product.features.map((feature, index) => <div key={index} className="flex items-start">
                      <CheckIcon size={20} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{feature}</p>
                    </div>)}
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-orange-500">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <Link to={`/product/${product.id}`} className="flex-1 text-center bg-transparent border border-orange-500 text-orange-500 py-3 rounded-md font-medium hover:bg-orange-500 hover:text-white transition-colors">
                    View Details
                  </Link>
                  <button onClick={() => handleAddToCart(product)} className="flex items-center justify-center bg-orange-500 text-white px-4 rounded-md font-medium hover:bg-orange-600 transition-colors">
                    <ShoppingCartIcon size={20} />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}