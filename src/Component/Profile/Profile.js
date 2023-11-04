import React, { useState } from "react";

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

const PersonalInformation = () => {
  return (
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
        maxWidth: 1000,
        padding: "20px 24px 24px 24px",
      }}
    >
      <h2>Thông tin cá nhân</h2>
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
  );
};

export default PersonalInformation;
