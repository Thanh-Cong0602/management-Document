import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
  }
];
const data = [
  {
    key: 1,
    name: 'aaaaaaa',
    version: 1.0,
    description: 'aaaaaaaaaaaaa',
  },
  {
    key: 2,
    name: 'bbbbbbbb',
    version: 1.3,
    description: 'bbbbbbbbbbb',
  },
  {
    key: 3,
    name: 'ccccccc',
    version: 1.5,
    description: 'ccccccccccc',
  },
  {
    key: 4,
    name: 'dddddddd',
    version: 2.0,
    description: 'dddddddddd',
  },
];
const DocumentList = () => (
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
    title={() => 'Danh sách'}
    dataSource={data}
  />
);
export default DocumentList;