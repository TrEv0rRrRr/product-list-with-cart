interface Props {
  handleClick: () => void;
  svgType: "minus" | "plus";
}

export const CounterButton = ({ handleClick, svgType }: Props) => {
  return (
    <button
      className="flex justify-center items-center rounded-[50%] border-white border-[2px] w-[20px] h-[20px] hover:bg-white transition duration-100 cursor-pointer group"
      onClick={handleClick}
    >
      {svgType === "minus" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="currentColor"
          viewBox="0 0 10 2"
          className="group-hover:text-Red transition-all"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          viewBox="0 0 10 10"
          className="group-hover:text-Red transition-all"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      )}
    </button>
  );
};
