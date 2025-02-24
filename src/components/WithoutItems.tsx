import EmptyCart from "../assets/icons/illustration-empty-cart.svg";

const WithoutItems = () => {
  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <img src={EmptyCart} aria-hidden="true" />
      <p className="text-Rose-500 font-semibold text-[.85rem] md:text-[1rem]">
        Your added items will appear here
      </p>
    </article>
  );
};

export default WithoutItems;
