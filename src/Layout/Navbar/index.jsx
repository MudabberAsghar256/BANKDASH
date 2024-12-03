import { Listitems } from "../../Common/Listitems";
import { useContext, useState } from "react";
import { ConterContext } from "../../Context/Counter";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { name } = useContext(ConterContext);
  return (
    <div className="absolute w-full sm:flex hidden ">
      <nav className="bg-white lg:p-3  z-50 text-gray-700 w-full sticky flex  justify-between items-center gap-2  ">
        {/* User Actions (Search, Profile) */}

        <div className=" flex items-center p-4 ">
          {/* Toggle Button (visible only on small screens) */}
          <button
            onClick={handleToggleMenu}
            className="lg:hidden  p-3 h-10  text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <h5 className="text-[30px] font-bold text-[#343C6A] ">
            <div>
              <button>{name}</button>
            </div>
          </h5>
        </div>
        <div className="flex gap-3">
          <form className="">
            <div className="relative  ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#8BA3CB]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search for something"
                className="w-full p-4 pl-10 text-sm placeholder:text-[#8BA3CB] rounded-full bg-gray-50"
              />
            </div>
          </form>
          <img
            className="w-10 h-10 sm:flex hidden rounded-full"
            src="/Assets/Icon2.svg"
            alt="User Icon"
          />
          <img
            className="w-10 h-10 sm:flex hidden rounded-full"
            src="/Assets/Icon3.svg"
            alt="User Icon"
          />
          <img
            className="w-12 h-12 rounded-full"
            src="/Assets/Icon1.svg"
            alt="User Icon"
          />
        </div>
      </nav>
      {/* Menu items (toggle visibility based on screen size and state) */}
      <div
        className={`z-[50]  bg-white bg-clip-border lg:hidden w-[680px] h-[720px] text-gray-700 fixed ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <button
          onClick={handleToggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className=" mt-5 ml-5  p-3 w-10  h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <h5 className=" font-sans text-[30px] font-bold antialiased leading-snug text-[#343C6A]">
            BankDash.
          </h5>
        </div>
        <nav className="flex flex-col gap-1 ml-8  font-sans text-base font-normal text-blue-gray-700">
          <ul>
            <div className="m-auto ">
              <Listitems img="/Assets/Dashboard-Icon.svg" text="Dashborad" />
            </div>
            <div className="pt-7">
              <Listitems
                img="/Assets/Transactions-Icon.svg"
                text="Transactions"
              />
            </div>
            <div className="pt-7">
              <Listitems img="/Assets/Accounts-Icon.svg" text="Accounts" />
            </div>
            <div className="pt-7">
              <Listitems
                img="/Assets/Investments-Icon.svg"
                text="Investments"
              />
            </div>
            <div className="pt-7">
              <Listitems
                img="/Assets/CreditCards-Icon.svg"
                text="Credit Cards"
              />
            </div>
            <div className="pt-7">
              <Listitems img="/Assets/Loans-Icon.svg" text="Loans" />
            </div>
            <div className="pt-7">
              <Listitems img="/Assets/Services-Icon.svg" text="Services" />
            </div>
            <div className="pt-7 w-full">
              <Listitems
                img="/Assets/MyPrivileges_icon.svg"
                text="My Privilege"
              />
            </div>
            <div className="pt-7">
              <Listitems img="/Assets/Setting-Icon.svg" text="Setting" />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
