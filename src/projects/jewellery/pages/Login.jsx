import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import { Button } from "@/components/ui/button";

const Login = ({ set }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);
  const orgRef = useRef(null);
  const taxGSTRef = useRef(null);
  const submitBtnRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleKeyDown = (e, refIndex) => {
    const refs = [usernameRef, passwordRef, cpasswordRef, orgRef, taxGSTRef];

    const allFilled =
      usernameRef.current?.value?.trim() &&
      passwordRef.current?.value?.trim() &&
      cpasswordRef.current?.value?.trim() &&
      orgRef.current?.value?.trim() &&
      taxGSTRef.current?.value?.trim();

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
      taxGSTRef.current?.focus();
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const cpassword = cpasswordRef.current?.value;
    const org = orgRef.current?.value;
    const gst = taxGSTRef.current?.value;
  };

  const baseBtnClass =
    "p-3 w-full text-center font-medium md:text-xl text-[15px] bg-black text-white rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 mt-3 transition-all duration-150";

  return (
    <>
      <div className="flex-1 flex items-center justify-center  bg-linear-to-br from-blue-50 to-blue-200 p-8 ">
        <div className="w-full max-w-md">
          <div className="flex md:text-4xl text-[25px] font-medium mb-4">
            <h1>Create an account</h1>
          </div>

          <div className="font-medium text-gray-900 mb-8">
            <p className="text-gray-500 mb-6">
              Already have an account?
              <span className="text-blue-600 underline ml-1">
                <button type="button" onClick={() => set(true)}>
                  <u>Sign in</u>
                </button>
              </span>
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handlesubmit}
            autoComplete="off"
          >
            <div className="space-y-4">
              <div className="relative">
                <Input
                  label="Username"
                  inputtype="text"
                  inputplaceholder="Enter username"
                  isrequird={true}
                  id="username"
                  inputRef={usernameRef}
                  onKeyDown={(e) => handleKeyDown(e, 0)}
                  autoComplete="new-username"
                />

                {/* Password Input with eye button inside input field just like other fields */}
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
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((prev) => !prev)}
                    tabIndex={-1}
                    className="text-center absolute right-3 top-1/2 transform -translate-y-1/2 text-xl focus:outline-none"
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {show ? "🙈" : "👁"}
                  </button>
                </div>

                <Input
                  label="Confirm Password"
                  inputtype={show ? "text" : "password"}
                  inputplaceholder=". . . . . . . ."
                  isrequird={true}
                  id="Cpassword"
                  inputRef={cpasswordRef}
                  onKeyDown={(e) => handleKeyDown(e, 2)}
                  autoComplete="new-password"
                />

                <Input
                  label="Organization Name"
                  inputtype="text"
                  inputplaceholder="Enter organization / company name"
                  isrequird={true}
                  id="org"
                  inputRef={orgRef}
                  onKeyDown={(e) => handleKeyDown(e, 3)}
                  autoComplete="organization"
                />
                <Input
                  label="Tax No / GST No"
                  inputtype="text"
                  inputplaceholder="Enter tax no / GST no"
                  isrequird={true}
                  id="tax-GSTno"
                  inputRef={taxGSTRef}
                  onKeyDown={(e) => handleKeyDown(e, 4)}
                  autoComplete="off"
                />
                <div>
                  <Button
                    variant="ghost"
                    ref={submitBtnRef}
                    type="submit"
                    tabIndex={0}
                    className={baseBtnClass}
                    onKeyDown={handleBtnKeyDown}
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
