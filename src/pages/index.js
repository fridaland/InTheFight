import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"
import Description from "../components/atoms/description"
import HomePageLogo from "../components/molecules/homePageLogo"

class IndexPage extends Component {
  render() {
    const homepageData = this.props.data.allContentfulHomepageData.edges

    return (
      <>
        <Layout isHome={true} />
        <HomePageLogo />
        {homepageData.map(data => {
          const { title, simpleDescription } = data.node

          return (
            <div key={data.node.id}>
              <Title text={title} />
              <Description text={simpleDescription.simpleDescription} />
            </div>
          )
        })}
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
  }
`
