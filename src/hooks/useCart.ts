import { useContext } from "react";
import {
  CartContext,
  CartContextType,
} from "../components/Contexts/CartContext/CartContext";

/**
 * Custom hook to access the cart context.
 *
 * This hook provides access to the cart context, allowing you to interact with the cart state and actions.
 * It must be used within a `CartProvider` to ensure the context is available.
 *
 * @throws {Error} Throws an error if the hook is used outside of a `CartProvider`.
 *
 * @returns {CartContextType} The current cart context value.
 */
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export default useCart;
