import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, Input, Select } from 'antd'
const ProductAdd = (props) => {
  // const {register, handleSubmit} =useForm()
  const optionss = props.categories

  // const oneHandleSubmit = (data) =>{
  //     console.log(data);
  //     props.onAdd(data)
  // }
  const onFinish = (values: any) => {
    // console.log('Success:', values);
    props.onAdd(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='add'>
      {/* <form action='' onSubmit={handleSubmit(oneHandleSubmit)}>
            <input type="text" placeholder='them san pham' {...register("name")} />
            <input type="number" placeholder='them gia ' {...register("price")} />
            <button type='submit'>them</button>
        </form> */}
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

        {/* <Form.Item label="Select">
          <Select>
            <Select.Option value="">Demo</Select.Option>
            
          </Select>
      </Form.Item> */}
        {/* <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: 'Please input your Product categoryId!' }]}
        >
          <Input />

        </Form.Item> */}
         <Form.Item
                    label="Category"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your Product categoryId!' }]}
                >
                   <Select style={{ maxWidth: 600 }}>
                        {optionss.map((values, index) => {
                            // console.log(value)
                            return (
                                <Select.Option key={index} value={values._id}>
                                    {values.name}
                                </Select.Option>
                            );
                        })}
                    </Select>
          </Form.Item>


        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: 'Please input your Product Name!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: 'Please input your Image!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your Price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
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

export default ProductAdd