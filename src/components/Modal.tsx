import { useEffect, useRef } from "react";
import OrderConfirmedIcon from "../assets/icons/icon-order-confirmed.svg";
import useModal from "../hooks/useModal";
import { Product } from "../types/Product";
import { formatPrice } from "../utils/formatPrice";

interface Props {
  cart: Product[];
  finalPrice: number;
}

const Modal = ({ cart, finalPrice }: Props) => {
  const { closeModal, isOpen } = useModal();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add("overflow-hidden");
    } else {
      dialogRef.current?.close();
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      console.log("🧹 Eliminando overflow-hidden al desmontar");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const openOpacityStyle = isOpen
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <>
      <dialog
        ref={dialogRef}
        className={`flex flex-col py-10 px-7 rounded-2xl bg-white transition-opacity fixed scroll-smooth max-w-none w-full max-h-none h-[calc(100vh-6rem)] top-[6rem] md:max-w-[40rem] md:max-h-[50rem] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:px-12 md:py-12
        ${openOpacityStyle}`}
        onClose={closeModal}
      >
        <div className="flex flex-col gap-5">
          <img
            className="w-16 h-16"
            src={OrderConfirmedIcon}
            alt=""
            aria-hidden="true"
          />
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h2 className="text-Rose-900 font-bold text-5xl">
                Order Confirmed
              </h2>
              <p className="text-Rose-900/80 text-xl">
                We hope you enjoy your food!
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-Rose-50 py-5 px-5 rounded-md mb-10">
              <ul className="flex flex-col gap-5">
                {cart.map(({ name, thumbnail, price, quantity }, index) => {
                  const totalPrice = quantity * price;
                  return (
                    <li
                      className="flex flex-row items-center justify-between border-b-[1px] border-Rose-900/8 pb-5"
                      key={index}
                    >
                      <div className="flex flex-row items-center gap-3 md:gap-5">
                        <img
                          className="rounded-md w-16 h-16"
                          src={thumbnail}
                          alt={name}
                        />
                        <div className="flex flex-col gap-1">
                          <h3
                            className="font-semibold text-Rose-900 truncate max-w-[16ch] block text-[.82rem] md:whitespace-normal md:overflow-visible md:max-w-none
                          md:text-[1.1rem]"
                          >
                            {name}
                          </h3>
                          <div className="flex flex-row gap-3 items-center">
                            <span className="text-Red font-semibold text-[.9rem] md:text-[1.1rem]">
                              {quantity}x
                            </span>
                            <span className="text-Rose-900/60 text-[.9rem] md:text-[1.1rem]">
                              @ {formatPrice(price)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="font-semibold text-Rose-900 md:text-[1.3rem]">
                        {formatPrice(totalPrice)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-row justify-between items-center">
                <span className="md:text-[1.4rem]">Order Total</span>
                <span className="text-Rose-900 font-bold text-2xl md:text-4xl">
                  {formatPrice(finalPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          className="bg-Red text-white rounded-4xl py-3 hover:bg-red-900 cursor-pointer transition-all duration-150 mt-auto md:text-[1.4rem]"
          onClick={closeModal}
        >
          Start New Order
        </button>
      </dialog>
    </>
  );
};

export default Modal;
