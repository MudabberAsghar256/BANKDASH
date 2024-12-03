import { Heading } from "../../Common/Heading";
import { Transaction } from "../../Common/Transection";
import { Chart1 } from "./chart1";
import Circlechart from "./Circlechart";
import Transfor from "./Transfor";
import Linegraph from "./Linegraph";

export const Dashboard = () => {
 
  
  return (
    <div>
      {/* <Heading text="My Cards" /> */}
      <div className="w-full  lg:bg-gray-50 p-5  bg-white">
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
                  <div className="text-[15px] sm:text-sm font-Lato">12/24</div>
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
              See All
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
                  <div className="text-[15px] sm:text-sm font-Lato">12/24</div>
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
            <Heading text="Recent Transaction" />
            {/*---------------------------------------------------- Transaction List --------------------------------------*/}
            <div className="bg-white rounded-[25px]   p-4 ">
              <div className="">
                <Transaction
                  img="/Assets/Transaction-Icon1.svg"
                  title="Deposit from my Card "
                  description="28 January 2021 "
                  amount="-$850"
                />
              </div>
              <div className="">
                <Transaction
                  img="/Assets/Transaction-Icon2.svg"
                  title="Deposit Paypal"
                  description="25 January 2021 "
                  amount="+$2,500"
                />
              </div>
              <div className="">
                <Transaction
                  img="/Assets/Transaction-Icon3.svg"
                  title="Jemi Wilson"
                  description="21 January 2021 "
                  amount="+$5,400"
                />
              </div>
    
            </div>
          </div>
        </div>
    
      <div className=" flex flex-wrap lg:bg-gray-50 lg:gap-5">
    <div >
    <Heading text="Weekly Activity" />
      <div className="p-3  bg-white rounded-[25px]"> 
      <Chart1/>
      </div>
      </div>
      <div>
      <Heading text="Expense Statistics" />
      <div className="p-4  bg-white rounded-[25px]">
        <Circlechart/>
      </div>
      </div>
</div>
<div className=" flex flex-wrap lg:bg-gray-50 gap-5">
<div className="">
  <Transfor/>
</div>
<div className="">
<Heading text="Expense Statistics" />
<div className="bg-white rounded-[25px] ">
  <Linegraph/>
  </div>
</div>
</div>
    </div>
    </div>
  );
};
