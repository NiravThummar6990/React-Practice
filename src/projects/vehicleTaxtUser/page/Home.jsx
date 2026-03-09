import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-[#ffffff]  h-screen flex flex-col justify-center items-center gap-50 text-3xl font-semibold">
        <h1 className="text-[#051627]">Welcom to our ' Courtyard '</h1>
        <Link to="/dashboard">
          <button className="bg-gray-950 px-8 py-2 rounded-xl shadow-xs shadow-blue-600 text-white">
            પધારો
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
