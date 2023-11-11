import React from "react";
import { Table } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Phiên bản",
    dataIndex: "version",
    key: "version",
  },
];
const data = [
  {
    key: 1,
    name: "aaaaaaa",
    version: 1.0,
    description: "aaaaaaaaaaaaa",
  },
  {
    key: 2,
    name: "bbbbbbbb",
    version: 1.3,
    description: "bbbbbbbbbbb",
  },
  {
    key: 3,
    name: "ccccccc",
    version: 1.5,
    description: "ccccccccccc",
  },
  {
    key: 4,
    name: "dddddddd",
    version: 2.0,
    description: "dddddddddd",
  },
];

const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const DocumentList = () => (
  <div>
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Tải lên</Button>
    </Upload>
    <div style={{ height: "12px" }}></div>
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
      }}
      bordered
      title={() => "Danh sách"}
      dataSource={data}
    />
  </div>
);
export default DocumentList;
