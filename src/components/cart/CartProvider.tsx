import React, { useState } from 'react';
import { CartContext, CartItem } from './CartContext';
export function CartProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const addItem = (item: CartItem) => {
    setItems(current => {
      const existingItem = current.find(i => i.id === item.id);
      if (existingItem) {
        return current.map(i => i.id === item.id ? {
          ...i,
          quantity: i.quantity + item.quantity
        } : i);
      }
      return [...current, item];
    });
  };
  const removeItem = (id: string) => {
    setItems(current => current.filter(item => item.id !== id));
  };
  const updateQuantity = (id: string, quantity: number) => {
    setItems(current => current.map(item => item.id === id ? {
      ...item,
      quantity
    } : item));
  };
  const clearCart = () => {
    setItems([]);
  };
  return <CartContext.Provider value={{
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isOpen,
    setIsOpen
  }}>
      {children}
    </CartContext.Provider>;
}