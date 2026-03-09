import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col  bg-emerald-950 text-teal-50  items-center min-h-screen ">
      <div className="flex justify-center items-center flex-col mt-20 gap-50  ">
        <h1 className="text-4xl font-serif">Welcome to Our the <span className="font-mono"> "Courtyard"</span></h1>
          <button className="h-fit bg-[#4e4444] pl-8 pt-2 pr-8 pb-3 w-fit" onClick={()=> navigate("/email")}>
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
