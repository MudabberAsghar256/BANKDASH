import React from "react";
import { Heading } from "../../Common/Heading";
export const Services = () => {
  return (
    <div className="p-5  bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-[45px]">
        <div className="w-full justify-center items-center p-6 flex gap-3 rounded-[15px] lg:rounded-[25px] bg-white ">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Services-img1.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className="font-bold text-[16px] xl:text-[20px]">
              Life Insurance
            </h1>
            <p className="xl:text-[16px] text-[12px] text-[#718EBF]">
              Unlimited protection
            </p>
          </div>
        </div>

        <div className="w-full p-6 flex gap-3  justify-center items-center rounded-[15px] lg:rounded-[25px] bg-white ">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Services-img2.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className="font-bold text-[16px] xl:text-[20px]">Shopping</h1>
            <p className="xl:text-[16px] text-[12px] text-[#718EBF]">
              Buy. Think. Grow
            </p>
          </div>
        </div>

        <div className="w-full p-6 flex gap-3 justify-center items-center rounded-[15px] lg:rounded-[25px] bg-white">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Services-img3.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className="font-bold text-[16px] xl:text-[20px]">Safety</h1>
            <p className="xl:text-[16px] text-[12px] text-[#718EBF]">
              We are your allies
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------Bank Services list---------------------------- */}
      <div className="">
        <div>
          <Heading text="Bank Services List" />
          <div className=" ">
            <div className="flex flex-col md:flex-row w-full bg-white  p-4 xl:rounded-[20px] rounded-[15px] mb-5">
              <div className="flex gap-1  xl:gap-[115px]  items-center w-full">
                <div className="flex items-center gap-2 md:gap-3">
                <div className=" rounded-[15px]">
                  <img
                      className="xl:w-[60px] w-[45px] h-[45px] xl:h-[60px]"
                      src={"/Assets/Servicesicon-img1.svg"}
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h1 className="xl:text-[16px] text-[13px] font-bold">Business loans</h1>
                    <p className="xl:text-[15px] text-[12px] text-[#718EBF]">
                      It is a long established
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col font-bold">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 md:ml-6">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 md:ml-6">
                    Namain Card
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">Edward</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="md:mt-0 xl:ml-6 xl:text-[15px] text-[12px] font-bold text-[#1814F3] 
                  sm:text-[#718EBF] bg-white lg:border-2 border-[#718EBF] 
                  hover:border-[#1814F3] hover:text-[#1814F3] rounded-[25px] w-[120px] h-[30px] xl:w-[150px] xl:h-[35px] "
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-white  p-4 xl:rounded-[20px] rounded-[15px] mb-5">
              <div className="flex gap-1 xl:gap-[115px] items-center w-full">
                <div className="flex items-center gap-3">
                <div className=" rounded-[15px]">
                  <img
                      className="xl:w-[60px] w-[45px] h-[45px] xl:h-[60px]"
                      src={"/Assets/Servicesicon-img2.svg"}
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h1 className="xl:text-[16px] text-[13px] font-bold">Checking accounts</h1>
                    <p className="xl:text-[15px] text-[12px] text-[#718EBF]">
                      It is a long established
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col font-bold">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 md:ml-6">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 md:ml-6">
                    Namain Card
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">Edward</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="md:mt-0 xl:ml-6 xl:text-[15px] text-[12px] font-bold text-[#1814F3] sm:text-[#718EBF] bg-white lg:border-2 border-[#718EBF]  hover:border-[#1814F3] hover:text-[#1814F3] rounded-[25px] w-[120px] h-[30px] xl:w-[150px] xl:h-[35px]"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-white  p-4 xl:rounded-[20px]  rounded-[15px] mb-5">
              <div className="flex gap-1 xl:gap-[115px] items-center w-full">
                <div className="flex items-center gap-2 md:gap-3">
                <div className=" rounded-[15px]">
                  <img
                      className="xl:w-[60px] w-[45px] h-[45px] xl:h-[60px]"
                      src={"/Assets/Servicesicon-img3.svg"}
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h1 className="xl:text-[16px] text-[13px] font-bold">Savings accounts</h1>
                    <p className="xl:text-[15px] text-[12px] text-[#718EBF]">
                      It is a long established
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col font-bold">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Namain Card
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">Edward</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="md:mt-0 xl:ml-6 xl:text-[15px] text-[12px] font-bold text-[#1814F3] sm:text-[#718EBF] bg-white lg:border-2 border-[#718EBF]  hover:border-[#1814F3] hover:text-[#1814F3] rounded-[25px] w-[120px] h-[30px]  xl:w-[150px] xl:h-[35px]"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-white  p-4 xl:rounded-[20px] rounded-[15px] mb-5">
              <div className="flex gap-1 xl:gap-[115px] items-center w-full">
                <div className="flex items-center gap-2 md:gap-3">
                <div className=" rounded-[15px]">
                  <img
                      className="xl:w-[60px] w-[45px] h-[45px] xl:h-[60px]"
                      src={"/Assets/Servicesicon-img4.svg"}
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h1 className="xl:text-[16px] text-[13px] font-bold">Debit & credit card</h1>
                    <p className="xl:text-[15px] text-[12px] text-[#718EBF]">
                      It is a long established
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col font-bold">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px]  text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Namain Card
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">Edward</p>
                  </div>
                </div>
                <button
                  type="button"
                  className=" md:mt-0 xl:ml-6 xl:text-[15px] text-[12px] font-bold text-[#1814F3] sm:text-[#718EBF] bg-white lg:border-2 border-[#718EBF]  hover:border-[#1814F3] hover:text-[#1814F3] rounded-[25px] w-[120px] h-[30px] xl:w-[150px] xl:h-[35px]"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-white  p-4 rounded-[15px] xl:rounded-[20px] mb-5">
              <div className="flex gap-1 xl:gap-[115px] items-center w-full">
                <div className="flex items-center gap-2 md:gap-3">
                <div className=" rounded-[15px]">
                  <img
                      className="xl:w-[60px] w-[45px] h-[45px] xl:h-[60px]"
                      src={"/Assets/Servicesicon-img5.svg"}
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h1 className="xl:text-[16px] text-[13px] font-bold">Life Insurance</h1>
                    <p className="xl:text-[15px] text-[12px] text-xs text-[#718EBF]">
                      It is a long established
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col font-bold">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Namain Card
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">Edward</p>
                  </div>
                </div>
                <button
                  type="button"
                  className=" md:mt-0 xl:ml-6 xl:text-[15px] text-[12px] font-bold text-[#1814F3] sm:text-[#718EBF] bg-white lg:border-2 border-[#718EBF]  hover:border-[#1814F3] hover:text-[#1814F3] rounded-[25px] w-[120px] h-[30px] xl:w-[150px] xl:h-[35px]"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full bg-white  p-4 rounded-[15px] xl:rounded-[20px]">
              <div className="flex gap-1 xl:gap-[115px] items-center w-full">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className=" rounded-[15px]">
                  <img
                      className="xl:w-[60px] w-[45px] h-[45px] xl:h-[60px]"
                      src={"/Assets/Servicesicon-img1.svg"}
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h1 className="xl:text-[16px] text-[13px] font-bold">Business loans</h1>
                    <p className="xl:text-[15px] text-[12px] text-[#718EBF]">
                      It is a long established
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row md:justify-between items-start md:items-center mt-4 md:mt-0">
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col font-bold">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Lorem Ipsum
                    <p className="font-normal xl:text-[15px] text-[12px] break-words text-[#718EBF]">
                      Many publishing
                    </p>
                  </div>
                  <div className="xl:text-[16px] text-[13px] hidden md:flex flex-col  font-bold mt-2 md:mt-0 xl:ml-6">
                    Namain Card
                    <p className="font-normal xl:text-[15px] text-[12px] text-[#718EBF]">Edward</p>
                  </div>
                </div>
                <button
                  type="button"
                  className=" md:mt-0 xl:ml-6 xl:text-[15px] text-[12px] font-bold text-[#1814F3] sm:text-[#718EBF] bg-white lg:border-2 border-[#718EBF]  hover:border-[#1814F3] hover:text-[#1814F3] rounded-[25px] w-[120px] h-[30px] xl:w-[150px] xl:h-[35px]"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
