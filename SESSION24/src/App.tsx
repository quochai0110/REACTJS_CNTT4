import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select, Table } from "antd";

type FieldType = {
  username?: string;
  price?: string;
  remember?: string;
  completed?:string;
};

const dataSource = [
  {
    key: 1,
    name: 'Mike',
    price: 50000,
    completed: "đã thanh toán",
  },
  {
    key: 2,
    name: 'John',
    price: 40000,
    completed: "chưa thanh toán",
  },
    {
    key: 3,
    name: 'C',
    price: 60000,
    completed: "chưa thanh toán",
  },
];

const columns = [
  {
    title: 'Tên chủ hộ ',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số tiền',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'completed',
    key: 'completed',
  },
  {
    title: 'Hành Động',
    dataIndex: 'address',
    key: 'address',
  },
];
export default function App() {
  const [data, setData] =useState<any>(dataSource);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    const new_payment= {
        key: data.length+1,
        name: values.username ,
        price: values.price,
        completed: values.completed?"đã thanh toán":"chưa thanh toán",
  } 
  setData([...data,new_payment]);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      HACKATHON 02
      <h1> Quản lý hóa đơn tiền điện</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="inline"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên chủ hộ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá tiền!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
            name="completed"
          >
          <Select
            defaultValue="Chưa thanh toán"
          
            style={{ width: 120 }}
            options={[
              { value: false, label: "Chưa thanh toán" },
              { value: true, label: "Đã thanh toán" },
              
            ]}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={data} columns={columns} pagination={{pageSize:2,total:data.length,showSizeChanger:true}} />;
    </div>
  );
}
