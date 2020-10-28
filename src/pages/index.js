import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"
import Description from "../components/atoms/description"
import HomePageLogo from "../components/molecules/homePageLogo"

import "../styles/index.css";

class IndexPage extends Component {
  render() {
    const homepageData = this.props.data.allContentfulHomepageData.edges

    return (
      <>
        <Layout>
          <HomePageLogo />
          {homepageData.map(data => {
            const { title, simpleDescription, id } = data.node

            return (
              <div className="headline-container" key={id}>
                <Title className="headline" text={title} />
                <Description className="headline-description" text={simpleDescription.simpleDescription} />
              </div>          
            )
          })}
        </Layout>
      </>
    )
  }
}

export default IndexPage

export const homePageQuery = graphql`
  query homePageQuery {
    allContentfulHomepageData {
      edges {
        node {
          id
          title
          simpleDescription {
            simpleDescription
          }
        }
      }
    }
  }`
