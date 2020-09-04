import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../organisms/header"

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
    <Header siteTitle={data.site.siteMetadata.title} />
  )
}

export default Layout
