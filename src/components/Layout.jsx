import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ location, children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <div className="min-h-screen grid-layout">
      <Header title={title} location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
