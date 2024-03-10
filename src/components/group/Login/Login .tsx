import React from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import LoginForm from "../LoginForm/LoginForm";

function Login () {
  return <div className="h-96 m-auto lg:w-1/3 flex flex-col bg-neutral-200 rounded-2xl justify-center content-center shadow-md">
    <div className="flex flex-col m-auto gap-2 w-9/12">
<LoginForm placeholder="Username">Username</LoginForm>
<LoginForm placeholder="•••••••••••••••" type="password">Password</LoginForm>
  <div className="flex justify-end">
  <Button onClick={()=>window.location.href="/home"}>Login</Button>
  </div>
    </div>
  <h2 className="w-96 h-16 text-center m-auto text-neutral-700 text-xl font-sans font-light">If you have not account, please<br/>register.</h2>
</div>
}

export default Login ;
