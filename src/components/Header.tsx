import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Lato Technologies
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
            Products
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-3 pb-3">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </nav>}
    </header>;
}