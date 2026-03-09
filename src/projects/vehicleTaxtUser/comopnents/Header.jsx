import { PanelLeft } from "lucide-react";
import React from "react";
import { useGlobal } from "../provider/GlobalProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { setOpenSidebar, openSidebar } = useGlobal();
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex justify-center items-center gap-4">
          <button
            className="md:hidden text-xl"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <PanelLeft />
          </button>
          <div className="font-semibold">DRDO Admin</div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <img src="/images/Drdologo.jpeg" alt="drdo logo" />
          </div>
          <div className="font-semibold">DRDO</div>
        </div>
      </div>
    </>
  );
};

export default Header;
