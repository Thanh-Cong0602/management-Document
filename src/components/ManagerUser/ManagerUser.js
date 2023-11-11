import React, {useEffect, useState} from "react";
import { Table } from "antd";
import axios from "axios";
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
    key: "isActive",
    fixed: "right",
    width: 100,
    dataIndex: "isActive",
    render: (_, { isActive }) => (
      <>{isActive ? <p>active account</p> : <p>banned account</p>}</>
    ),
  },
  {
    title: "Role",
    key: "role",
    fixed: "right",
    width: 100,
    dataIndex: "role",
    render: (_, { role }) => (
        <>{role.role == 'admin' ? <p>ADMIN</p> : <p>USER</p>}</>
    ),
  }
];

const UserList = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost/user").then((res)=> {
      const Data = res.data.content.map((item, key) => {
        return {
          ...item,
          index: key+1
        }
      })
      setData(Data);
      console.log(Data)
    })
  }, []);

  return (
      <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1500,
            y: 300,
          }}
      />
  )
};

export default UserList;
