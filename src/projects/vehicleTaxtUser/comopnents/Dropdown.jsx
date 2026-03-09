import React from "react";

const Dropdown = ({
  role = [], // default empty array
  label1,
  id,
  name,
  classname,
  onchange
}) => {
  return (
    <>
      <div className={`${classname} text-xl`}>
        <label htmlFor={id} className="block  font-medium">
          {label1} <span className="text-red-500">*</span>
        </label>

        <select name={name} id={id} onChange={onchange} className="w-full border h-10 rounded pl-4">
          <option value="" className="text-neutral-500">
            Select Role
          </option>

          {role.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
