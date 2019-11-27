import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Menu from './menu'
import Header from './header'
import './index.css';
import '@shopify/polaris/styles.css';
import en from '@shopify/polaris/locales/en.json';
import { AppProvider, Frame } from '@shopify/polaris';
const { Content, Sider } = Layout;



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
      <AppProvider i18n={en}>
        <Frame>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo">React</div>
              <Menu />
            </Sider>
            <Layout>
              <Header />
              <Content style={{padding: '15px', margin: '10px 16px 0 16px', background: 'white', overflow: 'initial'  }}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>*/}
                {this.props.children}
              </Content>
            </Layout>
          </Layout>

        </Frame>
      </AppProvider>
    )
  }
}