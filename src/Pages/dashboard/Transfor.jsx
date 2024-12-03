import React from "react";

import { Heading } from "../../Common/Heading";
function Transfer() {
  return (
    <>
      {/* <h1 className="font-bold py-5 px-5 text-2xl text-[#343C6A]" >Quck Transfer</h1> */}
      <div className="lg:w-[460px] w-[360px]  ">
    
      <Heading text="Quick Transfer" />

        <div className="lg:bg-white rounded-[25px] h-[305px] p-5 lg:p-6  ">
  <div className="main flex flex-wrap gap-2 lg:gap-7 text-center justify-center mt-5">
    <div className="flex flex-col items-center">
    
      <img className="w-16 sm:w-20" src={"/Assets/Transfor.img1.svg"} alt="Logo" />
      <h1 className="pt-2 font-bold text-base sm:text-lg">Livia Bator</h1>
      <p className="text-[#718EBF] font-bold text-sm sm:text-base">CEO</p>
    </div>
    <div className="flex flex-col items-center">
 
      <img className="w-16 sm:w-20" src={"/Assets/Transfor.img2.svg"} alt="Logo" />
      <h1 className="pt-2 text-base sm:text-lg">Randay Press</h1>
      <p className="text-[#718EBF] text-sm sm:text-base">Director</p>
    </div>
    <div className="flex flex-col items-center">
  
      <img className="w-16 sm:w-20" src={"/Assets/Transfor.img3.svg"} alt="Logo" />
      <h1 className="pt-2 text-base sm:text-lg">Workman</h1>
      <p className="text-[#718EBF] text-sm sm:text-base">Designer</p>
    </div>
    <div className=" pt-10 p-3 border-full ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </div>
  </div>

  <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4 sm:gap-5 justify-center">
    <h1 className="text-[#718EBF]  text-sm sm:text-base">Write Amount</h1>
    <div className="flex items-center gap-2">
      <input
        className="px-4 sm:px-8 p-2 sm:p-3 w-[150px] sm:w-[200px] bg-[#EDF1F7] text-[#718EBF] 
          placeholder-slate-400 focus:outline-none focus:border-sky-500
          rounded-[30px] focus:ring-0"
        placeholder="525.50"
      />
      <button
        type="button"
        className="text-white flex items-center gap-3 bg-blue-700
          hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium 
          rounded-[30px] text-sm px-5 sm:px-6 p-2 sm:p-3 ml-[-50px] sm:ml-[-60px]
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none shadow-sm
          dark:focus:ring-blue-800"
      >
        Send

        <img className="w-4 sm:w-5" src={"/Assets/Transfor.img4.svg"} alt="Logo" />
      </button>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
export default Transfer;
