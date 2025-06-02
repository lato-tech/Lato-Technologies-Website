import React from 'react';
import { useCart } from '../components/cart/CartContext';
import { useNavigate } from 'react-router-dom';
export function Checkout() {
  const {
    items,
    clearCart
  } = useCart();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };
  return <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.map(item => <div key={item.id} className="flex justify-between mb-4 pb-4 border-b border-gray-700">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-400">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-orange-400">
                ₹{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>)}
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span className="text-orange-400">₹{total.toLocaleString()}</span>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" required className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea required rows={3} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>;
}