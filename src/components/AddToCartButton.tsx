import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CartIcon from "../assets/icons/icon-add-to-cart.svg";
import { Product } from "../types/Product";
import { Counter } from "./Counter";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
  removeFromCart: (name: string) => void;
  cart: Product[];
}

const AddToCartButton = ({
  product,
  addToCart,
  removeFromCart,
  cart,
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const isInCart = cart.some((item) => item.name === product.name);
    if (!isInCart) setIsPressed(false);
  }, [cart, product.name]);

  const handleClick = () => {
    setIsPressed(true);
    addToCart(product);
    toast.success("Producto agregado al carrito!");
  };

  return (
    <>
      {isPressed ? (
        <Counter
          name={product.name}
          onZero={() => setIsPressed(false)}
          removeFromCart={removeFromCart}
        />
      ) : (
        <button
          className="flex flex-row items-center bg-white rounded-4xl border-[1px] 
          border-Rose-500 py-[10px] justify-center px-[26px] gap-1 font-semibold absolute bottom-[-1.625rem] left-1/2 -translate-x-1/2 text-Rose-900 hover:text-Red hover:border-Red transition duration-150 cursor-pointer md:w-[180px]"
          onClick={handleClick}
        >
          <img src={CartIcon} aria-hidden="true" />
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
