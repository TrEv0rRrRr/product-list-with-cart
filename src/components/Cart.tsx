import useCart from "../hooks/useCart";
import { WithItems } from "./WithItems";
import WithoutItems from "./WithoutItems";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalQuantity = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <div
      className={`bg-Rose-5 rounded-2xl bg-Rose-50 flex flex-col p-6 pb-8 max-h-[30rem] overflow-y-auto ${
        totalQuantity > 0 ? "gap-5" : "gap-8"
      }`}
    >
      <h2 className="text-Red font-bold text-start text-2xl">
        Your Cart ({totalQuantity})
      </h2>
      {totalQuantity === 0 ? (
        <WithoutItems />
      ) : (
        <WithItems cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default Cart;
