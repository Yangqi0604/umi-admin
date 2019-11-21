import React, { Component } from 'react'
import {TextContainer,Heading } from '@shopify/polaris';
export default class index extends Component {
    render() {
        const style = {
            background: 'rgb(214, 214, 214)',
            border: '1px dashed #b2b0b0',
            padding: '15px',
            borderRadius: '5px'
        }
        const {config,title}=this.props.message
        return (
            <div style={style}>
                <TextContainer>
                    <Heading>{title}</Heading>
                    <p>
                        {config}
                    </p>
                </TextContainer>
            </div>
        )
    }
}
