import React from "react";

interface IButton {
    children: string,
    type?: string, 
    color?: string, 
    onClick?: Function | undefined;
}


function Button({type, color, children, onClick}:IButton) {
  return <button className={`${!color?"bg-neutral-700":color} border-black w-24 h-10 rounded-2xl text-white`} onClick={() => onClick()}>
    {children}
  </button>;
}

export default Button;
