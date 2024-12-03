export const Transaction = ({ img, title, description, amount, }) => (
  <div className="flex items-center mb-2">
    <img className="w-[55px] h-[55px]" src={img} alt="Logo" />
    <div className="text-[16px] sm:text-md px-2 truncate  sm:px-3 lg:px-4 font-bold">
      {title}
      <p className="font-normal text-[#718EBF] text-[15px] sm:text-sm">
        {description}
      </p>
    </div>
    <p className="text-[16px] sm:text-xl text-red-400 ml-auto">{amount}</p>
  </div>
);
