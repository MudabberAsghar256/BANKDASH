import React from "react";
import { Listitems } from "../../Common/Listitems";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <>
      <div className="lg:flex bg-white  ">
        {/*---------------------------------- Sidebar----------------------------------- */}
        <div className="w-full lg:px-8 ">
          <nav className=" flex-col md:px-2 lg:px-5 lg:flex hidden p-2 font-sans text-base font-normal text-blue-gray-700">
            <div className="pt-6 mb-2 flex gap-3">
              <img className="w-10 h-10" src={"/Assets/logo.svg"} alt="Logo" />
              <h5 className="block font-sans text-[30px] font-bold antialiased leading-snug text-[#343C6A]">
                BankDash.
              </h5>
            </div>
            <ul className="pt-[43px]">
            
              <Link to="/Dashborad">
                <div  className="">
                  <Listitems
                    img="/Assets/Dashboard-Icon.svg"
                    text="Dashborad"
                  />
                </div>
              </Link>
              <Link to="/Transactions">
              
              <div className="pt-8">
                <Listitems
                  img="/Assets/Transactions-Icon.svg"
                  text="Transactions"
                />
              </div>
              </Link>
              <Link to="/Accounts">
              <div className="pt-8">
                <Listitems img="/Assets/Accounts-Icon.svg" text="Accounts" />
              </div>
              </Link>
              <Link to="/Investments">
              <div className="pt-7">
                <Listitems
                  img="/Assets/Investments-Icon.svg"
                  text="Investments"
                />
              </div>
              </Link>
              <Link to="/CreditCards">
              <div className="pt-8">
                <Listitems
                  img="/Assets/CreditCards-Icon.svg"
                  text="Credit Cards"
                />
              </div>
              </Link>
              <Link to="/Loans">
              <div className="pt-7">
                <Listitems img="/Assets/Loans-Icon.svg" text="Loans" />
              </div>
              </Link>
              <Link to="/Services">
              <div className="pt-8">
                <Listitems img="/Assets/Services-Icon.svg" text="Services" />
              </div>
              </Link>
              <div className="pt-8 w-full">
                <Listitems
                  img="/Assets/MyPrivileges_icon.svg"
                  text="My Privilege"
                />
              </div>
              <Link to="/Satting">
              <div className="pt-8">
                <Listitems img="/Assets/Setting-Icon.svg" text="Setting" />
              </div>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
