import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Outlet ,NavLink} from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


const items1: MenuProps['items'] = ['user', 'product', 'quan ly'].map((key) => ({
  key,
  label: `${key}`,
}));

const items2: MenuProps['items'] = ['user','product','quan ly'].map(
  (icon, index) => {
    const key = String(icon);

    return {
      key: `${key}`,
      // icon: React.createElement(icon),
      label: `${key}`,

      children: new Array(3).fill(null).map((_, j) => {
        const subKey = index * 3 + j + 1;
        return {
          key: subKey,
          label: `${subKey}`,
        };
      }),
    };
  },
);

const LayoutAdmin = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme='dark' style={{margin:"0px 20px"}}>
        <NavLink to="/admin/products" style={{color:"white",marginLeft:"20px"}} >
          {" "}
          Product
        </NavLink>
        <NavLink to="/admin/category" style={{color:"white",marginLeft:"20px"}} >
          {" "}
          Category
        </NavLink>
        <NavLink to="add" style={{color:"white",marginLeft:"20px"}} >
          {" "}
          Add Users
        </NavLink>
          </Menu>
        
      </Header>
      <Content style={{ padding: '10px 50px' }}>
    
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
              
            />
          </Sider>
          
          <Content  style={{ padding: '10px 24px', minHeight: 280  }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
    </div>
  );
};

export default LayoutAdmin;
