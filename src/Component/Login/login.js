/** @format */

import React, {useContext} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context";

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
const Login = () => {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("My check");
        const  body = {
            "email": values.username,
            "password": values.password,
        };
        axios.post("http://localhost/user/login",body).then((res)=> {
            const resss = res.data.permission.role;
            if (resss === "user") {
                setUser({role: "user"});
                console.log("Success:", values);
                navigate("/user/homepage");
            } else {
                setUser({role: "admin"});
                console.log("Success:", values);
                navigate("/homepage");
            }
        })

    };
    return (
        <div
            style={{
                width: "497px",
                height: "210px",
                border: "2px solid black",
                padding: "50px",
                margin: "7vh auto auto",
                borderRadius: "10px",
            }}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    Don't have an account?&nbsp; <Link to="/register"> Register</Link>
                </div>
            </Form>
        </div>
    );
};
export default Login;
