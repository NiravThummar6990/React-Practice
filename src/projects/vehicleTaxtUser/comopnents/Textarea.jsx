import React from "react";

const Textarea = ({
  txtplaceholder,
  name,
  Label,
  value,
  onChange,
  id,
  className,
}) => {
  return (
    <>
      <div className={`${className} flex flex-col text-xl font-semibold`}>
        <label htmlFor={id}>
          {Label}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          name={name}
          id={id}
          value={value}
          placeholder={txtplaceholder}
          onChange={onChange}
          className="border rounded-xs h-24 pl-4"
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
