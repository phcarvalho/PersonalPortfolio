import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { Container, PageContainer, ContentContainer } from './styles';

import Menu from '../Menu';
import Footer from '../Footer';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          subtitle,
          facebook,
          github,
          linkedIn,
          twitter,
        }
      }
    }
  `)

  const { author, subtitle } = data.site.siteMetadata;

  return (
    <Container>
      <PageContainer>
        <Menu 
          data={{
            author,
            subtitle,
          }}
        />
        <ContentContainer>
          { children }
        </ContentContainer>
        <Footer />
      </PageContainer>
    </Container>
  );
}

export default Layout;