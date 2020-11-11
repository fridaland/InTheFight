import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../organisms/footer';
import NavBar from '../organisms/navbar';

const Layout = ({ children, isHome }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <NavBar isHome={isHome} siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

Layout.defaultProps = {
  isHome: false,
};

export default Layout;
