import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Form, Input, Button } from 'antd';
import 'antd/dist/antd.min.css';
import loginBG from './LoginBG.png';
import logInLogo from './logInLogo.png';

const { Content, Footer } = Layout;

export default function Signin() {

  const [account, setAccount] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (account === 'admin' && pwd === 'hiserver') {
      navigate('/home')
    } else {
      navigate('/signin')
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert('帳密不全')
  };

  return (
    <Layout style={{
      height: "100vh",
      width: "100vw"
    }}>
      {/* css參考設定:https://adanaa.com/css-div-div */}
      <Content className='container' style={{
        position: "relative",
        overflow: "hidden"
      }}>
        <img className='content' src={loginBG} alt="login_background" style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "block",
          minHeight: "100%",
          minWidth: "100%",
          transform: "translate(-50%,-50%)",
          opacity: "0.6"
        }} />
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "flex",
          flexDirection: 'column',
          justifyContent:'center',
          backgroundColor: "#f0f2f5",
          borderRadius: "10px",
          width: "350px",
          height: "450px",
          transform: "translate(-50%,-50%)",
          padding: "20px"
        }}>
          <img src={logInLogo} alt="chtIVS" style={{ width: "100%", margin: "0 0 24px", padding:"0 10px" }}></img>
          <Form
            name="loginForm"
            labelCol={{
              span: 24
            }}
            wrapperCol={{
              spna: 24
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="帳號"
              name="account"
              rules={[
                {
                  required: true,
                  message: "請輸入帳號！",
                }
              ]}>
              <Input onChange={(event) => { setAccount(event.target.value) }} placeholder='Account' />
            </Form.Item>

            <Form.Item
              label="密碼"
              name="password"
              rules={[
                {
                  required: true,
                  message: "請輸入密碼！",
                }
              ]}>
              <Input.Password onChange={(event) => { setPwd(event.target.value) }} placeholder='Password' />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                登入
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer style={{
        textAlign: 'center'
      }}>中華電信股份有限公司版權所有 ©{new Date().getFullYear()}  Chunghwa Telecom Co., Ltd. All Rights Reserved.</Footer>
    </Layout>
  )
}

// style={{
//   backgroundImage: `url(${loginBG})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "contain",
//   opacity: "0.8",
// }}
