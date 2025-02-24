import CarbonNeutralIcon from "../assets/icons/icon-carbon-neutral.svg";
import RemoveItemIcon from "../assets/icons/icon-remove-item.svg";
import useModal from "../hooks/useModal";
import { Product } from "../types/Product";
import { formatPrice } from "../utils/formatPrice";
import Modal from "./Modal";

interface Props {
  cart: Product[];
  removeFromCart: (name: string) => void;
}

export const WithItems = ({ cart, removeFromCart }: Props) => {
  const totalPrice = cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  const { openModal } = useModal();

  return (
    <>
      <article className="flex flex-col gap-5">
        <ul className="flex flex-col gap-5">
          {cart.map(({ name, price, quantity }, index) => {
            const finalPrice = quantity * price;
            return (
              <li key={index}>
                <div className="flex flex-row justify-between items-center border-b-[1px] border-Rose-900/15 pb-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-Rose-900 font-semibold">{name}</span>
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-Red font-semibold">
                        {quantity}x
                      </span>
                      <div className="flex flex-row gap-2">
                        <span className="text-Rose-900/60">
                          @ {formatPrice(price)}
                        </span>
                        <span className="font-semibold text-Rose-900/60">
                          {formatPrice(finalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="border-2 p-1 rounded-[50%] border-Rose-900/40 cursor-pointer"
                    onClick={() => removeFromCart(name)}
                    aria-label={`Remove ${name} from cart`}
                  >
                    <img src={RemoveItemIcon} alt="" aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-7">
            <div className="flex flex-row justify-between items-center">
              <span>Order Total</span>
              <span className="text-Rose-900 font-bold text-3xl">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <div className="flex flex-row self-center items-center justify-center gap-2 bg-Rose-100 py-3 px-5 rounded-xl w-full">
              <img src={CarbonNeutralIcon} alt="" aria-hidden="true" />
              <p className="text-[.9rem]">
                This is a{" "}
                <span className="text-Rose-900 font-semibold">
                  carbon-neutral
                </span>{" "}
                delivery
              </p>
            </div>
          </div>
          <button
            className="bg-Red text-white rounded-4xl py-3 hover:bg-red-900 cursor-pointer transition-all duration-150"
            onClick={openModal}
          >
            Confirm Order
          </button>
        </div>
      </article>

      <Modal cart={cart} finalPrice={totalPrice} />
    </>
  );
};
