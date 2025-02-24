import { ReactNode, useState } from "react";
import useCart from "../../../hooks/useCart";
import { ModalContext } from "./ModalContext";
type ModalProviderProps = {
  children: ReactNode;
};

export default function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { clearCart } = useCart();

  /**
   * Opens the modal by setting the `isOpen` state to `true`.
   */
  const openModal = () => setIsOpen(true);

  /**
   * Closes the modal and clears the cart.
   *
   * This function sets the modal state to closed by updating `setIsOpen` to `false`.
   * Additionally, it clears the cart by invoking the `clearCart` function.
   */
  const closeModal = () => {
    setIsOpen(false);
    clearCart();
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
