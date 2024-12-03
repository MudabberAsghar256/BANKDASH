import React, { useState } from "react";
 import { Buttons } from "../../Common/Buttons";

export const Satting = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="lg:p-8 p-4 bg-gray-50">
      <div className="flex flex-col w-full p-4 lg:p-6 bg-white rounded-[15px] shadow-lg">
        {/* Tabs Header */}
        <div className="flex lg:gap-10 border-b-2  mb-6">
          <button
            onClick={() => handleTabChange("edit-profile")}
            className={`lg:px-4 px-3 py-2 lg:text-lg font-semibold 
            ${
              activeTab === "edit-profile"
                ? "border-b-4  rounded-r rounded-l  border-blue-500 text-blue-600"
                : "text-[#718EBF]"
            }
            hover:text-blue-600`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => handleTabChange("preferences")}
            className={`lg:px-4 px-3 py-2 lg:text-lg font-semibold
            ${
              activeTab === "preferences"
                ? "border-b-4 rounded-r rounded-l border-blue-500 text-blue-600"
                : "text-[#718EBF]"
            }
            hover:text-blue-600`}
          >
            Preferences
          </button>
          <button
            onClick={() => handleTabChange("security")}
            className={`lg:px-4 px-3 py-2 lg:text-lg font-semibold 
            ${
              activeTab === "security"
                ? "border-b-4  rounded-r rounded-l border-blue-500 text-blue-600"
                : "text-[#718EBF]"
            }
            hover:text-blue-600`}
          >
            Security
          </button>
        </div>
        {/* -------------------------------------------------------Tabs Content-------------------------------------------- */}
        <div className=" bg-white rounded-lg">
          {activeTab === "edit-profile" && (
            <div
              id="tabe1"
              className="tabe-content  grid lg:grid-cols-6 grid-cols-1 "
            >
              <div className="py-5 sm:block flex justify-center">
           
                <img
              className=""
              src={"/Assets/Satting-img.svg"}
              alt="Logo"
            />
              </div>
              {/* ---------------------------------------------------------card layout--------------------------------------------- */}
              <div className="col-span-5">
                <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                  <div className="relative p-2 sm:w-auto w-[100%]  ">
                    <h1 className="p-2 text-[20px]">Your Name </h1>
                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="Charlene Reed "
                      required
                    />
                  </div>
                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">User Name</h1>

                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="Charlene Reed "
                      required
                    />
                  </div>

                  {/*------------------------------------------------- secound ---------------------------------------- */}

                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">Email</h1>
                    <input
                      type="search"
                      id="default-search"
                      className="px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="charlenereed@gmail.com "
                      required
                    />
                  </div>
                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">Password</h1>
                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="**********"
                      required
                    />
                  </div>

                  {/*---------------------------------------------------- third ---------------------------------------- */}

                  <div className="relative p-2 sm:w-auto w-[100%]  ">
                    <h1 className="p-2 text-[20px]">Date of Birth</h1>
                    <input
                      type="search"
                      id="default-search"
                      className="px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="25 January 1990"
                      required
                    />
                  </div>

                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">Present Address</h1>

                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="San Jose, California, USA"
                      required
                    />
                  </div>
                  {/*--------------------------------------------------- forth ---------------------------------------- */}

                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">Permanent Address</h1>
                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="San Jose, California, USA"
                      required
                    />
                  </div>
                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">City</h1>
                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="San Jose"
                      required
                    />
                  </div>

                  {/*-------------------------------------------------fiveth-------------------------------------------- */}

                  <div className="relative p-2 sm:w-auto w-[100%]  ">
                    <h1 className="p-2 text-[20px]">Postal Code</h1>
                    <input
                      type="search"
                      id="default-search"
                      className=" px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="45962..."
                      required
                    />
                  </div>

                  <div className="relative sm:w-auto w-[100%]  p-2">
                    <h1 className="p-2 text-[20px]">Country</h1>

                    <input
                      type="search"
                      id="default-search"
                      className="px-6 lg:p-4 p-2.5  w-[100%] text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                      placeholder="USA"
                      required
                    />
                  </div>
                </div>
                {/* ------------------------------------------------button---------------------------------------- */}
              <Buttons text={"Save"}/>
              </div>
            </div>
          )}
          {/* ------------------------------------------secound tabe ------------------------------------------ */}
          {activeTab === "preferences" && (
            <div>
              <div className="flex flex-wrap gap-5">
                <div className="relative sm:w-auto w-[100%]  ">
                  <h1 className="mb-3 lg:text-[20px]">Country</h1>
                  <input
                    type="search"
                    id="default-search"
                    className=" px-6 p-2.5 lg:p-4 sm:w-[550px] w-[100%] text-lm  text-lm placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                    placeholder="USA"
                    required
                  />
                </div>

                <div className="relative sm:w-auto w-[100%]  ">
                  <h1 className="mb-3 lg:text-[20px]">Time Zone</h1>

                  <input
                    type="search"
                    id="default-search"
                    className=" px-6 lg:p-4 p-2.5 sm:w-[550px] w-[100%] text-lm  placeholder:text-[#718EBF]
                        text-gray-900 border border-[#DFEAF2] rounded-[15px]  outline-none "
                    placeholder="(GMT-12:00) International Date Line West"
                    required
                  />
                </div>
              </div>
              {/* ------------------------------------------Preference------------------------------- */}
              <div>
                <div className="font-bold text-lg pt-5  text-[#333B69]">
                  Notifaction{" "}
                </div>
                <div>
                  <label class="inline-flex items-center cursor-pointer pt-5 ">
                    <input type="checkbox" class="sr-only peer " />
                    <div
                      class="relative w-14 h-7 bg-gray-200 rounded-full peer-focus:ring-4
   peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-200
    dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
     after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full
      after:h-6 after:w-6 after:transition-all after:border-gray-300 dark:after:border-gray-600"
                    ></div>
                    <span class="ml-3 lg:text-lg font-medium text-gray-900 dark:text-gray-300">
                      I send or receive digita currency
                    </span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center cursor-pointer pt-3">
                    <input type="checkbox" class="sr-only peer " />
                    <div
                      class="relative w-14 h-7 bg-gray-200 rounded-full peer-focus:ring-4
   peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600
    dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
     after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full
      after:h-6 after:w-6 after:transition-all after:border-gray-300 dark:after:border-gray-600"
                    ></div>
                    <span class="ml-3 lg:text-lg font-medium text-gray-900 dark:text-gray-300">
                      I receive merchant order
                    </span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center cursor-pointer pt-3">
                    <input type="checkbox" class="sr-only peer " />
                    <div
                      class="relative w-14 h-7 bg-gray-200 rounded-full peer-focus:ring-4
   peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600
    dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
     after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full
      after:h-6 after:w-6 after:transition-all after:border-gray-300 dark:after:border-gray-600"
                    ></div>
                    <span class="ml-3 lg:text-lg font-medium  text-gray-900 dark:text-gray-300">
                      There are recommendation for my account
                    </span>
                  </label>
                </div>
               <Buttons text={"Save"}/>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              {/* ------------------------------------------------Security page------------------------------ */}
              <h3 className="text-lg font-semibold mb-2 pt-1">
                Two-factor Authentication
              </h3>
              <div>
                <label class="inline-flex items-center cursor-pointer pt-3 ">
                  <input type="checkbox" class="sr-only peer " />
                  <div
                    class="relative w-16 lg:w-15 h-8 bg-gray-200 rounded-full peer-focus:ring-4
   peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600
    dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
     after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full
      after:h-7 after:w-7 after:transition-all after:border-gray-300 dark:after:border-gray-600"
                  ></div>
                  <span class="ml-5 lg:text-lg font-medium text-gray-900 dark:text-gray-300">
                    Enable or disable two factor authentication
                  </span>
                </label>
              </div>
              <h3 className="text-lg font-semibold text-[#333B69] mb-3 pt-3">
                Change Password
              </h3>
              {/* -----------------------------------------------password bar------------------------------------------ */}
              <div className="">
                 <div className="relative  sm:w-auto w-[100%]  ">
                  <h1 className="mb-4 text-[18px]">Current Password</h1>
                  <input
                    type="search"
                    id="default-search"
                    className=" px-6 p-2.5 lg:p-4 sm:w-[550px] w-[100%] text-lm placeholder:text-[#718EBF]
         rounded-[15px] bg-gray-50
    placeholder-gray-400 outline-none boder
           dark:text-white "
                    placeholder="**********"
                    required
                  />
                </div> 
                {/* <Input label={"Current Password"} placeholder={"*****"} /> */}

                <div className="relative sm:w-auto w-[100%] ">
                  <h1 className="mb-4 pt-4 text-[18px]">New Password</h1>

                  <input
                    type="search"
                    id="default-search"
                    className=" px-6 p-2.5 lg:p-4 sm:w-[550px] w-[100%] text-lm placeholder:text-[#718EBF]
      text-gray-900 border border-[#DFEAF2] rounded-[15px] bg-gray-50 focus:ring-blue-500
       focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="**********"
                    required
                  />
                </div>
                {/* <Input label={"New Password"} placeholder={"*****"} /> */}
              </div>
               <Buttons text={"Save"}  />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


