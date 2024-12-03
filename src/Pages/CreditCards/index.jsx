import React from "react";
import { Heading } from "../../Common/Heading";
// import Circlechart2 from "./Circlechart2";
import  CreditCardChart  from "./CreditCardChart";

export const CreditCards = () => {
  return (
    <div className=" p-5 bg-gray-50">
      <div className="w-full  ">
      <Heading text="My Cards" />
        {/* -----------------------------------------Responsive grid layout for cards----------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8">
          {/* First Card */}
          <div className="card-1 ">
 

            <div className="lg:rounded-[25px] rounded-[15px] text-white  p-5  bg-gradient-to-r from-[#2D60FF] to-[#539BFF] bg-opacity-200">
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
                  <div className="text-[15px] sm:text-sm font-Lato">12/24</div>
                </div>
              </div>

              <div className="flex    border-t  items-center justify-between ">
              <div className="text-[18px] lg-[22px]">3778**** ****1234</div>
              <img
                  className="w-10 h-10"
                  src={"/Assets/Atm-Img2.svg"}
                  alt="Logo"
                />
            </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="card-2 ">
 

            <div className="lg:rounded-[25px] rounded-[15px]  text-white  p-5  bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] bg-opacity-200">
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
                  <div className="text-[15px] sm:text-sm font-Lato">12/24</div>
                </div>
              </div>

              <div className="flex    border-t  items-center justify-between ">
              <div className="text-[18px] lg-[22px]">3778**** ****1234</div>
              <img
                  className="w-10 h-10"
                  src={"/Assets/Atm-Img2.svg"}
                  alt="Logo"
                />
            </div>
            </div>
          </div>
          {/* ------------------------------------------Second Card------------------------------- */}
          <div className=" card-3 ">
    
            <div className="bg-white lg:rounded-[25px] rounded-[15px]    text-black p-5">
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
                  <div className="text-[15px] sm:text-sm font-Lato">12/24</div>
                </div>
              </div>

              <div className="flex    border-t  items-center justify-between ">
              <div className="text-[18px] lg-[22px]">3778**** ****1234</div>
              <img
                  className="w-10 h-10"
                  src={"/Assets/Atm-Img4.svg"}
                  alt="Logo"
                />
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------- Circle graph chart---------------------------------------- */}
      <div className="main  grid grid-flow-row xl:grid-flow-col gap-3 lg:gap-7">
        <div className="circle-chart w-full">
        
          <Heading text="Card Expense Statistics" />
          <div className="bg-white rounded-[25px]  lg:w-[390px] lg:h-[320px] ">
          <CreditCardChart />
          </div>
        </div>
        {/* -------------------------------------------card histry------------------------------------ */}
        <div className="card-3">
          <div>
           
            <Heading text=" Card List" />
            <div className="  ">
              <div className="flex  w-full bg-white  p-4 lg:p-5 rounded-[15px] lg:rounded-[25px] justify-between mb-4">
                <div className="flex xl:gap-[60px] gap-3 flex-wrap items-center">
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#E7EDFF]  rounded-[15px] lg:rounded-[20px] lg:p-4 p-2">         <img
                  className="w-[26px] h-[26px] mx-auto "
                  src={"/Assets/Cardlist-Img1.svg"}
                  alt="Logo"
                />
                    </div>
                    <div className="text-[14px] lg:text-[16px] font-semibold">
                      Card Type
                      <p className="text-[12px] lg:text-[15px] text-[#718EBF]">Secondary</p>
                    </div>
                  </div>
                  <div className="text-[14px] lg:text-[16px] font-semibold">
                    Bank
                    <p className="text-[12px] lg:text-[15px] text-[#718EBF]">ABM Bank</p>
                  </div>
                  <div className=" hidden sm:flex lg:flex-col text-[14px] lg:text-[16px] font-semibold">
                    Card Number
                    <p className="text-[12px] lg:text-[15px] break-words text-[#718EBF]">
                      **** **** 7560
                    </p>
                  </div>
                  <div className="hidden sm:flex lg:flex-col ">
                    <div className="text-[14px] lg:text-[16px] font-semibold">Namain Card</div>

                    <div className="text-[12px] lg:text-[15px]  text-[#718EBF]">Edward</div>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="lg:text-[17px] text-sm font-semibold text text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex  w-full bg-white  p-4 lg:p-5 rounded-[15px] lg:rounded-[25px] justify-between mb-4">
                <div className="flex xl:gap-[60px] gap-3 flex-wrap items-center">
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#FFE0EB]  rounded-[15px] lg:rounded-[20px] lg:p-4 p-2">
               
                      <img
                  className="w-[26px] h-[26px] mx-auto "
                  src={"/Assets/Cardlist-Img2.svg"}
                  alt="Logo"
                />
                    </div>
                    <div className="sm:text-md text-sm font-bold">
                      Card Type
                      <p className="font-normal text-[#718EBF]">Secondary</p>
                    </div>
                  </div>
                  <div className="sm:text-md text-sm font-bold">
                    Bank
                    <p className="font-normal text-[#718EBF]">ABM Bank</p>
                  </div>
                  <div className=" hidden sm:flex lg:flex-col text-md font-bold">
                    Card Number
                    <p className="font-normal break-words text-[#718EBF]">
                      **** **** 7560
                    </p>
                  </div>
                  <div className="hidden sm:flex lg:flex-col ">
                    <div className="text-md font-bold">Namain Card</div>

                    <div className="font-normal  text-[#718EBF]">Edward</div>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="lg:text-[17px] text-sm font-semibold text text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex  w-full bg-white  p-4 lg:p-5 rounded-[15px] lg:rounded-[25px] justify-between ">
                <div className="flex xl:gap-[60px] gap-3 flex-wrap items-center">
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#FFF5D9]  rounded-[15px] lg:rounded-[20px] lg:p-4 p-2">
            
                      <img
                  className="w-[26px] h-[26px] mx-auto "
                  src={"/Assets/Cardlist-Img3.svg"}
                  alt="Logo"
                />
                    </div>
                    <div className="sm:text-md text-sm font-bold">
                      Card Type
                      <p className="font-normal text-[#718EBF]">Secondary</p>
                    </div>
                  </div>
                  <div className="sm:text-md text-sm font-bold">
                    Bank
                    <p className="font-normal text-[#718EBF]">ABM Bank</p>
                  </div>
                  <div className=" hidden sm:flex lg:flex-col text-md font-bold">
                    Card Number
                    <p className="font-normal break-words text-[#718EBF]">
                      **** **** 7560
                    </p>
                  </div>
                  <div className="hidden sm:flex lg:flex-col ">
                    <div className="text-md font-bold">Namain Card</div>

                    <div className="font-normal  text-[#718EBF]">Edward</div>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="lg:text-[17px] text-sm font-semibold text text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------cirate A card---------------------------------------- */}

      <div className="flex flex-wrap  lg:gap-7">
        <div>
          <Heading text="  My Investment" />
          <div className="main bg-white p-3 lg:p-7 xl:w-[765px] rounded-[15px] lg:rounded-[25px]">
            <div className="mb-5">
              <p className="break-words text-[17px] sm:text-[19px] text-[#718EBF]">
                Credit Card generally means a plastic card issued by Scheduled
                Commercial Banks assigned to a Cardholder, with a credit limit,
                that can be used to purchase goods and services on credit or
                obtain cash advances.
              </p>
            </div>

            <div className="cards-main ">
              <div className="flex flex-wrap gap-4 xl:gap-10">
                <div className="relative w-full sm:w-auto">
                  <h1 className="p-2 text-[18px] sm:text-[20px]">Card Type</h1>
                  <input
                    type="search"
                    id="card-type"
                    className="px-4 p-3 w-full sm:w-[320px] sm:h-[50px] text-sm sm:text-lm placeholder:text-[#718EBF]
          text-gray-900 border border-[#DFEAF2] rounded-[15px] bg-gray-50 focus:ring-blue-500
          focus:border-blue-500"
                    placeholder="Classic"
                    required
                  />
                </div>

                <div className="relative  w-full sm:w-auto">
                  <h1 className="p-2 text-[18px] sm:text-[20px]">
                    Name On Card
                  </h1>
                  
                  <input
                    type="search"
                    id="name-on-card"
                    className="px-4 p-3 w-full sm:w-[320px] sm:h-[50px] text-sm sm:text-lm placeholder:text-[#718EBF]
          text-gray-900 border border-[#DFEAF2] rounded-[15px] bg-gray-50 focus:ring-blue-500
          focus:border-blue-500"
                    placeholder="My Cards"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 xl:gap-10">
                <div className="relative w-full sm:w-auto">
                  <h1 className="p-2 text-[18px] sm:text-[20px]">
                    Card Number
                  </h1>
                  <input
                    type="search"
                    id="card-number"
                    className="px-4 p-3 w-full sm:w-[320px] sm:h-[50px] text-sm sm:text-lm placeholder:text-[#718EBF]
          text-gray-900 border border-[#DFEAF2] rounded-[15px] bg-gray-50 focus:ring-blue-500
          focus:border-blue-500"
                    placeholder="**** **** **** ****"
                    required
                  />
                </div>

                <div className="relative w-full sm:w-auto">
                  <h1 className="p-2 text-[18px] sm:text-[20px]">
                    Expiry Date
                  </h1>
                  <input
                    type="search"
                    id="expiry-date"
                    className="px-4 p-3 w-full sm:w-[320px] sm:h-[50px] text-sm sm:text-lm placeholder:text-[#718EBF]
          text-gray-900 border border-[#DFEAF2] rounded-[15px] bg-gray-50 focus:ring-blue-500
          focus:border-blue-500"
                    placeholder="25 January 2025"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <button
                  type="button"
                  className="w-full sm:w-auto mx-2 mt-4 text-white bg-[#1814F3] hover:bg-blue-800 focus:ring-4
      focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3.5 mb-4 dark:bg-blue-600
      dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------Invoices Sent--------------------------------- */}
        <div className="card-3 w-full lg:w-auto">
        <Heading text="Card Satting" />
          <div className="bg-white rounded-[15px]  lg:rounded-[25px] md:w-[420px] sm:w-full   p-4 lg:p-7">
            <div className="flex items-center  mb-4">
          
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Cardsatting-img4.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 font-bold">
                Block Card
                <p className="font-normal text-[#718EBF]">
                  Instantly block your card
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Cardsatting-img3.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 font-bold">
                Change Pic Code
                <p className="font-normal text-[#718EBF]">
                  Withdraw without any card
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
      
              <img
                className="w-[60px] h-[60px]"
                  src={"/Assets/Cardsatting-img2.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 font-bold">
                Add to Google Pay
                <p className="font-normal text-[#718EBF]">
                  Withdraw without any card
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
            <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Invoice-img.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 font-bold">
                Add to Apple Pay
                <p className="font-normal text-[#718EBF]">
                  Withdraw without any card
                </p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Invoice-img.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 font-bold">
                Add to Apple Store
                <p className="font-normal text-[#718EBF]">
                  Withdraw without any card
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
