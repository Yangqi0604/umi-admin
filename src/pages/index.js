import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="app-container">
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </div>
        );
    }
}

export default App;