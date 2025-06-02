import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartProvider } from './components/cart/CartProvider';
import { CartDrawer } from './components/cart/CartDrawer';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
export function App() {
  return <Router>
      <CartProvider>
        <div className="w-full min-h-screen bg-gray-900 text-gray-100">
          <Header />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<main>
                  <HeroSection />
                  <ProductsSection />
                  <AboutSection />
                  <ContactSection />
                </main>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>;
}