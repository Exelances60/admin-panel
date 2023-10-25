import React from "react";
import { Button, Form, Input } from "antd";
import {
  formItemLayout,
  tailFormItemLayout,
} from "../../../../utils/DefaultStyles/DefaultStyles";
import { useTranslation } from "react-i18next";
import { formDataTypes } from "../../../../types/FormDataTypes/FormDataTypes";
import { registerWithEmailAndPassword } from "../../../../utils/Firebase/FireBase";
import { useNavigate } from "react-router";
import RegisterSvgComponent from "./RegisterAvatarSVG/RegisterAvatarSVG";
import { motion } from "framer-motion";

type RegisterProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Register: React.FC<RegisterProps> = ({ setOpen }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onFinish = async (values: formDataTypes) => {
    const response = await registerWithEmailAndPassword(
      values.email,
      values.nickname,
      values.password
    );
    if (response) navigate("/");
  };
  const required = (message: string, whitespace?: boolean) => ({
    required: true,
    message,
    whitespace,
  });
  const getFieldProps = (name: string, label: string) => {
    return {
      name,
      label,
    };
  };

  return (
    <motion.div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-32 h-32 mb-2">
        <RegisterSvgComponent />
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 900 }}
        className="w-[50%]"
        scrollToFirstError
      >
        <Form.Item
          {...getFieldProps("email", "E-mail")}
          rules={[
            required(t("login.emailRequired")),
            { type: "email", message: t("invalid_email") },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...getFieldProps("password", "Password")}
          rules={[required(t("Please_input_your_password!"))]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...getFieldProps("confirm", "Confirm Password")}
          dependencies={["password"]}
          hasFeedback
          rules={[
            required(t("Please_confirm_your_password!")),
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    t("The_two_passwords_that_you_entered_do_not_match!")
                  )
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...getFieldProps("nickname", "Nickname")}
          tooltip="What do you want others to call you?"
          rules={[required(t("Please_input_your_nickname"), true)]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            className="bg-blue-400 hover:shadow-md ease-in duration-300"
            htmlType="submit"
          >
            {t("Register")}
          </Button>
          <p
            onClick={() => {
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            {t("login.alreadyHaveAccount")}
          </p>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default Register;
