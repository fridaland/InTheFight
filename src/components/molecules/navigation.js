import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Styled, css } from "theme-ui"

export default function Navigation() {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menuLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  const navLinks = data.site.siteMetadata.menuLinks

  return (
    <nav>
      {navLinks.map(link => (
        <li>
          <Styled.a
            as={Link}
            to={link.url}
          >
            {link.name}
          </Styled.a>
        </li>
      ))}
    </nav>
  )
}
