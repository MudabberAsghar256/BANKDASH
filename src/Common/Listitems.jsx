import { useContext } from "react";
import { ConterContext } from "../Context/Counter";
export const Listitems = ({ text, img }) => {
  const { setName } = useContext(ConterContext); // useContext must be inside the function body
  const onClick = () => (text !== "Dashborad" ? setName(text) : setName('Overview'));

  return (
    <button onClick={onClick}>
    <div className="w-full">
      <div
        className="flex items-center w-full text-xl font-semibold text-[#B1B1B1]
         hover:text-blue-600 leading-snug select-none border-b-blue-gray-100
          text-blue-gray-900 hover:text-blue-gray-900"
      >
        <div className="flex gap-8 hover:text-blue-600 place-items-center">
          <img
            className="w-[25px] h-[25px] hover:Icon-blue-400"
            alt="Logo"
            src={img}
          />
          <p className="block mr-auto text-[18px] font-lg leading-relaxed text-blue-gray-900">
            {text}
          </p>
        </div>
      </div>
    </div>
    </button>
  );
};
