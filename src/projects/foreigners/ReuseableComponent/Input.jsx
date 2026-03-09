import React from 'react'

const Input = ({
      className,
      lable,
      isReuired,
      inputType,
      inputPlaceholder,
      value,
      onChange,
      id}) => {
  return (
    <>
    <div className={`${className?className:""} flex flex-col `} >
        <label htmlFor={id} className="font-semibold pb-2">
            {lable}{isReuired && <span className="text-red-600">*</span>}
        </label>
        <input 
            type={inputType || "text"}
            value={value}
            placeholder={inputPlaceholder || "Enter here ...."}
            id={id} 
            onChange={onChange}
             className="border rounded-sm  p-2 border-neutral-400 outline-none focus:border-blue-200  focus:ring-3 focus:ring-blue-300  focus:outline-1"
        />
    </div>
    </>
  )
}

export default Input




// const Input = ({
//   className,
//   lable,
//   isReuired,
//   inputType,
//   inputPlaceholder,
//   value,
//   onChange,
//   id,
// }) => {
//   return (
//     <div className={`${className ? className : ""} flex flex-col`}>
//       <label htmlFor={id} className="font-semibold pb-2 ">
//         {lable} {isReuired && <span className="text-red-600">*</span>}
//       </label>
//       <input
//         type={inputType || "text"}
//         value={value}
//         id={id}
//         onChange={onChange}
//         placeholder={inputPlaceholder || "Enter here . . ."}
//         className="border rounded-sm  p-2 border-neutral-400 outline-none focus:border-blue-200
//             focus:ring-3 focus:ring-blue-300  focus:outline-1"
//       />
//     </div>
//   );
// };