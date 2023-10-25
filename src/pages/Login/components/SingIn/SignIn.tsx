import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { loginWithEmailAndPassword } from "../../../../utils/Firebase/FireBase";
import { useNavigate } from "react-router";
import { NotificationMessage } from "../../../../hooks/useNotifaction";

type SignInProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignIn: React.FC<SignInProps> = ({ setOpen }) => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
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
      navigate("/Home");
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-blue-500"
          >
            Log in
          </Button>
          Or{" "}
          <p
            onClick={() => {
              setOpen(true);
            }}
          >
            register now!
          </p>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
