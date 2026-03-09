import React from "react";
import { useGlobal } from "../provider/GlobalProvider";
import useUserApi from "../hook/useUserApi";

const Login = () => {
  const { pisNo, setPisNo, password, setPassword } = useGlobal();

  const {useLoginUser} = useUserApi();
  

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden ">
        <div className="h-full hidden md:block  ">
          <img
            src="/images/Rmram.jpeg"
            alt="Rmram Logo"
            className="md:h-screen h-[250px] object-cover w-full "
          />
        </div>

        <div className="flex items-center justify-center w-full h-full bg-neutral-100 ">
          <div className="flex flex-col justify-center items-center w-full max-w-80 gap-4 ">
            {/* logo */}
            <div className=" justify-center items-center p-4 bg-white rounded-full border border-neutral-500/20 flex ">
              <img
                src="/images/Drdologo.jpeg"
                alt="Rmram Logo"
                className="w-40 h-40 rounded-full "
              />
            </div>

            <div className="flex justify-center items-center flex-col w-full">
              <h1 className="font-semibold text-lg">Sign In </h1>
              <h4>Enter your credential to continue</h4>
            </div>

            <div className="flex items-center flex-col gap-2 w-full">
              <div className="flex flex-col gap-1  w-full">
                <label htmlFor="psino" className="text-sm font-medium">
                  PSI No
                </label>
                <input
                  placeholder="PSI No . . . ."
                  type="text"
                  id="psion"
                  onChange={(e) => setPisNo(e.target.value)}
                  className="outline-none px-4 py-2 bg-white border rounded-md border-neutral-500  focus:ring-2 ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="pass" className="text-sm font-medium">
                  Password
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  id="pass"
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none px-4 py-2 bg-white border rounded-md border-neutral-500 focus:ring-2 ring-blue-500 "
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-6 w-full">
              <div>
                <p className="text-neutral-500">Forgot Password?</p>{" "}
              </div>
              <div>
                
                  <button className="px-8 py-2 text-white bg-blue-600 rounded-xl" onClick={()=>{
                    if(!pisNo || !password ) return

                    useLoginUser();
                    

                  }}
                  >
                    Sign In
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
