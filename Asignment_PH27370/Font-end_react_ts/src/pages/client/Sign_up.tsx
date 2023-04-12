import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
const Sign_up = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='sign_up'>
            
            <div className='wp_sign_up'>
            <h2>SING UP</h2>
                <div className='item_sign_up'>
                    <Form
                        name="basic"
                        labelCol={{ span: 8  }}
                        wrapperCol={{ span: 15 }}
                        style={{ maxWidth: 500 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="mail"
                            rules={[{ required: true, type:'email',message: 'Please input your mail!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            style={{}}
                            labelCol={{ span: 8  }}
                            label="Comfirm Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        
                        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Sign_up