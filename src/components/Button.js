import React from 'react'

const Button = ({ children, className, theme}) => {
  let background;

  switch (theme) {
    case "primary":
      background = "bg-[#a04794]  hover:bg-[#5e3a5a] "
      break;
      default:
    background = 'bg-[#de9bd5] hover:bg-[#5e3a5a]';
  }
  
  return (
    <div>
    <button className={`${className} ${background} outline-none uppercase rounded-xl px-4 py-3  shadow-xl transition-all text-white 
               animate `}>
      {children}
    </button>
    </div>
  )
}

export default Button;  