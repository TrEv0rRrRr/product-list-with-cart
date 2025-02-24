import { createContext } from "react";
import { Product } from "../../../types/Product";

export type CartContextType = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  updateQuantity: (name: string, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
