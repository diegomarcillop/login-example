import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./FormLogin.less";

export default function FormLogin() {
  const validateMessages = {
    required: "${name} is required",
    types: {
      email: "Email invalido",
    },
  };

  return (
    <Form
      name="nest-messages"
      className="form-login register-form"
      validateMessages={validateMessages}
      initialValues={{
        remember: true,
      }}
    >
      <div className="img-content">
        <img
          src="./avatar.svg"
          alt="img-avatar"
          width="180"
          style={{
            borderRadius: "100px",
            border: "2px solid #F2CD27",
          }}
        />
        <h1>Iniciar Sesión</h1>
      </div>
      <label>Email</label>
      <Form.Item
        name={["user", "email"]}
        rules={[
          { type: "email" },
          { required: true, message: "Ingresa tu Email" },
        ]}
      >
        <Input
          name="email"
          size="large"
          placeholder="ej: juan@gmail.com"
          prefix={<MailOutlined />}
        />
      </Form.Item>

      <label>Contraseña</label>
      <Form.Item
        rules={[{ required: true, message: "Ingresa tu contraseña" }]}
        name={["user", "password"]}
      >
        <Input.Password
          placeholder="* * * * * *"
          size="large"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <h4>
        <a href="/" className="forgot">
          Olvidaste tu contraseña?
        </a>
      </h4>
      <Button type="primary" htmlType="submit" block size="large">
        Ingresar
      </Button>
      <p>
        No tienes una cuenta? <a href="/">Registrate</a>
      </p>
    </Form>
  );
}
