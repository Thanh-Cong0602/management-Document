import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./profile.css";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

import { LeftOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import UserContext from "../../Context";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  React.useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "large",
        }}
        size="large"
        style={{
          width: 800,
          padding: "20px 24px 24px 24px",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      >
        <Button icon={<LeftOutlined />} onClick={() => window.history.back()}>
          Quay lại
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <h2>Thông tin cá nhân</h2>
        </div>

        <Form.Item label="Họ và tên">
          <Input />
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input />
        </Form.Item>
        <Form.Item label="Căn cước công dân">
          <Input />
        </Form.Item>
        <Form.Item label="Địa chỉ thường trú">
          <Input />
        </Form.Item>
        <Form.Item label="" className="update-btn-container">
          <Button type="primary">Lưu thay đổi</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInformation;
