import React, { FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

type SignInFormComponentProps = {
  onFinish: (values: {
    username: string;
    password: string;
    remember: boolean;
  }) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignInFormComponent: FC<SignInFormComponentProps> = ({
  onFinish,
  setOpen,
}) => {
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className="text-center text-2xl mb-2">Login</h1>
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

          <p className="login-form-forgot">Forgot password</p>
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

export default SignInFormComponent;
