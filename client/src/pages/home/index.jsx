import {
    BarChartOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    TeamOutlined,
    FormOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Row, Grid } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import chtLogo from './CHT.png';
import chtLogo32x32 from './CHT_32x32.png';
import chtFooter from './CHTFooter.png';

const { Header, Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
    const navigate = useNavigate();
    const fixMenuItem = [
        { key: '1', icon: <BarChartOutlined />, label: '系統儀表板' },
        { key: '2', icon: <UserOutlined />, label: '帳號管理' },
        { key: '3', icon: <TeamOutlined />, label: '人員管理' },
        { key: 'device', icon: <VideoCameraOutlined />, label: '裝置管理', children: [{ key: '4', label: '裝置列表' }, { key: '5', label: '裝置儀表板' }] },
        { key: 'record', icon: <FormOutlined />, label: '紀錄管理', children: [{ key: '6', label: '即時辨識' }, { key: '7', label: '辨識紀錄' }, { key: '8', label: '操作紀錄' }, { key: '9', label: '出勤紀錄' }, { key: '10', label: '出勤時數' }] }
    ];
    let showMenuItem = screens.xs ? [...fixMenuItem, { key: '99', icon: <LogoutOutlined onClick={()=>{navigate('/signin')}}/>, label: '登出' }] : fixMenuItem ;

    return (
        <Layout id="components-layout-demo-custom-trigger">
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "white" }} breakpoint="lg"

                onBreakpoint={(broken) => {
                    setCollapsed(broken)
                }}
                onCollapse={(collapsed, type) => {
                    // console.log(collapsed, type);
                }}>
                {
                    collapsed ?
                        <img className="logo_min" src={chtLogo32x32} alt="中華電信" /> :
                        <img className="logo_full" src={chtLogo} alt="中華電信" />
                }
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={showMenuItem}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0
                    }}
                >
                    <Row justify="space-between">
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        {
                            collapsed ?
                                ( screens.xs? <></> : <LogoutOutlined className='logoutIcon' onClick={()=>{navigate('/signin')}}/>) :
                                <div>
                                    <label>admin 您好</label>
                                    <LogoutOutlined className='logoutIcon' onClick={()=>{navigate('/signin')}}/>
                                </div>
                        }

                    </Row>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    Content
                </Content>
                <Footer
                    style={{
                        margin: '0px 16px',
                        textAlign: "center",
                        backgroundImage: `url(${chtFooter})`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "contain"
                    }}
                >
                    中華電信股份有限公司版權所有 ©{new Date().getFullYear()}  Chunghwa Telecom Co., Ltd. All Rights Reserved.
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;
