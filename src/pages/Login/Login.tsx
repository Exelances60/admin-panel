import React, { useState } from "react";
import Register from "./components/Register/Register";
import SignIn from "./components/SingIn/SignIn";

const Login = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <>
        {open ? <Register setOpen={setOpen} /> : <SignIn setOpen={setOpen} />}
      </>
    </div>
  );
};

export default Login;
