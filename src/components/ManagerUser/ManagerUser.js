import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "1",
    width: 150,
  },
  {
    title: "Date of birth",
    dataIndex: "dob",
    key: "2",
    width: 150,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "3",
    width: 150,
    render: (_, { gender }) => <> {gender ? <p>Male</p> : <p>Female</p>}</>,
  },
  {
    title: "Status",
    key: "status",
    fixed: "right",
    width: 100,
    dataIndex: "status",
    render: (_, { status }) => (
      <>{status ? <p>active account</p> : <p>banned account</p>}</>
    ),
  },
];
const data = [
  {
    email: "tuankiet091002@gmail.com",
    name: "Tuan Kiet",
    phone: "0963987949",
    dob: "26/02/2002",
    gender: true, // male or female
    status: true, // active account or banned account
  },
  {
    email: "tuankiet091002@gmail.com",
    name: "Tuan Kiet",
    phone: "0963987949",
    dob: "26/02/2002",
    gender: false, // male or female
    status: false, // active account or banned account
  },
];

const UserList = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);

export default UserList;
