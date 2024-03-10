import React from "react";
import Input from "../../common/Input/Input";

interface ILoginForm
{
   children: string,
   placeholder?: string,
   type?: string
}

function LoginForm({children, placeholder,type}:ILoginForm) {
  return  <div>
  <div className="w-48 h-9 text-left text-neutral-700 text-2xl font-medium font-['Montserrat']">{children}</div>
  <Input placeholder={placeholder} type={type}/>
  </div> ;
}

export default LoginForm;
