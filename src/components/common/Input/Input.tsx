import React from "react";

interface IInput 
{
    placeholder?: string,
    type?: string
}

function Input({placeholder, type}:IInput) {
  return <input className="h-12 w-full bg-white rounded-lg border-2 border-neutral-400 p-1" placeholder={placeholder} type={type?type:"text"}></input>;
}

export default Input;
