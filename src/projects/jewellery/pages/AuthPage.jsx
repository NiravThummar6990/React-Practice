import React, { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";

const AuthPage = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-linear-to-br from-blue-50 to-blue-200 ">
        <div className="hidden lg:flex flex-1 items-center justify-center  relative  ">
          <img
            className="h-full w-full object-cover object-top-left rounded-r-3xl"
            src="public/images/pexels-adrien-olichon-1257089-3627486 1.png"
            alt="Background"
          />

          <div className="absolute  h-screen inset-0 flex flex-col items-center text-white bg-black/50 rounded-r-3xl">
            <h1 className="text-6xl absolute top-16 font-bold">ERP Suite</h1>
            <p className="absolute top-32 text-center text-lg">
              Simplify workflows. Improve <br />
              efficiency. Scale with confidence.
            </p>
          </div>
        </div>

        {register ? <Signin set={setRegister} /> : <Login set={setRegister} />}
      </div>
    </>
  );
};

export default AuthPage;
