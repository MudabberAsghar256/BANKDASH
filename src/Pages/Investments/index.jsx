import React from "react";
import { Heading } from "../../Common/Heading";
 import Investmentgraph1 from "./Investmentgraph1";
 import Investmentgraph2 from "./Investmentgraph2";
export const Investments = () => {
  return (
    <div className=" w-full bg-gray-50 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 xl:gap-10 ">
        <div className=" p-4 justify-center items-center lg:p-5 flex gap-3 rounded-[15px] lg:rounded-[25px] bg-white">
          <div className="">
            <img
              className="lg:w-[70px] w-[50px] h-[50px] lg:h-[70px]"
              src={"/Assets/Investment-img1.svg"}
              alt="Logo"
            />
          </div>
          <div className="">
            <h1 className="text-[#718EBF] text-[12px] xl:text-[16px]">
              Total Invested Amount
            </h1>
            <p className="font-bold text-[16px] xl:text-[25px]">$150,000</p>
          </div>
        </div>
        <div className=" p-4 justify-center items-center lg:p-5 flex gap-3 rounded-[25px] bg-white">
          <img
            className="lg:w-[70px] w-[50px] h-[50px] lg:h-[70px]"
            src={"/Assets/Investment-img2.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className="text-[#718EBF] text-[12px] xl:text-[16px]">
              Number of Investments
            </h1>
            <p className="font-bold text-[16px] xl:text-[25px]">1,250</p>
          </div>
        </div>
        <div className=" p-4 justify-center items-center lg:p-5 flex gap-3 rounded-[25px] bg-white">
          <div className="">
            <img
              className="lg:w-[70px] w-[50px] h-[50px] lg:h-[70px]"
              src={"/Assets/Investment-img3.svg"}
              alt="Logo"
            />
          </div>
          <div className="">
            <h1 className="text-[#718EBF] text-[12px] xl:text-[16px] ">
              Rate of Return
            </h1>
            <p className="font-bold text-[16px] xl:text-[25px]">+5.80%</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------secound div --------------------------------- */}
      <div className="">
        <div className="  gap-5   flex-wrap flex  ">
          <div className="">
          <Heading text="Yearly Total Investment" />
            <div className="bg-white rounded-[15px] lg:rounded-[25px]">
              <Investmentgraph1 /> 
            </div>
          </div>
          <div className="">
          <Heading text="Monthly Revenue" />
            <div className="bg-white  rounded-[15px] lg:rounded-[25px]">
            <Investmentgraph2 />
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------payment side-------------------------------------------- */}
      <div className="card-3  w-full  flex flex-wrap lg:gap-9">
        <div>
          <Heading text="My Investment" />
          <div className=" ">
            <div className="flex lg:w-[685px]  bg-white p-5 rounded-[25px] items-center justify-between mb-4">
              <div className="flex gap-5 ">
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Investmentlogo-img1.svg"}
                  alt="Logo"
                />
                <div className="text-md   font-bold">
                  Apple Store
                  <p className="font-normal text-[#718EBF]">
                    E-commerce, Marketplace
                  </p>
                </div>
              </div>
              <div className=" hidden sm:flex lg:flex-col text-md  font-bold">
                $54,000
                <p className="font-normal text-[#718EBF]">Envestment Value</p>
              </div>
              <div className="">
                <p className="text-xl text-[#41D4A8] ml-auto">+16%</p>
                <p className=" text-[#718EBF] hidden sm:flex">Return Value</p>
              </div>
            </div>
            <div className="flex items-center  bg-white p-5  rounded-[25px] justify-between mb-4">
              <div className="flex gap-5 ">
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Investmentlogo-img2.svg"}
                  alt="Logo"
                />
                <div className="text-md   font-bold">
                  Samsung Mobile
                  <p className="font-normal text-[#718EBF]">
                    E-commerce, Marketplace
                  </p>
                </div>
              </div>
              <div className=" hidden sm:flex lg:flex-col">
                <p className="text-md  font-bold"> $25,300</p>
                <p className="font-normal text-[#718EBF]">Envestment Value</p>
              </div>
              <div className="">
                <p className="text-xl text-[#e83636] ml-auto">-4%</p>
                <p className=" text-[#718EBF] hidden sm:flex">Return Value</p>
              </div>
            </div>
            <div className="flex     items-center  bg-white p-5  rounded-[25px] justify-between mb-4">
              <div className="flex gap-5 ">
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Investmentlogo-img3.svg"}
                  alt="Logo"
                />
                <div className="text-md   font-bold">
                  Tesla Motors
                  <p className="font-normal text-[#718EBF]">
                    E-Vehicles Marketplace
                  </p>
                </div>
              </div>
              <div className=" hidden sm:flex lg:flex-col lg:px-10 text-md  font-bold">
                $8,200
                <p className="font-normal text-[#718EBF]">Envestment Value</p>
              </div>
              <div className="">
                <p className="text-xl text-[#41D4A8] ml-auto">+25%</p>
                <p className=" hidden sm:flex text-[#718EBF]">Return Value</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------Stock page---------------------------- */}
        <div className=" ">
          <Heading text="Trending Stock" />
          <div class="rounded-[15px]  lg:rounded-[25px]  bg-white lg:p-4 p-2 ">
            <table class="w-full lg:w-[445px] w-[318px] text-left rtl:text-right  ">
              <thead class="text-xs border-b text-gray-700 uppercase  ">
                <tr className="text-[#718EBF] text-[16px]">
                  <th scope="col" class=" py-3">
                    SL No
                  </th>
                  <th scope="col" class=" py-3">
                    Name
                  </th>
                  <th scope="col" class="py-3">
                    Price
                  </th>
                  <th scope="col" class=" py-3">
                    Return
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class=" py-4 text-[16px]  text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    01.
                  </th>
                  <td class=" py-4 font-semibold text-[16px]">
                    Trivago
                  </td>
                  <td class=" py-4 font-semibold text-[16px]">$520</td>
                  <td class=" py-4 font-semibold text-[#16DBAA] text-[16px]">
                    +5%
                  </td>
                </tr>
                <tr class=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 text-[16px] text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    02.
                  </th>
                  <td class=" py-4 font-semibold text-[16px]">Canon</td>
                  <td class=" py-4 font-semibold text-[16px]">$480</td>
                  <td class=" py-4 font-semibold text-[#16DBAA] text-[16px]">
                    +10%
                  </td>
                </tr>
                <tr class=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 text-[16px] text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    03.
                  </th>
                  <td class=" py-4 font-semibold text-[16px]">Uber Food</td>
                  <td class=" py-4 font-semibold text-[16px]">$350</td>
                  <td class=" py-4 font-semibold text-[#FE5C73] text-[16px]">
                    -3%
                  </td>
                </tr>
                <tr class=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class=" py-4 text-[16px] text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    04.
                  </th>
                  <td class=" py-4 font-semibold text-[16px]">Nokia</td>
                  <td class=" py-4 font-semibold text-[16px]">$940</td>
                  <td class=" py-4 font-semibold text-[16px]">+2%</td>
                </tr>
                <tr class=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class=" py-2 text-[16px]  text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    05.
                  </th>
                  <td class=" py-2 text-[16px] font-semibold">Tiktok</td>
                  <td class=" py-2 text-[16px] font-semibold">$670</td>
                  <td class=" py-2 text-[#FE5C73] font-semibold text-[16px]">
                    -12%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
