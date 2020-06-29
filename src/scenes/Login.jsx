import React from "react";
import FormLogin from "../components/FormLogin";
import { Row, Col } from "antd";
import "./Login.css";

export default function Login() {
  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 9 }}>
        <FormLogin />
      </Col>
    </Row>
  );
}
