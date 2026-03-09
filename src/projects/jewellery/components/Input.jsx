import React from "react";

const Input = ({
  type,
  inputtype, // fallback for legacy props
  label,
  isrequird,
  required, // allow explicit override
  id,
  inputplaceholder,
  classname,
  inputRef,
  onKeyDown,
  autoFocus,
  noTailwind,
  ...props
}) => {
  // Compose default tailwind input class
  const tailwindClasses =
    "shadow-sm w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500";

  // Choose which class string to use
  const inputClassName = noTailwind
    ? classname || undefined
    : `${tailwindClasses}${classname ? ` ${classname}` : ""}`;

  // Prioritize order of boolean 'required':
  // If required passed, use its value,
  // else fallback to isrequird (legacy misspelling), otherwise false.
  const finalRequired = required !== undefined ? required : !!isrequird;

  return (
    <div className="flex flex-col gap-1 pb-2">
      {label && (
        <label htmlFor={id} className="text-black md:text-[16px] font-semibold">
          {label}
          {finalRequired && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        ref={inputRef}
        autoFocus={autoFocus}
        type={type || inputtype || "text"}
        id={id}
        required={finalRequired}
        placeholder={inputplaceholder}
        onKeyDown={onKeyDown}
        className={inputClassName}
        {...props}
      />
    </div>
  );
};

export default Input;
