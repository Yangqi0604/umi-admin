import React from 'react';
import {
    Page,
    SkeletonDisplayText,
    SkeletonBodyText,
    Layout,
    Card,
    TextContainer,
  } from '@shopify/polaris';
  
export const IndexSkeletonPage = () => (
    <Page fullWidth={true}>
        <Layout>
            <Layout.Section>
                <TurntableListSkeletonPage />
            </Layout.Section>
        </Layout>
    </Page>
);
export const TurntableListSkeletonPage = () => {
    let cardSections = [];
    for (let i = 0; i < 10; i++) {
      cardSections.push(
        <Card.Section key={i}>
          <SkeletonBodyText lines={2} />
        </Card.Section>,
      );
    }
  
    return (
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <TextContainer>
                <SkeletonDisplayText />
                <div style={{ width: '30%', margin: '1.2rem 0' }}>
                  <SkeletonBodyText lines={1} />
                </div>
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </Card.Section>
            {cardSections}
          </Card>
        </Layout.Section>
      </Layout>
    );
  };