import React, { Component,Suspense } from 'react'
import {
    Card,
    Tabs,
} from '@shopify/polaris';
import Message from '../../comment/message'
import { IndexSkeletonPage } from '../../comment/tagrouter';
import lang from '@lang/en/turntable/config'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            message: {
                title: lang.message.title,
                config: lang.message.config
            },
            tabs: [
                {
                    id: 'home',
                    content: 'Home',
                    panelID: 'home-page',
                    component: React.lazy(() => import('@turntable/homePageComponents')),
                },
                {
                    id: 'settings',
                    content: 'Settings',
                    panelID: 'settings-page',
                    component: React.lazy(() => import('@turntable/settingPageComponents')),
                }
            ],
        };
    }
    handleTabChange = newVal => {
        this.setState({
            selected: newVal,
        });
    };
    render() {
        const { tabs, selected } = this.state;
        const PageComponent = tabs[selected].component;
        return (
            <div>
                <Message message={this.state.message} />
                <div style={{marginTop:'2rem'}}>
                    <Card>
                        <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange}>
                            <Card.Section>
                                <Suspense fallback={<IndexSkeletonPage />}>
                                    <PageComponent />
                                </Suspense>
                            </Card.Section>
                        </Tabs>
                    </Card>
                </div>
            </div>
        )
    }
}
