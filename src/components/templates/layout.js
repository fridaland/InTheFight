import React from "react"
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

export default Layout
