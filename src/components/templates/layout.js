import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "../organisms/navbar"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <NavBar siteTitle={data.site.siteMetadata.title} />
  )
}

export default Layout
