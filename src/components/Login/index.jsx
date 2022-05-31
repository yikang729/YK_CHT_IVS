import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [account, setAccount] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const onFinish = () => {
    // console.log('Success:', values);
    if (account === 'admin' && pwd === 'hiserver') {
      navigate('/home')
    } else {
      navigate('/signin')
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
    alert('帳密不全')
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="帳號"
          name="username"
          rules={[
            {
              required: true,
              message: '請輸入您的帳號!',
            },
          ]}
        >
          <Input onChange={(event) => { setAccount(event.target.value) }} />
        </Form.Item>

        <Form.Item
          label="密碼"
          name="password"
          rules={[
            {
              required: true,
              message: '請輸入您的密碼!',
            },
          ]}
        >
          <Input.Password onChange={(event) => { setPwd(event.target.value) }} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>記住我</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登入
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
