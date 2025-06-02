import React, { useState } from 'react';
import { MenuIcon, XIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './cart/CartContext';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    setIsOpen,
    items
  } = useCart();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            Lato Technologies
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-orange-500 font-medium">
            Home
          </Link>
          <a href="#products" className="text-gray-300 hover:text-orange-500 font-medium">
            Products
          </a>
          <a href="#about" className="text-gray-300 hover:text-orange-500 font-medium">
            About
          </a>
          <a href="#contact" className="text-gray-300 hover:text-orange-500 font-medium">
            Contact
          </a>
          <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-orange-500 relative">
            <ShoppingCartIcon size={24} />
            {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>}
          </button>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-orange-500 relative">
            <ShoppingCartIcon size={24} />
            {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>}
          </button>
          <button onClick={toggleMenu} className="text-gray-300 hover:text-orange-500" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <Link to="/" className="text-gray-300 hover:text-orange-500 font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <a href="#products" className="text-gray-300 hover:text-orange-500 font-medium" onClick={toggleMenu}>
              Products
            </a>
            <a href="#about" className="text-gray-300 hover:text-orange-500 font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 font-medium" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </nav>}
    </header>;
}