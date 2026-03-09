import React from 'react'

const Button = ({
    children,
    className,
    onCLick

}) => {
  return (
   <>
        <button className={`${className} h-12 w-32 bg-amber-200`} onClick={onCLick}>
           {children}
        </button>
   </>
  )
}

export default Button