import React from "react";
import Header from "../comopnents/Header";
import Sidebar from "../comopnents/Sidebar";
import Footer from "../comopnents/Footer";
import Dashboard from "../page/Dashboard";
import { useGlobal } from "../provider/GlobalProvider";

const Dashboardlayout = () => {
  const {openSidebar, setOpenSidebar}=useGlobal();
  return (
    <>
      <div className="flex flex-col">
      <div className="flex">
        <aside
         className={` fixed md:static top-0 left-0 h-full w-64  transform transition-transform duration-300 ${ openSidebar ? "translate-x-0" : "-translate-x-full" } md:translate-x-0 ` }>
          <Sidebar />
        </aside>
        <div className="w-full">
          <header className=" border-b">
            <Header />
          </header>
          <main className="">
            <Dashboard />
          </main>
        </div>
        
      </div>
      
          <Footer/>
      </div>
        
    </>
  );
};

export default Dashboardlayout;
