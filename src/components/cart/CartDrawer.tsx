import React from 'react';
import { useCart } from './CartContext';
import { XIcon, ShoppingCartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity
  } = useCart();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-800 shadow-xl">
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingCartIcon className="mr-2" /> Cart
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-4 flex flex-col h-[calc(100vh-180px)] overflow-auto">
          {items.length === 0 ? <p className="text-gray-400 text-center">Your cart is empty</p> : items.map(item => <div key={item.id} className="flex justify-between items-center mb-4 bg-gray-700 p-4 rounded-lg">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-orange-400">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value))} className="w-16 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-center" />
                  <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-300">
                    <XIcon size={20} />
                  </button>
                </div>
              </div>)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex justify-between mb-4">
            <span>Total:</span>
            <span className="text-orange-400 font-bold">
              ₹{total.toLocaleString()}
            </span>
          </div>
          <button onClick={() => {
          setIsOpen(false);
          navigate('/checkout');
        }} disabled={items.length === 0} className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>;
}