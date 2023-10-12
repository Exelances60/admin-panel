import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/Home");
      }}
    >
      Login
    </div>
  );
};

export default Login;
