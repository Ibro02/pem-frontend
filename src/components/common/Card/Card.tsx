import React from "react";
interface ICard 
{
    children: React.HTMLAttributes<HTMLDivElement>|any,
    color?: string
}
function Card({children, color}: ICard) {
  return <div className={`w-auto h-auto flex flex-col shadow-md hover:shadow-none transition-all duration-200 ${color?color:"bg-neutral-200"} rounded-2xl p-10`}>{children}</div>;
}

export default Card;
