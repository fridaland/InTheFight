import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../organisms/footer"
import NavBar from "../organisms/navbar"

const Layout = ({children}) => {
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
    <>
      <NavBar siteTitle={data.site.siteMetadata.title} />
        {children}
      <Footer />
    </>
  )
}

export default Layout
