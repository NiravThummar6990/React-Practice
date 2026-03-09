import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";

const Signin = ({ set }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const submitBtnRef = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleKeyDown = (e, refIndex) => {
    const refs = [usernameRef, passwordRef];

    const allFilled =
      usernameRef.current?.value?.trim() && passwordRef.current?.value?.trim();

    if (e.key === "ArrowDown" || e.key === "Enter") {
      if (refIndex < refs.length - 1) {
        e.preventDefault();
        refs[refIndex + 1].current?.focus();
      } else if (refIndex === refs.length - 1 && allFilled) {
        e.preventDefault();
        submitBtnRef.current?.focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (refIndex > 0) {
        refs[refIndex - 1].current?.focus();
      }
    }
  };

  const handleBtnKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      passwordRef.current?.focus();
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
  };

  const baseBtnClass =
    "p-3 w-full text-center font-medium md:text-xl ext-[15px] text-white bg-blue-500 hover:bg-black rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 mt-3 transition-all duration-150";

  return (
    <>
      <div className="flex-1 flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-200 p-8">
        <div className="w-full max-w-md">
          <div className="flex md:text-4xl text-[25px] font-medium mb-4">
            <h1>Sign in</h1>
          </div>

          <div className="font-medium text-gray-900 mb-8">
            <p className="text-gray-500 mb-6">
              Don't have an account?
              <span className="text-blue-600 underline ml-1">
                <button type="button" onClick={() => set(false)}>
                  <u>Register</u>
                </button>
              </span>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handlesubmit}>
            <div className="space-y-4">
              <div>
                <Input
                  label="Username"
                  inputtype="text"
                  inputplaceholder="Enter username"
                  isrequird={true}
                  id="username"
                  inputRef={usernameRef}
                  onKeyDown={(e) => handleKeyDown(e, 0)}
                />
                <div className="relative">
                  <Input
                    label="Password"
                    inputtype={show ? "text" : "password"}
                    inputplaceholder=". . . . . . . ."
                    isrequird={true}
                    id="Password"
                    inputRef={passwordRef}
                    onKeyDown={(e) => handleKeyDown(e, 1)}
                    classname="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((prev) => !prev)}
                    tabIndex={-1}
                    className="text-center absolute right-3 top-1/2 transform -translate-y-1/2 text-xl focus:outline-none"
                    noTailwind={show ? "Hide password" : "Show password"}
                  >
                    {show ? "🙈" : "👁"}
                  </button>
                </div>
                <div>
                  <button
                    ref={submitBtnRef}
                    type="submit"
                    tabIndex={0}
                    className={baseBtnClass}
                    onKeyDown={handleBtnKeyDown}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
