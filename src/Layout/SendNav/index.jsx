import React from "react";
import { useState } from "react";
import { Listitems } from "../../Common/Listitems";


export const SendNav = () => {
  // State to handle the toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex  sm:hidden max-auto      flex-col   bg-white bg-clip-border   text-gray-700 ">
      <div className="p-3 pt-3  ">
        <div className="flex justify-between   ">
          <button
            onClick={handleToggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex    p-2 w-10 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded="false"
            
          >
                      <span className="sr-only">Open main menu</span>
       
       <svg
         className="w-5 h-5"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 17 14"
       >
       
         <path
           stroke="currentColor"
           stroke-linecap="round"
           stroke-linejoin="round"
           stroke-width="2"
           d="M1 1h15M1 7h15M1 13h15"
         />
       </svg>
          </button>

          {/*----------------------------------secound Sidebar----------------------------------- */}
          <div
            className={`z-[50]  bg-white bg-clip-border sm:hidden w-[680px] h-[720px] text-gray-700 fixed ${
              isMenuOpen ? "block" : "hidden"
            } sm:block`}
            
          >
                   <button
            onClick={handleToggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex   p-3  h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            
          >
            {isMenuOpen ? (
          <span>&#10005;</span> // Close icon (cross)
        ) : (
          <span></span>
        )}
         
          </button>

               <div className="pt-5 mb-2 p-5 flex gap-3">
          <img className="w-10 h-10" src={"/Assets/logo.svg"} alt="Logo" />
          <h5 className="block font-sans text-[30px] font-bold antialiased leading-snug text-[#343C6A]">
            BankDash.
          </h5>
        </div>

            <nav className="flex flex-col gap-1 ml-8  font-sans text-base font-normal text-blue-gray-700">
            <ul>
          <div className="m-auto">
            <Listitems img="/Assets/Dashboard-Icon.svg" text="Dashborad" />
          </div>
            <div className="pt-7">
            <Listitems img="/Assets/Transactions-Icon.svg" text="Transactions" />
            </div>
            <div className="pt-7">
            <Listitems img="/Assets/Accounts-Icon.svg" text="Accounts" />
            </div>
            <div className="pt-7">
            <Listitems img="/Assets/Investments-Icon.svg" text="Investments" />
            </div>
            <div className="pt-7">
            <Listitems img="/Assets/CreditCards-Icon.svg" text="Credit Cards" />
            </div>
            <div className="pt-7">
            <Listitems img="/Assets/Loans-Icon.svg" text="Loans" />
            </div>
            <div className="pt-7">
            <Listitems img="/Assets/Services-Icon.svg" text="Services" />
            </div>
            <div className="pt-7 w-full">
            <Listitems img="/Assets/MyPrivileges_icon.svg" text="My Privilege" />
            </div>
            <div className="pt-7">
            <Listitems img="/Assets/Setting-Icon.svg" text="Setting" />
            </div>
        
          </ul>

            </nav>
          </div>
        
          <span className=" text-[20px] text-[#343C6A]  ps-30 font-semibold whitespace-nowrap  px-5">
            Overview
          </span>
          <button
            type="button "
            className="flex text-sm bg-white-200 rounded-full  md:me-0 focus:ring-2  focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
             <img className="w-[35px] h-[35px]  rounded-full " src={"/Assets/Icon1.svg"} alt="/" /> 
          </button>
        </div>

        <div className="flex justify-center items-center p-3 ">
          <form className=" sm:right ">
            <label for="default-search"
              className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative px-7">
              <div className="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className=" px-10 p-2.5 lg:p-5 w-[325px] text-lm
         text-gray-900 border border-gray-100 rounded-full bg-gray-50 
            outline-none"
                placeholder="Search for someting"
                required
              />
            </div>
          </form>

         
        </div>
      </div>
</div>

  );
};


