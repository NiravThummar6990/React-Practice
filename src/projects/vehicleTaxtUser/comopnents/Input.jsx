import React from "react";

const Input = ({
  inputtype,
  inputplaceholder,
  name,
  Label,
  value,
  onChange,
  id,
  className,
  ...props
}) => {
  return (
    <>
      <div className={`${className} flex flex-col font-semibold text-xl`}>
        <label htmlFor={id}>
          {Label}
          <span className="text-red-500">*</span>
        </label>
        <input
          type={inputtype}
          placeholder={inputplaceholder}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          className="border rounded-xs h-10 pl-4"
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
