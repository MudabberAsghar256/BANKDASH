import { Heading } from "../../Common/Heading";
import Graphcard from "./Graphcard";
import React, { useState } from "react";
export const Transactions = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="bg-gray-50 p-4 lg:p-6">
      <div>
        <div className=" ">
          {/* -----------------------------------------Responsive grid layout for cards----------------------- */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4   ">
            {/* -----------------------------------------First Card-------------------------------------- */}
            <div className="card-1">
              <Heading text="My Cards" />

              <div className="rounded-[25px]  text-white  p-5  bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] bg-opacity-200">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <div className="text-[#FFFFFF] text-[12px]">
                    Balance{" "}
                    <p className=" text-[20px] sm:text-2xl text-[#FFFFFF] font-Lato">
                      $5,756
                    </p>
                  </div>
                  <img
                    className="w-[34px] h-[34px]"
                    src={"/Assets/Atm-img.svg"}
                    alt="Logo"
                  />
                </div>

                <div className="grid grid-cols-2 mb-4 ">
                  <div className="mr-4">
                    <div className="text-[12px] sm:text-sm uppercase text-[#718EBF]">
                      Card Holder
                    </div>
                    <div className="text-[15px] sm:text-sm font-Lato">
                      Eddy Cusu
                    </div>
                  </div>
                  <div className=" ">
                    <div className="text-[12px] sm:text-sm uppercase text-[#718EBF]">
                      VALID THRU
                    </div>
                    <div className="text-[15px] sm:text-sm font-Lato">
                      12/24
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-2  text-[15px]  lg:text-20  font-Lato text-[#FFFFFF]">
                  <div>3778**** ****1234</div>
                  <img
                    className="w-10 h-10"
                    src={"/Assets/Atm-Img2.svg"}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
            {/* ------------------------------------------Second Card------------------------------- */}
            <div className=" card-2 ">
              <h1 className=" text-[17px] p-5  text-right  font-bold text-[#343C6A]">
                + Add Card
              </h1>
              <div className="bg-white rounded-[25px]   text-black p-5">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <div className="text-[#718EBF] text-[12px]">
                    Balance{" "}
                    <p className="text-[20px] sm:text-2xl text-[#343C6A] font-Lato">
                      $5,756
                    </p>
                  </div>
                  <img
                    className="w-[34px] h-[34px]"
                    src={"/Assets/Atm-img3.svg"}
                    alt="Logo"
                  />
                </div>

                <div className="grid grid-cols-2 mb-4 ">
                  <div className="mr-4">
                    <div className="text-[12px] sm:text-sm uppercase text-[#718EBF]">
                      Card Holder
                    </div>
                    <div className="text-[15px] sm:text-sm font-Lato">
                      John Doe
                    </div>
                  </div>
                  <div className=" ">
                    <div className="text-[12px] sm:text-sm uppercase text-[#718EBF]">
                      VALID THRU
                    </div>
                    <div className="text-[15px] sm:text-sm font-Lato">
                      12/24
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-2  text-[15px]  lg:text-20  font-Lato text-[#343C6A]">
                  <div>3778**** ****1234</div>
                  <img
                    className="w-10 h-10"
                    src={"/Assets/Atm-Img4.svg"}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
            <div className="card-3 ">
              <Heading text="My Expense" />
              <div className="bg-white rounded-[25px]">
                <Graphcard />
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------payment histary---------------------------------- */}

        <div className=" py-3">
          <h1 className="text-[22px] px-2 font-semibold text-[#343C6A]">
            Recent Transactions
          </h1>
        </div>
        <div className="payment  font-semibold  text-[#718EBF]   ">
          <div className="border-b-2  text-[16px] gap-[10px] lg:gap-[90px] border-[#EBEEF2] flex">
            <button
              onClick={() => handleTabChange("edit-profile")}
              className={`lg:px-5 text-left px-3 py-2 lg:text-lg font-semibold 
            ${
              activeTab === "edit-profile"
                ? "border-b-4  rounded-r rounded-l  border-blue-700 text-blue-600"
                : "text-[#718EBF]"
            }
            hover:text-blue-600`}
            >
              All Transactions
            </button>
            <button
              onClick={() => handleTabChange("edit-profile")}
              className={`lg:px-4 px-3 py-2 lg:text-lg font-semibold 
            ${
              activeTab === "edit-profile"
                ? "  text-[#718EBF]"
                : "text-[#718EBF]"
            }
            `}
            >
              Income
            </button>
            <button
              onClick={() => handleTabChange("edit-profile")}
              className={`lg:px-4 px-3 py-2 lg:text-lg font-semibold 
            ${
              activeTab === "edit-profile"
                ? "   text-[#718EBF]"
                : "text-[#718EBF]"
            }
            `}
            >
              Expense
            </button>
          </div>
        </div>

        <div className="pt-5  bg-gray-50  ">
          <table class="w-full bg-white  rounded-[25px]  ">
            <thead className="">
              <tr className=" text-[#718EBF] lg:border-b    ">
                <th className=" text-[12px] lg:text-[16px] tracking-wide text-left p-3 lg:p-4 hidden sm:table-cell ">
                  {" "}
                  Description
                </th>
                <th className=" tracking-wide text-left text-[12px] lg:text-[16px] hidden sm:table-cell ">
                  Transaction ID
                </th>
                <th className=" tracking-wide text-left text-[12px] lg:text-[16px] hidden sm:table-cell">
                  Type
                </th>
                <th className=" tracking-wide text-left text-[12px] lg:text-[16px] hidden sm:table-cell">
                  Card
                </th>
                <th className=" tracking-wide text-left text-[12px] lg:text-[16px] hidden sm:table-cell">
                  Date
                </th>
                <th className=" tracking-wide text-left text-[12px] lg:text-[16px] hidden sm:table-cell">
                  Amount
                </th>
                <th className=" tracking-wide text-left text-[12px] lg:text-[16px] hidden sm:table-cell">
                  Receipt
                </th>
              </tr>
            </thead>
            <tbody className="items-center ">
              <tr className="justify-center lg:text-[16px] text-[13px] border-b border-[#F2F4F7]">
                <td className="flex gap-3 lg:gap-5 lg:text-[16px] text-[13px] lg:p-5 p-6">
                  <img
                    className=" lg:w-[30px] lg:h-[30px]"
                    src={"/Assets/Transactions-img.svg"}
                    alt="Logo"
                  />
                 
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium"> Spotify Subscription</div>
                    <div className="lg:hidden md:hidden text-[#718EBF] ">
                      15 Jan, 03.29 AM
                    </div>
                  </div>
                </td>
                <td className="hidden sm:table-cell">#12548796</td>
                <td className="hidden sm:table-cell">Shopping</td>
                <td className="hidden sm:table-cell">1234 ****</td>
                <td className="hidden sm:table-cell">28 Jan, 12.30 AM</td>
                <td className="text-[#FE5C73] font-semibold lg:text-[16px] text-[13px]">-$2,500</td>
                <td>
                  <button class=" text-[#123288] hidden sm:table-cell  border-[1px] border-[#123288] w-[100px] h-[35px] text-sm  hover:text-blue-600 hover:border-blue-600   rounded-full">
                    Download
                  </button>
                </td>
              </tr>
              <tr className=" lg:text-[16px] text-[13px] border-b border-[#F2F4F7]">
                <td className="flex p-5 gap-3 lg:gap-5">
                  <img
                    className="lg:w-[30px] lg:h-[30px]"
                    src={"/Assets/Transactions-img.svg"}
                    alt="Logo"
                  />
                 
                  <div className="flex flex-col md:flex-row">
                    <div  className="font-semibold"> Freepik Sales</div>
                    <div className="lg:hidden md:hidden text-[#718EBF] ">
                      15 Jan, 03.29 AM
                    </div>
                  </div>
                </td>
                <td className="hidden sm:table-cell">#12548796</td>
                <td className="hidden sm:table-cell">Transfer</td>
                <td className="hidden sm:table-cell">1234 ****</td>
                <td className="hidden sm:table-cell">25 Jan, 10.30 AM</td>
                <td className="text-[#16DBAA] font-semibold lg:text-[16px] text-[13px]">+$750</td>
                <td>
                  <button class=" text-[#123288] hidden sm:table-cell   border-[1px] border-[#123288] w-[100px] h-[35px] text-sm  hover:text-blue-600 hover:border-blue-600   rounded-full">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="lg:text-[16px] text-[13px] border-b">
                <td className="flex gap-3 lg:gap-5 p-5">
                  <img
                    className="lg:w-[30px] lg:h-[30px]"
                    src={"/Assets/Transactions-img.svg"}
                    alt="Logo"
                  />
                
                  <div className="flex flex-col md:flex-row">
                    <div  className="font-semibold">  Mobile Service</div>
                    <div className="lg:hidden md:hidden text-[#718EBF] ">
                      15 Jan, 03.29 AM
                    </div>
                  </div>
                  
                </td>
                <td className="hidden sm:table-cell">#12548796</td>
                <td className="hidden sm:table-cell">Service</td>
                <td className="hidden sm:table-cell">1234 ****</td>
                <td className="hidden sm:table-cell">20 Jan, 10.40 AM</td>
                <td className="text-[#FE5C73] font-semibold lg:text-[16px] text-[13px]">-$150</td>
                <td>
                  <button class=" text-[#123288] hidden sm:table-cell  border-[1px] border-[#123288] w-[100px] h-[35px] text-sm  hover:text-blue-600 hover:border-blue-600   rounded-full">
                    Download
                  </button>
                </td>
              </tr>
              <tr className=" lg:text-[16px] text-[13px]  border-b">
                <td className="flex gap-3 lg:gap-5 p-5">
                  <img
                    className="lg:w-[30px] lg:h-[30px]"
                    src={"/Assets/Transactions-img.svg"}
                    alt="Logo"
                  />
                 
                  <div className="flex flex-col md:flex-row">
                    <div  className="font-semibold"> Wilson</div>
                    <div className="lg:hidden md:hidden text-[#718EBF] ">
                      15 Jan, 03.29 AM
                    </div>
                  </div>
                </td>
                <td className="hidden sm:table-cell">#12548796</td>
                <td className="hidden sm:table-cell">Transfer</td>
                <td className="hidden sm:table-cell">1234 ****</td>
                <td className="hidden sm:table-cell">15 Jan, 03.29 AM</td>
                <td className="text-[#FE5C73] font-semibold lg:text-[16px] text-[13px]">-$1050</td>
                <td>
                  <button class=" text-[#123288] hidden sm:table-cell  border-[1px] border-[#123288] w-[100px] h-[35px] text-sm  hover:text-blue-600 hover:border-blue-600  rounded-full">
                    Download
                  </button>
                </td>
              </tr>
              <tr className=" lg:text-[16px] text-[13px]">
                <td className="flex gap-3 lg:gap-5 p-6">
                  <img
                    className="lg:w-[30px] lg:h-[30px]"
                    src={"/Assets/Transactions-img.svg"}
                    alt="Logo"
                  />
                  <div className="flex flex-col md:flex-row">
                    <div  className="font-semibold">Emilly</div>
                    <div className="lg:hidden md:hidden text-[#718EBF]">
                      15 Jan, 03.29 AM
                    </div>
                  </div>
                </td>

                <td className="hidden sm:table-cell">#12548796</td>
                <td className="hidden sm:table-cell">Transfer</td>
                <td className="hidden sm:table-cell">1234 ****</td>
                <td className="hidden sm:table-cell">14 Jan, 10.10 AM</td>

                <td className="text-[#16DBAA] font-semibold lg:text-[16px] text-[13px]">+$840</td>
                <td>
                  <button class=" text-[#123288] hidden sm:table-cell  border-[1px] border-[#123288]  w-[100px] h-[35px] text-sm hover:text-blue-600 hover:border-blue-600   rounded-full">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex pt-5 justify-end  ">
            <button class="text-[#1814F3] font-bold text-[15px]  py-2 px-4  flex   rounded-[8px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Previous
            </button>
            <button class=" bg-blue-600 font-bold mt-1 lg:mt-0  lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] text-sm   rounded-[9px] text-white">
              1
            </button>

            <button class="text-[#1814F3] font-bold py-2 px-3 text-sm   rounded-full">
              2
            </button>
            <button class=" text-[#1814F3] font-bold py-2 px-3 text-sm   rounded-full">
              3
            </button>
            <button class=" text-[#1814F3] font-bold  py-2 px-3 text-sm   rounded-full">
              4
            </button>
            <button class="text-[#1814F3] font-bold text-blue flex py-2 px-5 text-[15px]   rounded-full">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 mt-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          {/* ---------------------------------------secound payment 2--------------------- */}
        </div>
      </div>
    </div>
  );
};
