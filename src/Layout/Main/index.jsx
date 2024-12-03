import { Navbar } from "../Navbar";
import { SendNav } from "../SendNav";
import { Sidebar } from "../Sidebar";
// import { SendNav } from "../SendNav";
export const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <div className="w-full relative">
        <Navbar />
        <SendNav />
        <div className="lg:pt-[90px] md:pt-[60px] sm:pt-[50px]  w-full h-[calc(100vh-10px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
