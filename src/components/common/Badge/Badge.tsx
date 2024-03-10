import React from "react";

interface IBadge 
{
    children: string, 
    color?: string,
    textColor?: string,
}
function Badge({children, color, textColor}: IBadge) {
  return <div className={`${color?color:"bg-white"} rounded-2xl ${textColor?textColor:"bg-white"} w-60 h-11 font-semibold flex flex-col justify-center content-center m-auto`}>{children}</div>;
}

export default Badge;
