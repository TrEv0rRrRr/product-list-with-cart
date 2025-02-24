import { toast } from "react-toastify";
import useCart from "../hooks/useCart";
import { CounterButton } from "./CounterButton";

interface Props {
  name: string;
  onZero: () => void;
  removeFromCart: (name: string) => void;
}

export const Counter = ({ name, onZero, removeFromCart }: Props) => {
  const { cart, updateQuantity } = useCart();

  const product = cart.find((item) => item.name === name);
  const quantity = product ? product.quantity : 1;

  /**
   * Increments the quantity of the specified product by 1.
   *
   * @function
   * @name increment
   * @returns {void}
   */
  const increment = (): void => updateQuantity(name, quantity + 1);
  /**
   * Decreases the quantity of a product in the cart. If the quantity is 1, it triggers the `onZero` callback,
   * removes the product from the cart, and displays a success toast message. Otherwise, it updates the quantity
   * of the product in the cart.
   *
   * @function
   * @name decrease
   * @returns {void}
   */
  const decrease = (): void => {
    if (quantity === 1) {
      onZero();
      removeFromCart(name);
      toast.success("Producto eliminado del carrito!");
    } else updateQuantity(name, Math.max(1, quantity - 1));
  };

  return (
    <div
      className="flex flex-row items-center justify-between bg-Red rounded-4xl border-[1px] text-white border-Red
      py-[10px] px-5 gap-10 font-semibold absolute bottom-[-1.625rem] left-1/2 -translate-x-1/2"
    >
      <CounterButton handleClick={decrease} svgType="minus" />
      <span className="min-w-[20px] text-center">{quantity}</span>
      <CounterButton handleClick={increment} svgType="plus" />
    </div>
  );
};
