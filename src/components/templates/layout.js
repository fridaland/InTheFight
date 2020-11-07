import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "../organisms/navbar"

const Layout = ({ isHome }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <NavBar isHome={isHome} siteTitle={data.site.siteMetadata.title} />
}
  
Layout.propTypes = {
  isHome: PropTypes.bool,
}

Layout.defaultProps = {
  isHome: false,
}

export default Layout
