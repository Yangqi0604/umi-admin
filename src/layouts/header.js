import React from 'react';
import router from 'umi/router';
import { Avatar, Icon, Layout, Input, Menu, Dropdown } from 'antd';

import "./index.css"
import { Router } from 'react-router';
const { Header } = Layout;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={()=>router.push('/game/turntable')}>
        admin
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        user
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        master
      </a>
    </Menu.Item>
  </Menu>
);

export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }
  }
  
  handleclick = () => {
    console.log(1)
  }
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }} >
        <div className="header-box">
          <div>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
          <div>
            <Dropdown overlay={menu} placement="bottomRight">
              <Avatar src={this.state.Img} onClick={this.handleclick} style={{ marginBottom: '2px' }} />
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}
