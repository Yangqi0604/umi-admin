import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Breadcrumb, Icon } from 'antd';
import Menu from './menu'
import Header from './header'
import './index.css';
const {  Content, Footer, Sider } = Layout;



export default class layout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu/>
        </Sider>
        <Layout>
          <Header/>
          <Content style={{ margin: '10px 16px 0 16px', background:'white' }}>
            {/*<Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>*/}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
