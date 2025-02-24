import { ReactNode, useState } from "react";
import { Product } from "../../../types/Product";
import { CartContext } from "./CartContext";

type CartProviderProps = {
  children: ReactNode;
};

export default function ProductsProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  /**
   * Adds a product to the cart. If the product already exists in the cart,
   * it updates the quantity of the existing product. Otherwise, it adds
   * the new product to the cart.
   *
   * @param {Product} product - The product to be added to the cart.
   */
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some(
        (item) => item.name === product.name
      );

      return isProductInCart
        ? prevCart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          )
        : [...prevCart, product];
    });
  };

  /**
   * Removes an item from the cart based on its name.
   *
   * @param productName - The name of the item to be removed from the cart.
   */
  const removeFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  /**
   * Updates the quantity of a specific item in the cart.
   *
   * @param productName - The name of the item to update.
   * @param newQuantity - The new quantity for the item.
   */
  const updateQuantity = (productName: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
