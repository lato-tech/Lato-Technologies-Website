import React, { createContext, useContext } from 'react';
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  isOpen: false,
  setIsOpen: () => {}
});
export const useCart = () => useContext(CartContext);