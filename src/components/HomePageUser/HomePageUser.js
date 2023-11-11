/** @format */

import React, { useState, useContext } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context";
import { Link } from "react-router-dom";

import UserList from "../ManagerUser/ManagerUser";

const { Header, Sider, Content } = Layout;
const HomePageUser = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  React.useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <VideoCameraOutlined />,
              label: "Xem tài liệu",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Upload tài liệu",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "24px",
                }}
              >
                <div style={{ marginRight: "12px" }}>{user.name}</div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <FaUserCircle onClick={() => setShowOptions(!showOptions)} />
                  {showOptions && (
                    <div
                      style={{
                        width: "80px",
                        position: "absolute",
                        right: "0",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        top: "27px",
                        backgroundColor: "white",
                        zIndex: "500",
                      }}
                    >
                      <Link
                        style={{
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "12px",
                          borderBottom: "1px solid #c4c4c4",
                          color: "black",
                        }}
                        to="/profile"
                      >
                        Profile
                      </Link>
                      <Link
                        style={{
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "12px",
                          color: "black",
                        }}
                        to="/login"
                        onClick={() => setUser({})}
                      >
                        Log out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <UserList />
        </Content>
      </Layout>
    </Layout>
  );
};
export default HomePageUser;
