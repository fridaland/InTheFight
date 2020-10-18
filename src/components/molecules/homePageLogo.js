import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import styled from "styled-components"

import HomeBackground from "../../images/ITF-home-logo.png"
import ITFLogo from "../../images/ITF-logo.png"

const HomePageLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "images/ITF-home-logo.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          style={{
              height: `60vh`,
              width: `100vw`,
              backgroundColor: `transparent`,
              backgroundSize: `cover`,
              backgroundPosition: `center center`,
              display: `flex`,
              alignItems: `center`,
            }}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <img src={ITFLogo} style={{margin: `0 35% 0 38%` }}/>
        </BackgroundImage>
      )
    }}
  />
)

export default HomePageLogo;
