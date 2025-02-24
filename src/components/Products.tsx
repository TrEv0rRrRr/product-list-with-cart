import ProductsData from "../data.json";
import useCart from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import AddToCartButton from "./AddToCartButton";

const Products = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <>
      {ProductsData.map(({ category, image, name, price, quantity }, index) => {
        const thumbnail = image.thumbnail;
        return (
          <article className="flex flex-col gap-10" key={index}>
            <div className="relative">
              <picture>
                <source srcSet={image.desktop} media="(min-width: 1280px)" />
                <source srcSet={image.tablet} media="(min-width: 768px)" />
                <img
                  className="rounded-2xl object-contain"
                  src={image.mobile}
                  alt={name}
                />
              </picture>
              <AddToCartButton
                product={{ category, thumbnail, name, price, quantity }}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <span className="text-Rose-500 text-[0.9rem]">{category}</span>
                <span className="text-Rose-900 font-semibold">{name}</span>
              </div>
              <span className="text-Red font-semibold text-[1.1rem]">
                {formatPrice(price)}
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Products;
