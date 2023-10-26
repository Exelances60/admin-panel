import React, { useState } from "react";
import { loginWithEmailAndPassword } from "../../../../utils/Firebase/FireBase";
import { useNavigate } from "react-router";
import { NotificationMessage } from "../../../../hooks/useNotifaction";
import CircleLoading from "../../../../components/CircleLoading/CircleLoading";
import { notification } from "antd";
import SignInFormComponent from "./SignInFormComponent/SignInFormComponent";

type SignInProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignIn: React.FC<SignInProps> = ({ setOpen }) => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: {
    username: string;
    password: string;
    remember: boolean;
  }) => {
    const { username, password } = values;
    const response = await loginWithEmailAndPassword(username, password);
    if (response === "Firebase: Error (auth/invalid-login-credentials).") {
      return NotificationMessage(
        api,
        "No user found with this email and password"
      );
    }
    if (response?.uid) {
      setLoading(true);
      NotificationMessage(api, "Login successfully");
      navigate("/Home");
    }
  };

  return (
    <>
      {contextHolder}
      {loading ? (
        <CircleLoading />
      ) : (
        <SignInFormComponent onFinish={onFinish} setOpen={setOpen} />
      )}
    </>
  );
};

export default SignIn;
