import React from "react";

const Button = ({ className, btnname, icon, onclick }) => {
  return (
    <>
      <div className={`${className} font-semibold justify-center flex`}>
        <button onClick={onclick} className="flex items-center cursor-pointer">
          {icon}
          {btnname}
        </button>
      </div>
    </>
  );
};

export default Button;
