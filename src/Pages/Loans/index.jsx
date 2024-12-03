import React from "react";
import { Heading } from "../../Common/Heading";
import { Loanbutton } from "../../Common/Loanbutton";
export const Loans = () => {
  return (
    <div className="bg-gray-50 p-5 mt-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-10">
        <div className=" p-2 xl:p-5 flex gap-3 justify-center items-center rounded-[15px] lg:rounded-[25px] bg-white">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Loan-img1.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className=" lg:text-[16px] text-[12px] text-[#718EBF]">
              Personal Loans
            </h1>
            <p className="font-bold text-[16px]  lg:text-[20px]">$50,000</p>
          </div>
        </div>
        <div className=" p-1 xl:p-5 flex gap-3 justify-center items-center rounded-[15px] lg:rounded-[25px]  bg-white">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Loan-img2.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className=" lg:text-[16px] text-[12px] text-[#718EBF]">
              Corporate Loans
            </h1>
            <p className="font-bold text-[16px]  lg:text-[20px]">$100,000</p>
          </div>
        </div>
        <div className=" p-2 xl:p-5 flex gap-3 justify-center items-center rounded-[15px] lg:rounded-[25px]  bg-white">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Loan-img3.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className=" lg:text-[16px] text-[12px] text-[#718EBF]">
              Business Loans
            </h1>
            <p className="font-bold text-[16px]  lg:text-[20px]">$500,000</p>
          </div>
        </div>
        <div className=" p-3 xl:p-5 flex gap-3 justify-center items-center rounded-[15px] lg:rounded-[25px]  bg-white">
          <img
            className="xl:w-[70px] w-[45px] h-[45px] xl:h-[70px]"
            src={"/Assets/Loan-img4.svg"}
            alt="Logo"
          />
          <div className="">
            <h1 className=" lg:text-[16px] text-[12px] text-[#718EBF]">
              Custom Loans
            </h1>
            <p className="font-bold text-[16px]  xl:text-[20px]">$700,000</p>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------Loans payment--------------------------------- */}
      <Heading text="Active Loans Overview" />
      <div className="bg-white rounded-[25px]">
        <div class="relative lg:m-5  overflow-x-auto rounded-[15px] xl:rounded-[25px]">
          <table class="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class=" bg-white text-[#718EBF]   font-lg border-b">
              <tr>
                <th scope="col" class="px-6 py-5 hidden sm:table-cell ">
                  SLNo
                </th>

                <th scope="col" class="lg:px-6 px-3 py-3  ">
                  Loan Money
                </th>
                <th scope="col" class="lg:px-6 px-3 py-3  ">
                  Left to repay
                </th>
                <th scope="col" class="px-6 py-3 hidden sm:table-cell  ">
                  Duration
                </th>
                <th scope="col" class="px-6 py-3 hidden sm:table-cell ">
                  Interest rate
                </th>
                <th scope="col" class="px-6 py-3 hidden sm:table-cell ">
                  Installment
                </th>
                <th scope="col" class="px-6 py-3  ">
                  Repay
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  01.
                </td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $100,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$40,500</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  8 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  12%
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $2,000 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  02.
                </td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $500,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$250,000</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  36 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  10%
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $8,000 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  03.
                </td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $900,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$40,500</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  12 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  12%
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $5,000 / month
                </td>
                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">04</td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $50,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$40,500</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  25 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">5%</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $2,000 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell ">
                  05.
                </td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $50,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$40,500</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  5 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  16%
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $10,000 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">06</td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $80,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$25,500</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  14 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">8%</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $2,000 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  07.
                </td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $12,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$5,500</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  9 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  13%
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $500 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  08.
                </td>
                <th
                  scope="row"
                  class="lg:px-6 px-3 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  $160,000
                </th>
                <td class="lg:px-6 px-3 py-4 font-semibold">$100,800</td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  3 Months
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  12%
                </td>
                <td class="px-6 py-4 font-semibold hidden sm:table-cell">
                  $900 / month
                </td>

                <Loanbutton text="Replay" />
              </tr>

              <tr class="bg-white">
                <td class="lg:px-6 px-3 py-4 text-[#FE5C73] font-semibold ">
                  Total
                </td>

                <th
                  scope="row"
                  class="px-6 py-4 hidden sm:table-cell   whitespace-nowrap text-[#FE5C73] font-semibold"
                >
                  $125,0000
                </th>
                <td class="lg:px-6 px-3 py-4 text-[#FE5C73] font-semibold">
                  $750,000
                </td>
                <td className=" hidden sm:table-cell"></td>
                <td className="hidden sm:table-cell"></td>

                <td class="px-6 py-4 text-[#FE5C73] font-semibold hidden sm:table-cell">
                  $50,000 / month
                </td>
                <td className="hidden sm:table-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
