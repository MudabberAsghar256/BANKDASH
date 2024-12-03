export const Accountcard = ({img,text1,text2 }) => (
    <div className="  h-[85px] lg:h-[120px] m-auto justify-center pt-5 flex gap-3 rounded-[15px] lg:rounded-[25px] bg-white">
    <img
      className=" lg:w-[70px] lg:h-[70px] w-[45px] h-[45px]"
      src={img}
      alt="Logo"
    />
    <div className="lg:pt-1 ">
      <h1 className="text-[#718EBF] text-[12px] lg:text-[20px]">
        {text1}
      </h1>
      <p className="font-bold text-[16px] lg:text-[20px]">{text2}</p>
    </div>
  </div>

  );
