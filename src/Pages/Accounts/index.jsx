import React from "react";
import { Accountcard } from "../../Common/Accountcard";
import { Heading } from "../../Common/Heading";
import {Accountgraph} from "./Accountsgraph";

// import Accountgraph from "./Accountgraph";

export const Accounts = () => {
  return (
    <div className="main bg-gray-50 p-5 mt-4 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 ">
        <div className="card1">
          <Accountcard
            img="/Assets/Accounts-img1.svg"
            text1="My Balance"
            text2="$12,750"
          />
        </div>
        <div className="card2">
          <Accountcard
            img="/Assets/Accounts-img2.svg"
            text1="Income"
            text2="$5,600"
          />
        </div>
        <div className="card3">
          <Accountcard
            img="/Assets/Accounts-img3.svg"
            text1="Expense"
            text2="$3,460"
          />
        </div>
        <div className="card4">
          <Accountcard
            img="/Assets/Accounts-img4.svg"
            text1="Total Saving"
            text2="$7,920"
          />
        </div>
      </div>
      {/*---------------------------------------------------- Transaction List --------------------------------------*/}
      <div className="lg:grid lg:grid-cols-6 md:grid-cols-1  lg:gap-4 ">
        <div className="card-3 col-span-4 lg:w-auto ">
          <Heading text="Recent Transaction" />
          <div className="bg-white rounded-[15px] lg:rounded-[25px] p-5">
            <div className="flex items-center justify-between mb-4">
              {/* <img src={Icon_18} alt="Transaction Icon" /> */}
              <img
                    className=" lg:w-[55px] lg:h-[55px]"
                    src={"/Assets/LastTransaction-img2.svg"}
                    alt="Logo"
                  />
              <div className="text-md px-4 font-bold">
                Deposit from my Card
                <p className="font-normal text-[#718EBF]">28 January 2021</p>
              </div>
              <div className="hidden sm:flex">
                <p className="lg:px-7 text-[#718EBF]">Shopping</p>
                <p className="lg:px-10 text-[#718EBF]">1234 ****</p>
                <p className=" text-[#718EBF]">Pending</p>
              </div>
              <p className="text-xl text-red-400 ml-auto">-$150</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              {/* <img src={Icon_19} alt="Transaction Icon" /> */}
              <img
                    className=" lg:w-[55px] lg:h-[55px]"
                    src={"/Assets/LastTransaction-img3.svg"}
                    alt="Logo"
                  />
              <div className="text-md px-4 font-bold">
                Deposit Paypal
                <p className="font-normal text-[#718EBF]">25 January 2021</p>
              </div>
              <div className="hidden sm:flex">
                <p className="lg:px-20 text-[#718EBF]">Service</p>
                <p className="lg:px-3 text-[#718EBF]">1234 ****</p>
                <p className="lg:px-6 text-[#718EBF]">Completed</p>
              </div>
              <p className="text-xl text-red-400 ml-auto">+$340</p>
            </div>
            <div className="flex items-center ">
              {/* <img src={Icon_20} alt="Transaction Icon" /> */}
              <img
                    className=" lg:w-[55px] lg:h-[55px]"
                    src={"/Assets/LastTransaction-img1.svg"}
                    alt="Logo"
                  />
              <div className="text-md px-4 font-bold">
                Jemi Wilson
                <p className="font-normal text-[#718EBF]">20 January 2021</p>
              </div>
              <div className="hidden sm:flex">
                <p className="lg:px-20 text-[#718EBF]">Transfer</p>
                <p className="lg:px-3 text-[#718EBF]">1234 ****</p>
                <p className="lg:px-5 text-[#718EBF]">Completed</p>
              </div>
              <p className="text-xl text-[#41D4A8] ml-auto
               ">+$780</p>
            </div>
          </div>
        </div>

        {/*------------------------------------- My Cards Section------------------------ */}
        <div className="card-1 col-span-2 w-full lg:w-auto">
        <div className="justify-between flex p-4">
          <h1 className=" text-[22px] font-bold text-[#343C6A]">My Cards</h1>
          <p className="text-[17px] font-semibold pt-1">See All</p>
          </div>
          <div className="w-full rounded-[15px] lg:rounded-[25px] text-white p-4 lg:p-5 bg-gradient-to-r from-[#2D60FF] to-[#539BFF] bg-opacity-200">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <div>
                <div className="text-sm uppercase">Balance</div>
                <p className="text-2xl text-white font-Lato">$5,756</p>
              </div>
              <img
                  className="w-[34px] h-[34px]"
                  src={"/Assets/Atm-img.svg"}
                  alt="Logo"
                />
            </div>
            <div className="flex mb-2 lg:mb-6">
              <div>
                <div className="text-[12px] text-[#FFFFFFB2]">CARD HOLDER</div>
                <div className="text-[15px] font-semibold font-Lato">Eddy Cusuma</div>
              </div>
              <div className="px-10 lg:px-20">
                <div className="text-[12px] text-[#FFFFFFB2]">VALID THRU</div>
                <div className="text-[15px] font-semibold">12/24</div>
              </div>
            </div>
            <div className="flex p-2   border-t  items-center justify-between ">
              <div className="text-[18px] lg-[22px] ml-3">3778**** ****1234</div>
              <img
                  className="w-10 h-10"
                  src={"/Assets/Atm-Img2.svg"}
                  alt="Logo"
                />
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------payment by Apple card------------------------- */}
      <div className="flex  flex-wrap lg:gap-5   ">
      <div className="card-3 w-full  flex-grow lg:w-auto">
        
          <Heading text="Debit & Credit Overview" />
          <div className="bg-white rounded-[15px] lg:rounded-[25px]   p-5">
            <div className="text-[#718EBF] lg:mb-5">
              <span className="font-semibold text-black">$7,560</span> Debited &{" "}
              <span className="font-semibold text-black">$5,420</span> Credited
              in this Week
            </div>
            <Accountgraph />
          </div>
        </div>

        {/* ------------------------------------------Invoices Sent--------------------------------- */}
        <div className="card-3 w-full lg:w-auto">
         
          <Heading text="Invoices Sent" />
          <div className="bg-white rounded-[15px]  lg:rounded-[25px] md:w-[364px]   p-4">
            <div className="flex items-center justify-between mb-7">
              {/* <img src={Icon_33} alt="Apple Store" /> */}
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Invoice-img.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 text-[#B1B1B1] font-bold">
                Apple Store
                <p className="font-normal text-[#718EBF]">5h ago</p>
              </div>
              <p className="text-xl text-[#718EBF] ml-auto">-$450</p>
            </div>
            <div className="flex items-center mb-7">
              {/* <img src={Icon_34} alt="Michael" /> */}
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Invoice-img4.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 text-[#B1B1B1] font-bold">
                Michael
                <p className="font-normal text-[#718EBF]">2 days ago</p>
              </div>
              <p className="text-xl text-[#718EBF] ml-auto">+$160</p>
            </div>
            <div className="flex items-center mb-7">
              {/* <img src={Icon_35} alt="Playstation" /> */}
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Invoice-img3.svg"}
                  alt="Logo"
                />
              <div className="text-md px-4 text-[#B1B1B1] font-bold">
                Playstation
                <p className="font-normal text-[#718EBF]">5 days ago</p>
              </div>
              <p className="text-xl text-[#718EBF] ml-auto">+$1085</p>
            </div>
            <div className="flex items-center">
              {/* <img src={Icon_36} alt="William" /> */}
              <img
                  className="w-[60px] h-[60px]"
                  src={"/Assets/Invoice-img2.svg"}
                  alt="Logo"
                />
              <div className="text-md text-[#B1B1B1] px-4 font-bold">
                William
                <p className="font-normal text-[#718EBF]">10 days ago</p>
              </div>
              <p className="text-xl text-[#718EBF] ml-auto">+$90</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
