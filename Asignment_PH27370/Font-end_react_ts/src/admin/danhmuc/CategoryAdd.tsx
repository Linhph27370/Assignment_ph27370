import React from 'react'
import { Button, Form, Input, Select } from 'antd'
import { useNavigate} from 'react-router-dom'
const CategoryAdd = (props) => {
  const navigate = useNavigate()
    const onFinish = (values: any) => {
        // console.log('Success:', values);
        props.onAdd(values)
       
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
         <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 50 }}
        style={{ maxWidth: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >


        <Form.Item
          label="Category Name"
          name="name"
          rules={[{ required: true, message: 'Please input your Product Name!' }]}
        >
          <Input />
        </Form.Item>



        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CategoryAdd