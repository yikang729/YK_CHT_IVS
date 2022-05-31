import React from 'react';
import { Layout } from 'antd';
import Login from '../../components/Login'
import 'antd/dist/antd.min.css';

const { Header, Footer, Content } = Layout;

export default function Signin() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header style={{ color: 'white' }}>
          HiFace人臉辨識系統
        </Header>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Login />
        </Content>
        <Footer style={{ textAlign: 'center' }}>中華電信股份有限公司版權所有 ©2022  Chunghwa Telecom Co., Ltd. All Rights Reserved.</Footer>
      </Layout>
    </Layout>
  )
}
